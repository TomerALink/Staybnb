import { Logo } from './Logo.jsx'

export function AppHeader() {


	return (
		<header className="app-header full">
			<section className="top-header">
				<Logo />
				<section className='stay-experience-btns'>
					<button className="btn-active">Stays</button>
					<button className="btn">Experiences</button>
				</section>
				<div>
				<button className="btn btn-active airbnb-your-home">Airbnb your home</button>
				<button className="btn btn-active"><img className='i18' src="/src/assets/img/i18.svg" alt="" /></button>
				<button className="btn btn-shadow"><img className='burger' src="/src/assets/img/burger.svg" alt="" /><img className='avatar' src="/src/assets/img/avatar.svg" alt="" /></button>
					
				</div>
			</section>

		</header>
	)
}
