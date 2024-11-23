import { httpService } from './http.service'
import { Logger } from 'sass'
const BASE_URL = 'auth/'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    saveLoggedinUser,
    signupWithGoogle,
    loginWithGoogle,
    isUserExist,
}

function getUsers() {
    return httpService.get(`user`)
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
    const user = await httpService.put(`user/${_id}`, { _id, score })

    // When admin updates other user's details, do not update loggedinUser
    const loggedinUser = getLoggedinUser() // Might not work because its defined in the main service???
    if (loggedinUser._id === user._id) saveLoggedinUser(user)

    return user
}

async function isUserExist(username) {
    return await httpService.get(`user/getIsUserExist/${username}`)

}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    userCred.score = 10000

    const user = await httpService.post('auth/signup', userCred)
    return saveLoggedinUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLoggedinUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        isAdmin: user.isAdmin
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}


async function signupWithGoogle({ sub, email, name, picture }) {
    const userExist = await isUserExist(email)
    console.log("userExist", userExist)
    const credentials = {
        username: email,
        password: sub,
        fullname: name,
        imgUrl: picture
    }
    console.log("credentials", credentials)
    if (userExist) {
        try {

            let loggedinUser = await login(credentials)

            const loggedinUserToSet = {
                _id: loggedinUser._id,
                fullname: loggedinUser.fullname,
                isAdmin: loggedinUser,
                imgUrl: loggedinUser.imgUrl
            }
            _setLoggedinUser(loggedinUserToSet)

            return loggedinUser


        } catch (error) {

            console.log('problem login: ' + error)
            // Logger.error('problem login: '+error)
        }
    }

    try {
        const user = await signup(credentials)

        const loggedinUser = {
            _id: user._id,
            fullname: user.fullname,
            isAdmin: true,
            imgUrl: user.imgUrl
        }
        console.log('loggedinUser:', loggedinUser)
        _setLoggedinUser(loggedinUser)
        return loggedinUser

    } catch (error) {

        console.log('problem login: ' + error)
        // Logger.error('problem login: '+error)
    }
}

async function loginWithGoogle({ sub, email, name, imgUrl }) {

    try {
        const user = {
            _id: sub,
            fullname: name.split('@')[0],
            isAdmin: true,
            imgUrl: imgUrl
        }
        console.log(user)
        _setLoggedinUser(user)
        return user

    } catch (error) {
        console.log('problem login: ' + error)
        Logger.error('problem login: ' + error)
    }
}

function _setLoggedinUser(user) {
    const userToSave = { _id: user._id, fullname: user.fullname, isAdmin: user.isAdmin, imgUrl: user.imgUrl || null }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return userToSave
}
