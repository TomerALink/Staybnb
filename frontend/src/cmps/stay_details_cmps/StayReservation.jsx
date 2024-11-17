import { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
// import { getRandomDateWithinRange } from '../../services/util.service';

export function StayReservation({ stay, initialStartDate, initialEndDate }) {
  const navigate = useNavigate();

  const setYearTo2024 = (date) => {
    if (date) {
      date.setFullYear(2024);
    }
    return date;
  };

  // const [startDate, setStartDate] = useState(setYearTo2024(initialStartDate) || getRandomDateWithinRange(new Date(), new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)));
  // const [endDate, setEndDate] = useState(setYearTo2024(initialEndDate) || new Date(startDate));

  const [guests, setGuests] = useState({
    adults: 3,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);

  // useEffect(() => {
  //   if (initialStartDate && initialEndDate) {
  //     setStartDate(setYearTo2024(initialStartDate));
  //     setEndDate(setYearTo2024(initialEndDate));
  //   } else {
  //     const randomStartDate = getRandomDateWithinRange(new Date(), new Date(Date.now() + 30 * 24 * 60 * 60 * 1000));
  //     const randomEndDate = new Date(randomStartDate);
  //     randomEndDate.setDate(randomStartDate.getDate() + Math.floor(Math.random() * 5) + 1);
  //     setStartDate(setYearTo2024(randomStartDate));
  //     setEndDate(setYearTo2024(randomEndDate));
  //   }
  // }, [initialStartDate, initialEndDate]);

  // function handleStartDateChange(date) {
  //   setStartDate(setYearTo2024(date));
  // }

  // function handleEndDateChange(date) {
  //   setEndDate(setYearTo2024(date));
  // }

  function toggleGuestsDropdown() {
    setIsGuestsDropdownOpen(!isGuestsDropdownOpen);
  }

  function handleGuestsChange(type, value) {
    const newGuests = { ...guests, [type]: Math.max(0, value) };
    setGuests(newGuests);
  }

  // function calculateNumberOfNights() {
  //   if (!startDate || !endDate) return 0;
  //   const timeDiff = endDate.getTime() - startDate.getTime();
  //   return Math.ceil(timeDiff / (1000 * 3600 * 24));
  // }

  const numberOfNights = 5//calculateNumberOfNights(startDate, endDate);
  const subtotal = stay ? stay.price * numberOfNights : 0;
  const taxes = subtotal * 0.17; // 17% of the subtotal
  const totalPrice = subtotal + taxes;
  const averageRating = stay.reviews && stay.reviews.length > 0
    ? (stay.reviews.reduce((sum, review) => sum + review.rate, 0) / stay.reviews.length).toFixed(1)
    : 'New';
  const reviewCount = stay.reviews ? stay.reviews.length : 0;

  function handleReserve() {
    const orderDetails = {
      hostId: {
        _id: stay.host._id,
        fullname: stay.host.fullname,
        imgUrl: stay.host.imgUrl,
      },
      guest: {
        _id: 'guest1',
        fullname: 'Guest User',
      },
      totalPrice,
      taxes,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
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
    };

    navigate('/confirm-reservation', { state: { orderDetails } });
  }

  return (
    <div className="reservation">
      <div className="reservation-price">
        <h3>${stay.price.toLocaleString()}&nbsp;</h3>
        <span>night</span>
      </div>
      <div className="reservation-selectors">
        <div className="date-picker-container">
          <div className="check-in">
            <label>CHECK-IN</label>
            {/* <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              monthsShown={2}
              dateFormat="dd/MM/yyyy"
              placeholderText="CHECK-IN"
              onFocus={(e) => e.target.parentNode.parentNode.classList.add('focused')}
              onBlur={(e) => e.target.parentNode.parentNode.classList.remove('focused')}
            /> */}
          </div>
          <div className="check-out">
            <label>CHECKOUT</label>
            {/* <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              monthsShown={2}
              dateFormat="dd/MM/yyyy"
              placeholderText="CHECKOUT"
              onFocus={(e) => e.target.parentNode.parentNode.classList.add('focused')}
              onBlur={(e) => e.target.parentNode.parentNode.classList.remove('focused')}
            /> */}
          </div>
        </div>
        <div className="guests-selector">
          <button className="guests-button" onClick={toggleGuestsDropdown}>
            <div className="guests-content">
              <label>GUESTS</label>
              <span>
                {guests.adults + guests.children} guests
                {guests.infants > 0 && `, ${guests.infants} infant${guests.infants > 1 ? 's' : ''}`}
                {guests.pets > 0 && `, ${guests.pets} pet${guests.pets > 1 ? 's' : ''}`}
              </span>
            </div>
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
                    onClick={() => handleGuestsChange(type, guests[type] - 1)}
                    disabled={guests[type] === 0 || (type === 'adults' && guests[type] === 1)}
                  >
                    -
                  </button>
                  <span>{guests[type]}</span>
                  <button onClick={() => handleGuestsChange(type, guests[type] + 1)}>
                    +
                  </button>
                </div>
              </div>
            ))}
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
    </div>
  );
}


