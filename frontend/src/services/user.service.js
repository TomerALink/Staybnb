import { Logger } from 'sass'
import { httpService } from './http.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'
const BASE_URL = 'auth/'

export const userService = {
    login,
    loginWithGoogle,
    signup,
    logout,
    getLoggedinUser,

    getById,
    getEmptyCredentials
}

async function login({ username, password }) {
    try {
        const user =  await httpService.post(BASE_URL+'login',  { username, password })
        _setLoggedinUser(user)
        return user
        
    } catch (error) {
        console.log('problem login: '+error)
        Logger.error('problem login: '+error)
    }
}

async function signup({ username, password, fullname }) {
    try {
        const user = await httpService.post(BASE_URL+'signup', { username, password, fullname })
        _setLoggedinUser(user)
        return user
        
    } catch (error) {
        console.log('problem singingup: '+error)
        Logger.error('problem singingup: '+error)
    }

}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return Promise.resolve(true)
    // return httpService.post(BASE_URL+'logout') //TODO add when backend is added
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getById(userId) {
    return httpService.get(BASE_URL, userId)
}

function getEmptyCredentials() {
    return {
        username: '',
        password: '',
        fullname: ''
    }
}

async function loginWithGoogle({ sub, email, name, picture}) {
    try {
        const user = {
            _id: sub,
            fullname: name.split('@')[0],
            isAdmin: true,
            picture: picture
        }
        _setLoggedinUser(user)
        return user
        
    } catch (error) {
        console.log('problem login: '+error)
        Logger.error('problem login: '+error)
    }
}


function _setLoggedinUser(user) {
    const userToSave = { _id: user._id, fullname: user.fullname, isAdmin: user.isAdmin, picture: user.picture || null }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return userToSave
}
