
export function StayDetailsShareSave({ name }) {

    return (
        <div className="stay-share-save">
            <h1 className="stay-title">{name}</h1>
            <div className="share-save-btns">
                <button className="btn share">
                    <img src="/src/assets/img/share.svg" alt="share-icon" />
                    Share
                </button>
                <button className="btn save">
                    <img src="/src/assets/img/heart-empty.svg" alt="heart-empty-icon" />
                    Save
                </button>
            </div>
        </div>
    )
}