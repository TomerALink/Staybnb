import { useState } from 'react'
import close from "/src/assets/img/close.svg"

export function StayDetailsAmenities({ amenities }) {

    //"/src/assets/amenities/amen-....svg"
    
    const amenitiesDict = {
        "TV": "/src/assets/amenities/amen-tv.svg",
        "Cable TV": "/src/assets/amenities/amen-tv.svg",
        "Internet": "/src/assets/amenities/amen-wifi.svg",
        "Wifi": "/src/assets/amenities/amen-wifi.svg",
        "Ethernet connection": "/src/assets/amenities/amen-ethernet.svg",
        "Essentials": "/src/assets/amenities/amen-essentials.svg",
        "First aid kit": "/src/assets/amenities/amen-first-aid.svg",
        "Elevator": "/src/assets/amenities/amen-elevator.svg",
        "Air conditioning": "/src/assets/amenities/amen-air-conditioning.svg",
        "Heating": "/src/assets/amenities/amen-heating.svg",
        "Fire extinguisher": "/src/assets/amenities/amen-fire-extinguisher.svg",
        "Smoke detector": "/src/assets/amenities/amen-detector.svg",
        "Carbon monoxide detector": "/src/assets/amenities/amen-detector.svg",
        "Hot water": "/src/assets/amenities/amen-hot-water.svg",
        "Shampoo": "/src/assets/amenities/amen-shampoo.svg",
        "Hair dryer": "/src/assets/amenities/amen-hair-dryer.svg",
        "Washer": "/src/assets/amenities/amen-washer.svg",
        "Dryer": "/src/assets/amenities/amen-dryer.svg",
        "Iron": "/src/assets/amenities/amen-iron.svg",
        "Extra pillows and blankets": "/src/assets/amenities/amen-extra-pillow.svg",
        "Bed linens": "/src/assets/amenities/amen-bed-linens.svg",
        "Hangers": "/src/assets/amenities/amen-hangers.svg",
        "Room-darkening shades": "/src/assets/amenities/amen-room-darkening.svg",
        "Kitchen": "/src/assets/amenities/amen-kitchen.svg",
        "Cooking basics": "/src/assets/amenities/amen-kitchen.svg",
        "Pool": "/src/assets/amenities/amen-pool.svg",
        "Hot tub": "/src/assets/amenities/amen-hot-tub.svg",
        "Gym": "/src/assets/amenities/amen-gym.svg",
        "Waterfront": "/src/assets/amenities/amen-waterfront.svg",
        "Beachfront": "/src/assets/amenities/amen-beach-front.svg",
        "Family/kid friendly": "/src/assets/amenities/amen-kid-friendly.svg",
        "Laptop friendly workspace": "/src/assets/amenities/amen-workspace.svg",
        "Suitable for events": "/src/assets/amenities/amen-events.svg",
        "Pets allowed": "/src/assets/amenities/amen-pets.svg",
        "Smoking allowed": "/src/assets/amenities/amen-smoking.svg",
        "Disabled parking spot": "/src/assets/amenities/amen-parking.svg",
        "Step-free access": "/src/assets/amenities/amen-disabled.svg",
        "Flat path to front door": "/src/assets/amenities/amen-disabled.svg",
        "Wheelchair accessible": "/src/assets/amenities/amen-disabled.svg",
        "Wide doorway": "/src/assets/amenities/amen-wide-entrance.svg",
        "Wide entryway": "/src/assets/amenities/amen-wide-entrance.svg",
        "Wide hallway clearance": "/src/assets/amenities/amen-wide-entrance.svg",
        "Wide clearance to bed": "/src/assets/amenities/amen-bed.svg",
        "Well-lit path to entrance": "/src/assets/amenities/amen-security.svg",
        "Private entrance": "/src/assets/amenities/amen-wide-entrance.svg",
        "Ground floor access": "/src/assets/amenities/amen-wide-entrance.svg",
        "24-hour check-in": "/src/assets/amenities/amen-check-in.svg",
        "Self check-in": "/src/assets/amenities/amen-check-in.svg",
        "Safety card": "/src/assets/amenities/amen-safety-card.svg",
        "Free parking on premises": "/src/assets/amenities/amen-parking.svg",
        "Long term stays allowed": "/src/assets/amenities/amen-long-term.svg",
        "Luggage dropoff allowed": "/src/assets/amenities/amen-luggage.svg",
        "Building staff": "/src/assets/amenities/amen-building-stuff.svg",
        "Doorman": "/src/assets/amenities/amen-building-stuff.svg"
    }
    const maxShowAmenities = 10
    const [showAll, setShowAll] = useState(false)

    function onToggleModal() {
        setShowAll(!showAll)
    }

    return (
        <div className="stay-amenities" id="amenities">
            <h2>What this place offers</h2>

            <ul className="amenities-list">
                {amenities.slice(0, maxShowAmenities).map((amenity, index) => (
                    <li key={index}>
                        {amenitiesDict[amenity] && (
                            <img src={amenitiesDict[amenity]} alt={`${amenity} icon`} />
                        )}
                        {amenity}
                    </li>
                ))}
            </ul>
            {amenities.length > maxShowAmenities && (
                <button onClick={onToggleModal} className="show-all-btn">
                    Show all {amenities.length} amenities
                </button>
            )}


            {showAll && (
                <div className="amenities-modal-overlay" onClick={onToggleModal}>
                    <div className="amenities-modal" onClick={(ev) => ev.stopPropagation()}>
                        <button onClick={onToggleModal} className="close-btn">
                            <img src={close} alt="close-icon" />
                        </button>
                        <h2>What this place offers</h2>
                        <ul className="amenities-list">
                            {amenities.map((amenity, index) => (
                                <li key={index}>
                                    {amenitiesDict[amenity] && (
                                        <img src={ amenitiesDict[amenity]} alt={`${amenity} icon`} />
                                    )}
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </div>
    )
}