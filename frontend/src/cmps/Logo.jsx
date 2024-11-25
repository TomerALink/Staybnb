import logoImg from '/src/assets/img/logo.png'; // Adjust the path as needed


export function Logo() {
	

	return (
		<>
        <div className="logo">
            <img src={logoImg} alt="Staybnb logo" />    
            <div>staybnb</div>
        </div>
        </>
	)
}