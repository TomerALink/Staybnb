import { Logo } from "./Logo";
import { useNavigate } from 'react-router-dom'
import i18 from "/src/assets/img/i18.svg"
import burger from "/src/assets/img/burger.svg"
import avatar from "/src/assets/img/avatar.svg"

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
                <button className="btn btn-active"><img className='i18' src={i18} alt="" /></button>
                <button className="btn btn-shadow"><img className='burger' src={burger} alt="" /><img className='avatar' src={avatar} alt="" /></button>
            </div>
        </section>
    )
}