
export function StayDetailsGallery({ imgs }) {
    return (
        <div className="stay-gallery">
            {imgs.slice(0, 5).map((url, idx) => (
                <div key={idx} className={`gallery-item img-${idx}`}>
                    <img src={url} alt={`stay gallery image ${idx + 1}`} />
                </div>
            ))}
        </div>
    )
}