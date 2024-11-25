import share from "/src/assets/img/share.svg"
import heart_empty from "/src/assets/img/heart-empty.svg"

export function StayDetailsShareSave({ name }) {

    return (
        <div className="stay-share-save">
            <h1 className="stay-title">{name}</h1>
            <div className="share-save-btns">
                <button className="btn share">
                    <img src={share} alt="share-icon" />
                    Share
                </button>
                <button className="btn save">
                    <img src={heart_empty} alt="heart-empty-icon" />
                    Save
                </button>
            </div>
        </div>
    )
}