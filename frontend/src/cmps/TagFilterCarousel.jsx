import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { SET_FILTER_BY } from "../store/reducers/stay.reducer.js"
import { useSearchParams } from 'react-router-dom'
import OMGImg from '/src/assets/img/OMG.jpeg'
import IconsImg from '/src/assets/img/Icons.webp'
import CastlesImg from '/src/assets/img/Castles.jpeg'
import BeachfrontImg from '/src/assets/img/Beachfront.jpeg'
import TrendingImg from '/src/assets/img/Trending.jpeg'
import NationalparksImg from '/src/assets/img/Nationalparks.jpeg'
import AmazingviewsImg from '/src/assets/img/Amazingviews.jpeg'
import AmazingpoolsImg from '/src/assets/img/Amazingpools.jpeg'
import MansionsImg from '/src/assets/img/Mansions.jpeg'
import CabinsImg from '/src/assets/img/Cabins.jpeg'
import CountrysideImg from '/src/assets/img/Countryside.jpeg'
import LakefrontImg from '/src/assets/img/Lakefront.jpeg'
import IslandsImg from '/src/assets/img/Islands.jpeg'
import DesignImg from '/src/assets/img/Design.jpeg'
import OffthegridImg from '/src/assets/img/Off-the-grid.jpeg'
import FarmsImg from '/src/assets/img/Farms.jpeg'
import TreehousesImg from '/src/assets/img/Treehouses.jpeg'
import LuxeImg from '/src/assets/img/Luxe.jpeg'
import TopcitiesImg from '/src/assets/img/Topcities.jpeg'
import TinyhomesImg from '/src/assets/img/Tinyhomes.jpeg'
import TropicalImg from '/src/assets/img/Tropical.jpeg'
import TopoftheworldImg from '/src/assets/img/Topoftheworld.jpeg'
import HistoricalhomesImg from '/src/assets/img/Historicalhomes.jpeg'
import BoatsImg from '/src/assets/img/Boats.jpeg'
import PlayImg from '/src/assets/img/Play.jpeg'
import EarthhomesImg from '/src/assets/img/Earthhomes.jpeg'
import SkiinoutImg from '/src/assets/img/Ski-inout.jpeg'
import HouseboatsImg from '/src/assets/img/Houseboats.jpeg'
import DesertImg from '/src/assets/img/Desert.jpeg'
import AfrmesImg from '/src/assets/img/A-frmes.jpeg'
import ChefskitchensImg from '/src/assets/img/Chefskitchens.jpeg'
import VineyardsImg from '/src/assets/img/Vineyards.jpeg'
import ArcticImg from '/src/assets/img/Arctic.jpeg'
import RoomsImg from '/src/assets/img/Rooms.jpeg'
import CavesImg from '/src/assets/img/Caves.jpeg'
import DomesImg from '/src/assets/img/Domes.jpeg'
import CampingImg from '/src/assets/img/Camping.jpeg'
import NewImg from '/src/assets/img/New.jpeg'
import BadNbreakfastsImg from '/src/assets/img/BadNbreakfasts.jpeg'
import TowersImg from '/src/assets/img/Towers.jpeg'
import SurfingImg from '/src/assets/img/Surfing.jpeg'
import CreativespacesImg from '/src/assets/img/Creativespaces.jpeg'
import ContainersImg from '/src/assets/img/Containers.jpeg'
import SkiingImg from '/src/assets/img/Skiing.jpeg'
import WindmilsImg from '/src/assets/img/Windmils.jpeg'
import DammusiImg from '/src/assets/img/Dammusi.jpeg'
import RiadsImg from '/src/assets/img/Riads.jpeg'
import BarnsImg from '/src/assets/img/Barns.jpeg'
import RyokansImg from '/src/assets/img/Ryokans.jpeg'
import CycladichomesImg from '/src/assets/img/Cycladichomes.jpeg'
import GrandpianosImg from '/src/assets/img/Grandpianos.jpeg'
import YurtsImg from '/src/assets/img/Yurts.jpeg'
import ShepherdshutsImg from '/src/assets/img/Shepherdshuts.jpeg'
import AdaptedImg from '/src/assets/img/Adapted.jpeg'
import HanoksImg from '/src/assets/img/Hanoks.jpeg'
import CampersImg from '/src/assets/img/Campers.jpeg'
import GolfingImg from '/src/assets/img/Golfing.jpeg'
import MinsusImg from '/src/assets/img/Minsus.jpeg'
import CasasParticularesImg from '/src/assets/img/CasasParticulares.jpeg'
import TrulliImg from '/src/assets/img/Trulli.jpeg'
import BeachImg from '/src/assets/img/Beach.jpeg'
import LakeImg from '/src/assets/img/Lake.jpeg'
import right from '/src/assets/img/right.svg' 
import left from '/src/assets/img/left.svg'


