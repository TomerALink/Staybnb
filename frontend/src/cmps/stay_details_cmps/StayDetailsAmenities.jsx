import { useState } from 'react'
import close from "/src/assets/img/close.svg"
import tv from "/src/assets/amenities/amen-tv.svg"
import wifi from "/src/assets/amenities/amen-wifi.svg"
import ethernet from  "/src/assets/amenities/amen-ethernet.svg"
import essentials from "/src/assets/amenities/amen-essentials.svg"
import first_aid from "/src/assets/amenities/amen-first-aid.svg"
import elevator from  "/src/assets/amenities/amen-elevator.svg"
import air_conditioning from  "/src/assets/amenities/amen-air-conditioning.svg"
import heating from  "/src/assets/amenities/amen-heating.svg"
import fire_extinguisher from  "/src/assets/amenities/amen-fire-extinguisher.svg"
import detector from   "/src/assets/amenities/amen-detector.svg"
import hot_water from  "/src/assets/amenities/amen-hot-water.svg"
import shampoo from   "/src/assets/amenities/amen-shampoo.svg"
import hair_dryer from "/src/assets/amenities/amen-hair-dryer.svg"
import washer from  "/src/assets/amenities/amen-washer.svg"
import dryer from  "/src/assets/amenities/amen-dryer.svg"
import iron from  "/src/assets/amenities/amen-iron.svg"
import extra_pillow from  "/src/assets/amenities/amen-extra-pillow.svg"
import bed_linens from  "/src/assets/amenities/amen-bed-linens.svg"
import hangers from "/src/assets/amenities/amen-hangers.svg"
import room_darkening from "/src/assets/amenities/amen-room-darkening.svg"
import kitchen from "/src/assets/amenities/amen-kitchen.svg"
import pool from  "/src/assets/amenities/amen-pool.svg"
import hot_tub from  "/src/assets/amenities/amen-hot-tub.svg"
import gym from  "/src/assets/amenities/amen-gym.svg"
import waterfront from  "/src/assets/amenities/amen-waterfront.svg"
import beach_front from   "/src/assets/amenities/amen-beachfront.svg"
import kid_friendly from   "/src/assets/amenities/amen-kid-friendly.svg"
import workspace from   "/src/assets/amenities/amen-workspace.svg"
import events from   "/src/assets/amenities/amen-events.svg"
import pets from  "/src/assets/amenities/amen-pets.svg"
import smoking from   "/src/assets/amenities/amen-smoking.svg"
import parking from   "/src/assets/amenities/amen-parking.svg"
import disabled from   "/src/assets/amenities/amen-disabled.svg"
import wide_entrance from   "/src/assets/amenities/amen-wide-enrtance.svg"
import bed from "/src/assets/amenities/amen-bed.svg"
import security from "/src/assets/amenities/amen-security.svg"
import check_in from "/src/assets/amenities/amen-check-in.svg"
import safety_card from  "/src/assets/amenities/amen-safety-card.svg"
import long_term from  "/src/assets/amenities/amen-long-term.svg"
import luggage from  "/src/assets/amenities/amen-luggage.svg"
import building_stuff from  "/src/assets/amenities/amen-building-stuff.svg"

export function StayDetailsAmenities({ amenities }) {

    //"/src/assets/amenities/amen-....svg"
    
    const amenitiesDict = {
        "TV": tv,
        "Cable TV": tv,
        "Internet": wifi,
        "Wifi": wifi,
        "Ethernet connection": ethernet,
        "Essentials": essentials,
        "First aid kit": first_aid,
        "Elevator": elevator,
        "Air conditioning": air_conditioning,
        "Heating": heating,
        "Fire extinguisher": fire_extinguisher,
        "Smoke detector": detector,
        "Carbon monoxide detector": detector,
        "Hot water": hot_water,
        "Shampoo": shampoo,
        "Hair dryer": hair_dryer,
        "Washer": washer,
        "Dryer": dryer,
        "Iron": iron,
        "Extra pillows and blankets": extra_pillow,
        "Bed linens": bed_linens,
        "Hangers": hangers,
        "Room-darkening shades": room_darkening,
        "Kitchen": kitchen,
        "Cooking basics": kitchen,
        "Pool": pool,
        "Hot tub": hot_tub,
        "Gym": gym,
        "Waterfront": waterfront,
        "Beachfront": beach_front,
        "Family/kid friendly": kid_friendly,
        "Laptop friendly workspace": workspace,
        "Suitable for events": events,
        "Pets allowed": pets,
        "Smoking allowed": smoking,
        "Disabled parking spot": parking,
        "Step-free access": disabled,
        "Flat path to front door": disabled,
        "Wheelchair accessible": disabled,
        "Wide doorway": wide_entrance,
        "Wide entryway": wide_entrance,
        "Wide hallway clearance": wide_entrance,
        "Wide clearance to bed": bed,
        "Well-lit path to entrance": security,
        "Private entrance": wide_entrance,
        "Ground floor access": wide_entrance,
        "24-hour check-in": check_in,
        "Self check-in": check_in,
        "Safety card": safety_card,
        "Free parking on premises": parking,
        "Long term stays allowed": long_term,
        "Luggage dropoff allowed": luggage,
        "Building staff": building_stuff,
        "Doorman": building_stuff
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