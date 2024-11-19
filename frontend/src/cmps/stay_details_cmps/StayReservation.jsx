import { useState, useEffect } from 'react'
import { DateRangePicker } from 'react-date-range'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userService } from '../../services/user.service.js'
import { StayConfirmation } from '../StayConfirmation.jsx'


export function StayReservation({ stay }) {
  const [openModal, setOpenModal] = useState(false)
  const [orderDetails, setOrderDetails] = useState({})
  const navigate = useNavigate()
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false)
  const filterBy = useSelector(storeState => storeState.stayModule.filterBy)
  const { txt, tag, country, startDate, endDate, minPrice, maxPrice, guests } = filterBy
  let isoStartDate = new Date(startDate)
  let isoEndDate = new Date(endDate)
  const defaultNumberOfNights = 5
  const [numberOfNights, setNumberOfNights] = useState(calculateNumberOfNights(isoStartDate, isoEndDate) || defaultNumberOfNights)
  const [selectedgGuests, setSelectedgGuests] = useState(guests ? guests : {
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  })

  const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])


  const [guest, setGuest] = useState(userService.getLoggedinUser())

  function handleDateSelect(ranges) {
    const startDateTimestamp = ranges.selection.startDate.getTime()
    const endDateTimestamp = ranges.selection.endDate.getTime()
    setNumberOfNights(calculateNumberOfNights(new Date(startDateTimestamp), new Date(endDateTimestamp)))
    if (!filterToEdit.startDate && !filterToEdit.endDate) {
      setFilterToEdit({ ...filterToEdit, startDate: startDateTimestamp })

    } else if (filterToEdit.startDate && !filterToEdit.endDate) {
      setFilterToEdit({ ...filterToEdit, endDate: endDateTimestamp })

      setIsDateRangeVisible(false)
    } else {
      setFilterToEdit({
        ...filterToEdit,
        startDate: startDateTimestamp,
        endDate: null,
      })
    }

    setDateRange([ranges.selection])
  }

  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false)

  function toggleGuestsDropdown() {
    setIsGuestsDropdownOpen(!isGuestsDropdownOpen)
  }

  function handleGuestsChange(type, value) {
    const newGuests = { ...guests, [type]: Math.max(0, value) }
    setSelectedgGuests(newGuests)
  }

  function calculateNumberOfNights(startDate, endDate) {
    if (!startDate || !endDate) return 0
    const timeDiff = endDate.getTime() - startDate.getTime()
    return Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  const subtotal = stay ? stay.price * numberOfNights : 0
  const taxes = subtotal * 0.17
  const totalPrice = subtotal + taxes
  const averageRating = stay.reviews && stay.reviews.length > 0
    ? (stay.reviews.reduce((sum, review) => sum + review.rate, 0) / stay.reviews.length).toFixed(1)
    : 'New'
  const reviewCount = stay.reviews ? stay.reviews.length : 0

  function handleReserve() {


    setOrderDetails({
      hostId: {
        _id: stay.host._id,
        fullname: stay.host.fullname,
        imgUrl: stay.host.imgUrl,
      },
      guest: guest || {
        _id: 'guest1',
        fullname: 'Guest User',
      },
      img: stay.imgUrls[0],
      totalPrice,
      taxes,
      startDate: (typeof filterToEdit.startDate === 'number') ?
        new Date(filterToEdit.startDate).toISOString().split('T')[0] :
        new Date(Date.now()).toISOString().split('T')[0],
      endDate: (typeof filterToEdit.endDate === 'number') ?
        new Date(filterToEdit.endDate).toISOString().split('T')[0] :
        new Date(Date.now()).toISOString().split('T')[0],
      guests: {
        adults: guests.adults,
        children: guests.children,
        infants: guests.infants,
        pets: guests.pets,
      },
      stay: {
        _id: stay._id,
        name: stay.name,
        price: stay.price,
        imgUrls: stay.imgUrls,
        loc: stay.loc,
      },
      numberOfNights,
      msgs: [],
      status: 'pending',
      averageRating,
      reviewCount,
      pricePerNight: stay.price,
    })

    setOpenModal(true)
  }

  return (
    <div className="reservation">
      <div className="reservation-price">
        <h3>${stay.price.toLocaleString()}&nbsp;</h3>
        <span>night</span>
      </div>
      <div className="reservation-selectors">
        <div className="date-picker-container" >
          <div className="check-in" onClick={() => setIsDateRangeVisible(true)}>
            <label>CHECK-IN</label>
            <span className="date-text">
              {filterToEdit.startDate
                ? new Date(filterToEdit.startDate).toLocaleDateString('en-GB')
                : 'Add dates'}
            </span>
          </div>
          <div className="check-out">
            <label>CHECKOUT</label>
            {filterToEdit.endDate
              ? new Date(filterToEdit.endDate).toLocaleDateString('en-GB')
              : 'Add dates'}
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
        </div>
        <div className="guests-selector">
          <button className="guests-button" onClick={toggleGuestsDropdown}>
            <div className="guests-content">
              <label>GUESTS</label>
              <span>
                {selectedgGuests.adults + selectedgGuests.children} guests
                {selectedgGuests.infants > 0 && `, ${selectedgGuests.infants} infant${selectedgGuests.infants > 1 ? 's' : ''}`}
                {selectedgGuests.pets > 0 && `, ${selectedgGuests.pets} pet${selectedgGuests.pets > 1 ? 's' : ''}`}
              </span>
            </div>
            <img className={`arrowDropDown ${isGuestsDropdownOpen ? 'open' : ''}`} src="/src/assets/img/right.svg" alt="" />
          </button>
          <div className={`guests-dropdown ${isGuestsDropdownOpen ? 'active' : ''}`}>
            {[
              { type: 'adults', label: 'Adults', subLabel: 'Ages 13 or above' },
              { type: 'children', label: 'Children', subLabel: 'Ages 2-12' },
              { type: 'infants', label: 'Infants', subLabel: 'Under 2' },
              { type: 'pets', label: 'Pets', subLabel: 'Bringing a service animal?' },
            ].map(({ type, label, subLabel }) => (
              <div key={type}>
                <div className="guest-type">
                  <label>{label}</label>
                  <span>{subLabel}</span>
                </div>
                <div className="guest-counter">
                  <button
                    onClick={() => handleGuestsChange(type, selectedgGuests[type] - 1)}
                    disabled={selectedgGuests[type] === 0 || (type === 'adults' && selectedgGuests[type] === 1)}
                  >
                    -
                  </button>
                  <span>{selectedgGuests[type]}</span>
                  <button onClick={() => handleGuestsChange(type, selectedgGuests[type] + 1)}>
                    +
                  </button>
                </div>
              </div>
            ))}
            <span onClick={() => toggleGuestsDropdown()} className='close-btn'>Close</span>
          </div>
        </div>
      </div>

      <button className="reserve-btn" onClick={handleReserve}>Reserve</button>
      <p className="charged-p">You won't be charged yet</p>

      <div className="price-details">
        <div className="price-item">
          <span className="calc-span">
            ${Number(stay.price).toFixed(2)} x {numberOfNights} nights
          </span>
          <span>
            ${(stay.price * numberOfNights).toFixed(2)}
          </span>
        </div>

        <div className="price-item">
          <span className="taxes-span">Taxes</span>
          <span>${taxes.toFixed(2).toLocaleString()}</span>
        </div>
        <div className="price-total">
          <span>Total</span>
          <span>${totalPrice.toFixed(2).toLocaleString()}</span>
        </div>
      </div>
      {openModal &&
        <StayConfirmation orderDetails={orderDetails} openModal={openModal} setOpenModal={setOpenModal} />
      }
    </div>
  )
}


