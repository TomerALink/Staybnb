import { Logo } from "./Logo";
import { useNavigate } from 'react-router-dom'

export function TopHeader() {
    const navigate = useNavigate()
    function onAirbnbYourHomeCliced() {

        navigate('/stay/add')
    }
    return (
        <section className="top-header">
            <Logo />
            <section className='stay-experience-btns'>
                <button className="btn-active">Stays</button>
                <button className="btn">Experiences</button>
            </section>
            <div>
                <button onClick={onAirbnbYourHomeCliced} className="btn btn-active airbnb-your-home">Airbnb your home</button>
                <button className="btn btn-active"><img className='i18' src="/src/assets/img/i18.svg" alt="" /></button>
                <button className="btn btn-shadow"><img className='burger' src="/src/assets/img/burger.svg" alt="" /><img className='avatar' src="/src/assets/img/avatar.svg" alt="" /></button>
            </div>
        </section>
    )
}