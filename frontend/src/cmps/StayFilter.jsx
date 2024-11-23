import React, { useEffect, useState, useRef } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { SET_FILTER_BY } from '../store/reducers/stay.reducer.js'


export function StayFilter({ filterBy, defaultFilter }) {

  const dispatch = useDispatch()
  const dropdownRef = useRef(null)
  const checkOutRef = useRef(null)
  const regionSearchHeader = useRef(null)
  const regionSearchContent = useRef(null)
  const checkInHeader = useRef(null)
  const checkIncontent = useRef(null)
  const divider2 = useRef(null)
  const guestsButtonHeader = useRef(null)
  const guestsButtoncontent = useRef(null)
  const [scrolled, setScrolled] = useState()
  const [resetMenu, setResetMenu] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    dispatch({ type: SET_FILTER_BY, filterBy: { ...defaultFilter } })

    const handleScroll = () => {
      // console.log("resetMenu", resetMenu)
      if (resetMenu) return
      if (window.scrollY != 0 || scrolled) {
        setSmallFilter()
        closeAllDropdowns()
      } else {
        setBigFilter()
      }

      setScrolled(window.scrollY != 0)
      if (window.scrollY == 0) setBigFilter()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [resetMenu])



  function setSmallFilter() {
    // console.log("setSmallFilter")
    document.querySelector('.stay-filter').classList.add('scrolled')
    document.querySelector('.serch-filter-container').classList.add('scrolled')
    document.querySelector('.tag').classList.add('scrolled')
    
    checkOutRef.current.style.display = 'none'
    regionSearchHeader.current.innerText = 'Anywhere'
    regionSearchContent.current.placeholder = ''
    checkInHeader.current.innerText = 'Any week'
    checkIncontent.current.innerText = ''
    divider2.current.style.display = 'none'
    guestsButtonHeader.current.innerText = 'Add guests'
    guestsButtoncontent.current.innerText = ''

  }

  function onSetFilterBy(filterBy) {
    dispatch({ type: SET_FILTER_BY, filterBy })
    setSearchParams({ ...filterBy })
  }

  const [selectedItem, setSelectedItem] = useState(null)
  const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  })

  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false)
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false)
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  function handleChange(ev) {
    const { name, value } = ev.target
    setFilterToEdit({ ...filterToEdit, [name]: value })
  }

  function handleDateSelect(ranges) {
    const startDateTimestamp = ranges.selection.startDate.getTime()
    const endDateTimestamp = ranges.selection.endDate.getTime()

    if (!filterToEdit.startDate && !filterToEdit.endDate) {
      setFilterToEdit({ ...filterToEdit, startDate: startDateTimestamp })
      setSelectedItem('check-out')
    } else if (filterToEdit.startDate && !filterToEdit.endDate) {
      setFilterToEdit({ ...filterToEdit, endDate: endDateTimestamp })
      setSelectedItem('search-container')
      setIsDateRangeVisible(false)
      toggleGuestsDropdown()
    } else {
      setFilterToEdit({
        ...filterToEdit,
        startDate: startDateTimestamp,
        endDate: null,
      })
    }

    setDateRange([ranges.selection])
  }


  function toggleGuestsDropdown() {

    setResetMenu(true)
    setTimeout(() => { setResetMenu(false) }, 1000)
    setBigFilter()
    closeAllDropdowns()
    setIsGuestsDropdownOpen(!isGuestsDropdownOpen)
  }

  function handleGuestsChange(type, value) {
    const newGuests = { ...guests, [type]: Math.max(0, value) }
    setGuests(newGuests)
    setFilterToEdit({ ...filterToEdit, guests: newGuests })
  }

  function handleSearch() {
    onSetFilterBy(filterToEdit)
    closeAllDropdowns()
  }

  function setBigFilter() {
    document.querySelectorAll('.scrolled').forEach((elm) => {
      elm.classList.remove('scrolled')
    })

    checkOutRef.current.style.display = 'flex'
    regionSearchHeader.current.innerText = 'Where'
    regionSearchContent.current.placeholder = 'Search destinations'
    checkInHeader.current.innerText = 'Check in'
    checkIncontent.current.innerText = 'Add dates'
    divider2.current.style.display = 'block'
    guestsButtonHeader.current.innerText = 'Who'
    guestsButtoncontent.current.innerText = 'Add guests'
  }

  function toggleRegionDropdown() {
    setResetMenu(true)
    setTimeout(() => { setResetMenu(false) }, 1000)
    setBigFilter()
    closeAllDropdowns()
    setIsRegionDropdownOpen(!isRegionDropdownOpen)
    setSelectedItem(isRegionDropdownOpen ? '' : 'region-search')
  }

  function handleRegionSelect(region) {
    setFilterToEdit({ ...filterToEdit, country: region.name })
    setIsRegionDropdownOpen(false)
    setSelectedItem('check-in')
    setIsDateRangeVisible(true)
  }

  function toggleDateRange() {
    setResetMenu(true)
    setTimeout(() => { setResetMenu(false) }, 1000)
    setBigFilter()
    setSelectedItem(isRegionDropdownOpen ? 'check-in' : '')
    closeAllDropdowns()
    setIsDateRangeVisible(!isDateRangeVisible)
  }

  function closeAllDropdowns() {
    setIsGuestsDropdownOpen(false)
    setIsRegionDropdownOpen(false)
    setIsDateRangeVisible(false)
    document.querySelectorAll('.selected').forEach(item => item.classList.remove('selected'))
  }

  const regions = [
    {
      name: "I'm flexible",
      map: 'flexible.jpeg',
    },
    {
      name: 'Middle East',
      map: 'middle_east.webp',
    },
    {
      name: 'Italy',
      map: 'Italy.webp',
    },
    {
      name: 'United States',
      map: 'UnitedStates.webp',
    },
    {
      name: 'Greece',
      map: 'Greece.webp',
    },
    {
      name: 'South East Asia',
      map: 'south_east_asia.webp',
    },
  ]

  useEffect(() => {
    // Handler to call when clicking outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns()
      }
    }

    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on cleanup
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])


  return (

    <section ref={dropdownRef} className={scrolled ? 'stay-filter scrolled' : 'stay-filter'}>
      <div onClick={toggleRegionDropdown} className={`search-item region-search ${selectedItem == 'region-search' ? 'selected' : ''}`}>
        <label ref={regionSearchHeader}>Where</label>
        <input ref={regionSearchContent}
          type="text"
          name="txt"
          value={filterToEdit.txt}
          placeholder="Search destinations"
          onChange={handleChange}
          onClick={toggleRegionDropdown}
          required
        />
        {isRegionDropdownOpen && (
          <div className="region-dropdown">
            <h3>Search by region</h3>
            <div className="region-grid">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="region-item"
                  onClick={() => handleRegionSelect(region)}
                >
                  <img src={`/src/assets/img/${region.map}`} alt={region.name} />
                  <span>{region.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="divider divider1"></div>

      <div className="date-picker-container" onClick={toggleDateRange}>
        <div className={`  date-picker-wrapper ${selectedItem == 'check-in' ? 'selected' : 'not-selected'}`}>
          <label ref={checkInHeader} >Check in</label>
          <span ref={checkIncontent} className="date-text">
            {filterToEdit.startDate
              ? new Date(filterToEdit.startDate).toLocaleDateString('en-GB')
              : 'Add dates'}
          </span>
        </div>
        <div ref={divider2} className="divider divider2"></div>
        <div ref={checkOutRef} className={` date-picker-wrapper ${selectedItem == 'check-out' ? 'selected' : 'not-selected'}`}>
          <label>Check out</label>
          <span className="date-text">
            {filterToEdit.endDate
              ? new Date(filterToEdit.endDate).toLocaleDateString('en-GB')
              : 'Add dates'}
          </span>
        </div>
      </div>

      {isDateRangeVisible && (
        <section className="date-filter">

          <DateRangePicker
            ranges={dateRange}
            onChange={handleDateSelect}
            months={2}
            showSelectionPreview={false}
            showPreview={true}
            showMonthAndYearPickers={false}
            showDateDisplay={false}
            direction="horizontal"
            staticRanges={[]}
            inputRanges={[]}
            enableOutsideDays={true}
            minDate={new Date()}
            rangeColors={['#FF0532']}
          />

        </section>
      )}

      <div className="divider divider3"></div>
      <div className={`search-container ${selectedItem == 'search-container' ? 'selected' : 'not-selected'}`}>
        <div className={`guests-selector ${selectedItem == 'search-container' ? 'selected' : 'not-selected'}`}>
          <button className="guests-button" onClick={toggleGuestsDropdown}>
            <label ref={guestsButtonHeader} >Who</label>
            <span ref={guestsButtoncontent}>
              {guests.adults + guests.children + guests.infants + guests.pets >
                0 ? (
                <>
                  {guests.adults + guests.children}
                  {guests.adults + guests.children === 1 ? ' guest' : ' guests'}
                  {guests.infants > 0 &&
                    `, ${guests.infants} infant${guests.infants > 1 ? 's' : ''
                    }`}
                  {guests.pets > 0 &&
                    `, ${guests.pets} pet${guests.pets > 1 ? 's' : ''}`}
                </>
              ) : (
                'Add guests'
              )}
            </span>
          </button>
          <div
            className={`guests-dropdown ${isGuestsDropdownOpen ? 'active' : ''
              }`}
          >
            {[
              { type: 'adults', label: 'Adults', subLabel: 'Ages 13 or above' },
              { type: 'children', label: 'Children', subLabel: 'Ages 2-12' },
              { type: 'infants', label: 'Infants', subLabel: 'Under 2' },
              {
                type: 'pets',
                label: 'Pets',
                subLabel: 'Bringing a service animal?',
              },
            ].map(({ type, label, subLabel }) => (
              <div key={type}>
                <div className="guest-type">
                  <label>{label}</label>
                  <span>{subLabel}</span>
                </div>
                <div className="guest-counter">
                  <button
                    onClick={() => handleGuestsChange(type, guests[type] - 1)}
                    disabled={
                      guests[type] === 0 ||
                      (type === 'adults' && guests[type] === 0)
                    }
                  >
                    -
                  </button>
                  <span>{guests[type]}</span>
                  <button
                    onClick={() => handleGuestsChange(type, guests[type] + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="search-button" onClick={handleSearch}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path>
          </svg>
          <span className='hidden'>Search</span>
        </button>
      </div>
    </section>
  )
}
