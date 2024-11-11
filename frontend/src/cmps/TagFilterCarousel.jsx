import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { SET_FILTER_BY } from "../store/reducers/stay.reducer.js"
import { useSearchParams } from 'react-router-dom'


export function TagFilter({ filterBy, defaultFilter }) {

    const scrollTags = useRef(null);
    const leftBtn = useRef(null);
    const rightBtn = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch({ type: SET_FILTER_BY, filterBy: { ...defaultFilter } });
    }, [])


    function onSetFilterBy(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
        setSearchParams({ ...filterBy })
    }

    function onFilterClicked(value, index) {
        setFilterToEdit({ ...filterToEdit, tag: value })
        onSetFilterBy(filterToEdit)
        setSelectedItem(index);
    }


    const filters = [
        {
            name: 'OMG!',
            img: '/src/assets/img/OMG.jpeg'
        },
        {
            name: 'Icons',
            img: '/src/assets/img/Icons.webp'
        },
        {
            name: 'Castles',
            img: '/src/assets/img/Castles.jpeg'
        },
        {
            name: 'Beachfront',
            img: '/src/assets/img/Beachfront.jpeg'
        },
        {
            name: 'Trending',
            img: '/src/assets/img/Trending.jpeg'
        },
        {
            name: 'National parks',
            img: '/src/assets/img/Nationalparks.jpeg'
        },
        {
            name: 'Amazing views',
            img: '/src/assets/img/Amazingviews.jpeg'
        },
        {
            name: 'Amazing pools',
            img: '/src/assets/img/Amazingpools.jpeg'
        },
        {
            name: 'Mansions',
            img: '/src/assets/img/Mansions.jpeg'
        },
        {
            name: 'Cabins',
            img: '/src/assets/img/Cabins.jpeg'
        },
        {
            name: 'Countryside',
            img: '/src/assets/img/Countryside.jpeg'
        },
        {
            name: 'Lakefront',
            img: '/src/assets/img/Lakefront.jpeg'
        },
        {
            name: 'Islands',
            img: '/src/assets/img/Islands.jpeg'
        },
        {
            name: 'Design',
            img: '/src/assets/img/Design.jpeg'
        },
        {
            name: 'Off-the-grid',
            img: '/src/assets/img/Off-the-grid.jpeg'
        },
        {
            name: 'Farms',
            img: '/src/assets/img/Farms.jpeg'
        },
        {
            name: 'Treehouses',
            img: '/src/assets/img/Treehouses.jpeg'
        },
        {
            name: 'Luxe',
            img: '/src/assets/img/Luxe.jpeg'
        },
        {
            name: 'Top cities',
            img: '/src/assets/img/Topcities.jpeg'
        },
        {
            name: 'Tiny homes',
            img: '/src/assets/img/Tinyhomes.jpeg'
        },
        {
            name: 'Tropical',
            img: '/src/assets/img/Tropical.jpeg'
        },
        {
            name: 'Top of the world',
            img: '/src/assets/img/Topoftheworld.jpeg'
        },
        {
            name: 'Historical homes',
            img: '/src/assets/img/Historicalhomes.jpeg'
        },
        {
            name: 'Boats',
            img: '/src/assets/img/Boats.jpeg'
        },
        {
            name: 'Play',
            img: '/src/assets/img/Play.jpeg'
        },
        {
            name: 'Earth homes',
            img: '/src/assets/img/Earthhomes.jpeg'
        },
        {
            name: 'Ski-in/out',
            img: '/src/assets/img/Ski-inout.jpeg'
        },
        {
            name: 'Houseboats',
            img: '/src/assets/img/Houseboats.jpeg'
        },
        {
            name: 'Desert',
            img: '/src/assets/img/Desert.jpeg'
        },
        {
            name: 'A-frmes',
            img: '/src/assets/img/A-frmes.jpeg'
        },
        {
            name: "Chef's kitchens",
            img: '/src/assets/img/Chefskitchens.jpeg'
        },
        {
            name: "Vineyards",
            img: '/src/assets/img/Vineyards.jpeg'
        },
        {
            name: "Arctic",
            img: '/src/assets/img/Arctic.jpeg'
        },
        {
            name: "Rooms",
            img: '/src/assets/img/Rooms.jpeg'
        },
        {
            name: "Caves",
            img: '/src/assets/img/Caves.jpeg'
        },
        {
            name: "Domes",
            img: '/src/assets/img/Domes.jpeg'
        },
        {
            name: "Camping",
            img: '/src/assets/img/Camping.jpeg'
        },
        {
            name: "New",
            img: '/src/assets/img/New.jpeg'
        },
        {
            name: "Bad & breakfasts",
            img: '/src/assets/img/BadNbreakfasts.jpeg'
        },
        {
            name: "Towers",
            img: '/src/assets/img/Towers.jpeg'
        },
        {
            name: "Surfing",
            img: '/src/assets/img/Surfing.jpeg'
        },
        {
            name: "Creative spaces",
            img: '/src/assets/img/Creativespaces.jpeg'
        },
        {
            name: "Containers",
            img: '/src/assets/img/Containers.jpeg'
        },
        {
            name: "Skiing",
            img: '/src/assets/img/Skiing.jpeg'
        },
        {
            name: "Windmils",
            img: '/src/assets/img/Windmils.jpeg'
        },
        {
            name: "Dammusi",
            img: '/src/assets/img/Dammusi.jpeg'
        },
        {
            name: "Riads",
            img: '/src/assets/img/Riads.jpeg'
        },
        {
            name: "Barns",
            img: '/src/assets/img/Barns.jpeg'
        },
        {
            name: "Ryokans",
            img: '/src/assets/img/Ryokans.jpeg'
        },
        {
            name: "Cycladic homes",
            img: '/src/assets/img/Cycladichomes.jpeg'
        },
        {
            name: "Grand pianos",
            img: '/src/assets/img/Grandpianos.jpeg'
        },
        {
            name: "Yurts",
            img: '/src/assets/img/Yurts.jpeg'
        },
        {
            name: "Shepherd's huts",
            img: '/src/assets/img/Shepherdshuts.jpeg'
        },
        {
            name: "Adapted",
            img: '/src/assets/img/Adapted.jpeg'
        },
        {
            name: "Hanoks",
            img: '/src/assets/img/Hanoks.jpeg'
        },
        {
            name: "Campers",
            img: '/src/assets/img/Campers.jpeg'
        },
        {
            name: "Golfing",
            img: '/src/assets/img/Golfing.jpeg'
        },
        {
            name: "Minsus",
            img: '/src/assets/img/Minsus.jpeg'
        },
        {
            name: "Casas particulares",
            img: '/src/assets/img/CasasParticulares.jpeg'
        },
        {
            name: "Trulli",
            img: '/src/assets/img/Trulli.jpeg'
        },
        {
            name: "Beach",
            img: '/src/assets/img/Beach.jpeg'
        },
        {
            name: "Lake",
            img: '/src/assets/img/Lake.jpeg'
        },
    ]

    let left_pos = 0;
    function scroll(direction) {
        switch (direction) {
            case -1:
                left_pos += 2000
                leftBtn.current.style.display = 'block'
                scrollTags.current.scrollBy({
                    left: 2000,
                    behavior: 'smooth',
                });
                break;

            case 1:
                left_pos -= 2000
                scrollTags.current.scrollBy({
                    left: -2000,
                    behavior: 'smooth',
                });
                break;
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
                <img src="/src/assets/img/left.svg" alt="" />
            </button>
            <div ref={scrollTags} className='tag'>
                {filters.map((tag, index) =>
                    <div key={tag.name} onClick={() => onFilterClicked(tag.name, index)} className={`tag-card ${selectedItem === index ? 'selected' : ''}`}>
                        <div>
                            {<img className='tag-icon' src={tag.img} alt="" />}
                        </div>
                        <div>
                            <p>
                                {tag.name}
                            </p>
                        </div>
                    </div>
                )}

            </div>
            <button ref={rightBtn} className="scroll-btn right" onClick={() => scroll(-1)}>
                <img src="/src/assets/img/right.svg" alt="" />
            </button>
        </div>)
}