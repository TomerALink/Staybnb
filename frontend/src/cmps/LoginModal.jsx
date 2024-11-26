export function LoginModal({  openLoginModal, setOpenLoginModal }) {
   
    function onToggleModal() {
        setOpenLoginModal(!openLoginModal)
    }

    return (
        <>
            <div className="confirmation-modal-overlay" onClick={onToggleModal}>
                <div className="confirmation-modal" onClick={(ev) => ev.stopPropagation()}>
                    
                    <h1>Please log in before entering this page</h1>
                        <div className='close-btn-container'>
                            <button onClick={onToggleModal} className="confirm-modal-btn" >Close</button>
                        </div>
                   
                </div>
            </div>
        </>
    )

}