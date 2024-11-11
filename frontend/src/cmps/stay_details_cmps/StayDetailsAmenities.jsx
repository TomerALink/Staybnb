import React, { useState } from 'react'

export function StayDetailsAmenities({ amenities }) {

    const amenityIconsLink = "/src/assets/amenities"
    const amenitiesDict = {
        "TV": "tv",
        "Cable TV": "tv",
        "Internet": "wifi",
        "Wifi": "wifi",
        "Ethernet connection": "ethernet",
        "Essentials": "essentials",
        "First aid kit": "first-aid",
        "Elevator": "elevator",
        "Air conditioning": "air-conditioning",
        "Heating": "heating",
        "Fire extinguisher": "fire-extinguisher",
        "Smoke detector": "detector",
        "Carbon monoxide detector": "detector",
        "Hot water": "hot-water",
        "Shampoo": "shampoo",
        "Hair dryer": "hair-dryer",
        "Washer": "washer",
        "Dryer": "dryer",
        "Iron": "iron",
        "Extra pillows and blankets": "extra-pillow",
        "Bed linens": "bed-linens",
        "Hangers": "hangers",
        "Room-darkening shades": "room-darkening",
        "Kitchen": "kitchen",
        "Cooking basics": "kitchen",
        "Pool": "pool",
        "Hot tub": "hot-tub",
        "Gym": "gym",
        "Waterfront": "waterfront",
        "Beachfront": "beach-front",
        "Family/kid friendly": "kid-friendly",
        "Laptop friendly workspace": "workspace",
        "Suitable for events": "events",
        "Pets allowed": "pets",
        "Smoking allowed": "smoking",
        "Disabled parking spot": "parking",
        "Step-free access": "disabled",
        "Flat path to front door": "disabled",
        "Wheelchair accessible": "disabled",
        "Wide doorway": "wide-entrance",
        "Wide entryway": "wide-entrance",
        "Wide hallway clearance": "wide-entrance",
        "Wide clearance to bed": "bed",
        "Well-lit path to entrance": "security",
        "Private entrance": "wide-entrance",
        "Ground floor access": "wide-entrance",
        "24-hour check-in": "check-in",
        "Self check-in": "check-in",
        "Safety card": "safety-card",
        "Free parking on premises": "parking",
        "Long term stays allowed": "long-term",
        "Luggage dropoff allowed": "luggage",
        "Building staff": "building-stuff",
        "Doorman": "building-stuff"
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
                            <img src={amenityIconsLink + "/amen-" + amenitiesDict[amenity] + ".svg"} alt={`${amenity} icon`} />
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
                            <img src="/src/assets/img/close.svg" alt="close-icon" />
                        </button>
                        <h2>What this place offers</h2>
                        <ul className="amenities-list">
                            {amenities.map((amenity, index) => (
                                <li key={index}>
                                    {amenitiesDict[amenity] && (
                                        <img src={amenityIconsLink + "/amen-" + amenitiesDict[amenity] + ".svg"} alt={`${amenity} icon`} />
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