export function TagFilter({ filterBy, defaultFilter }) {

    const scrollTags = useRef(null)
    const leftBtn = useRef(null)
    const rightBtn = useRef(null)
    const [selectedItem, setSelectedItem] = useState(null)

    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch({ type: SET_FILTER_BY, filterBy: { ...defaultFilter } })
    }, [])


    function onSetFilterBy(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
        setSearchParams({ ...filterBy })
    }

    function onFilterClicked(value, index) {
        setFilterToEdit({ ...filterToEdit, tag: value })
        onSetFilterBy(filterToEdit)
        setSelectedItem(value)
    }

    const filters = {
            'OMG!': OMGImg,
    'Icons': IconsImg,
    'Castles': CastlesImg,
    'Beachfront': BeachfrontImg,
    'Trending': TrendingImg,
    'National parks': NationalparksImg,
    'Amazing views': AmazingviewsImg,
    'Amazing pools': AmazingpoolsImg,
    'Mansions': MansionsImg,
    'Cabins': CabinsImg,
    'Countryside': CountrysideImg,
    'Lakefront': LakefrontImg,
    'Islands': IslandsImg,
    'Design': DesignImg,
    'Off-the-grid': OffthegridImg,
    'Farms': FarmsImg,
    'Treehouses': TreehousesImg,
    'Luxe': LuxeImg,
    'Top cities': TopcitiesImg,
    'Tiny homes': TinyhomesImg,
    'Tropical': TropicalImg,
    'Top of the world': TopoftheworldImg,
    'Historical homes': HistoricalhomesImg,
    'Boats': BoatsImg,
    'Play': PlayImg,
    'Earth homes': EarthhomesImg,
    'Ski-in/out': SkiinoutImg,
    'Houseboats': HouseboatsImg,
    'Desert': DesertImg,
    'A-frmes': AfrmesImg,
    "Chef's kitchens": ChefskitchensImg,
    "Vineyards": VineyardsImg,
    "Arctic": ArcticImg,
    "Rooms": RoomsImg,
    "Caves": CavesImg,
    "Domes": DomesImg,
    "Camping": CampingImg,
    "New": NewImg,
    "Bad & breakfasts": BadNbreakfastsImg,
    "Towers": TowersImg,
    "Surfing": SurfingImg,
    "Creative spaces": CreativespacesImg,
    "Containers": ContainersImg,
    "Skiing": SkiingImg,
    "Windmils": WindmilsImg,
    "Dammusi": DammusiImg,
    "Riads": RiadsImg,
    "Barns": BarnsImg,
    "Ryokans": RyokansImg,
    "Cycladic homes": CycladichomesImg,
    "Grand pianos": GrandpianosImg,
    "Yurts": YurtsImg,
    "Shepherd's huts": ShepherdshutsImg,
    "Adapted": AdaptedImg,
    "Hanoks": HanoksImg,
    "Campers": CampersImg,
    "Golfing": GolfingImg,
    "Minsus": MinsusImg,
    "Casas particulares": CasasParticularesImg,
    "Trulli": TrulliImg,
    "Beach": BeachImg,
    "Lake": LakeImg,
    }


    let left_pos = 0
    function scroll(direction) {
        switch (direction) {
            case -1:
                left_pos += 2000
                leftBtn.current.style.display = 'block'
                scrollTags.current.scrollBy({
                    left: 2000,
                    behavior: 'smooth',
                })
                break

            case 1:
                left_pos -= 2000
                scrollTags.current.scrollBy({
                    left: -2000,
                    behavior: 'smooth',
                })
                break
        }
        leftBtn.current.style.display = left_pos < 1 ? "none" : "block"

    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 22,
        slidesToScroll: 21,

    }

    return (
        <div className="tag_filter">

            <button style={{ display: 'none' }} ref={leftBtn} className="scroll-btn left" onClick={() => scroll(1)}>
                <img src={left} alt="" />
            </button>
            <div ref={scrollTags} className='tag'>

                {Object.entries(filters).map(([key, img]) =>
                    <div key={key} onClick={() => onFilterClicked(key, img)} className={`tag-card ${selectedItem === key ? 'selected' : ''}`}>
                        <div>
                            {<img className='tag-icon' src={img} alt="" />}
                        </div>
                        <div>
                            <p>
                                {key}
                            </p>
                        </div>
                    </div>
                )}

            </div>
            <button ref={rightBtn} className="scroll-btn right" onClick={() => scroll(-1)}>
                <img src={right} alt="" />
            </button>
        </div>)
}