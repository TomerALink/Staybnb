import React, { useEffect, useState, useRef } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import {  SET_FILTER_BY  } from "../store/reducers/stay.reducer.js"

export function StayFilter({ filterBy, defaultFilter }) {

  const dispatch = useDispatch()
  const dropdownRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    dispatch({ type: SET_FILTER_BY, filterBy: { ...defaultFilter } })
  }, [])
  
  function onSetFilterBy(filterBy) {
    dispatch({ type: SET_FILTER_BY, filterBy })
    setSearchParams( {...filterBy} )
  }

  const [selectedItem, setSelectedItem] = useState(null);
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
    closeAllDropdowns();
  }

  function toggleRegionDropdown() {
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
    setSelectedItem(isRegionDropdownOpen ? 'check-in' : '')
    closeAllDropdowns()

    setIsDateRangeVisible(!isDateRangeVisible)

  }

  function closeAllDropdowns() {
    setIsGuestsDropdownOpen(false)
    setIsRegionDropdownOpen(false)
    setIsDateRangeVisible(false)
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
        closeAllDropdowns();
      }
    }

    // Bind the event listener
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (

    <section  ref={dropdownRef} className="stay-filter">
      <div className={`search-item region-search ${selectedItem == 'region-search' ? 'selected' : ''}`}>
        <span>Where</span>
        <input
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
        <div className={`date-picker-wrapper ${selectedItem == 'check-in' ? 'selected' : 'not-selected'}`}>
          <label>Check in</label>
          <span className="date-text">
            {filterToEdit.startDate
              ? new Date(filterToEdit.startDate).toLocaleDateString('en-GB')
              : 'Add dates'}
          </span>
        </div>
        <div className="divider divider2"></div>
        <div className={`date-picker-wrapper ${selectedItem == 'check-out' ? 'selected' : 'not-selected'}`}>
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
            rangeColors={['#c72d65']}
          />
        </section>
      )}

      <div className="divider divider3"></div>
      <div className={`search-container ${selectedItem == 'search-container' ? 'selected' : 'not-selected'}`}>
        <div className={`guests-selector ${selectedItem == 'search-container' ? 'selected' : 'not-selected'}`}>
          <button className="guests-button" onClick={toggleGuestsDropdown}>
            <span>Who</span>
            <span>
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
        </button>
      </div>
    </section>


  )
}
