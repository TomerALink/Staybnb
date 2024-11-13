import { useEffect, useState } from "react"
import { stayService } from "../services/stay.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { saveStay } from "../store/actions/stay.actions.js"
import { Link, useNavigate, useParams } from "react-router-dom"


export function AddStay() {
    const navigate = useNavigate()
    const [stayToEdit, setStayToEdit] = useState(stayService.getEmptyStay())
    const { stayId } = useParams()

    useEffect(() => {
        if (stayId) loadStay()
    }, [])

    function loadStay() {
        stayService.getById(stayId)
            .then(stay => setStayToEdit(stay))
            .catch(err => {
                console.log('Had issues in stay edit', err)
                navigate('/')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value

        setStayToEdit((prevStay) => {
            if (field === 'price') {
                return { ...prevStay, [field]: value }
            } else {
                return {
                    ...prevStay,
                    loc: {
                        ...prevStay.loc,
                        [field]: value
                    }
                }
            }
        })
    }

    function onSaveStay(ev) {
        ev.preventDefault()
        saveStay(stayToEdit)
            .then(() => {
                showSuccessMsg('Stay Saved!')
                navigate('/')
            })
            .catch(err => {
                console.log('Had issues in stay details', err)
                showErrorMsg('Had issues in stay details')
            })
    }

    return (
        <section className="stay-add">
            <h2>{stayToEdit._id ? 'Edit' : 'Add'} Stay</h2>

            <form onSubmit={onSaveStay} >
                <label htmlFor="country">country : </label>
                <input type="text"
                    name="country"
                    id="country"
                    placeholder="Enter country..."
                    value={stayToEdit.loc.country}
                    onChange={handleChange}
                />
                <label htmlFor="city">city : </label>
                <input type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city..."
                    value={stayToEdit.loc.city}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter price"
                    onChange={handleChange}
                />


                <div>
                    <button className="btn btn-shadow">{stayToEdit._id ? 'Save' : 'Add'}</button>
                    <Link className="btn btn-shadow" to="/">Cancel</Link>
                </div>
            </form>
        </section>
    )
}