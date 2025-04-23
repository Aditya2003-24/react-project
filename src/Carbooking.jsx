import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavScrollExample from "./Navbar"





const CarBooking = () => {
     let [inr, setInr] = useState({});
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  }
  let login=useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Booking Details:", bookingData);
    alert("Car booked successfully!");
    axios.post("http://localhost:3000/car",bookingData)
    .then(res=>alert('Data save successfully'));
    login("/tab")
  }

  return (
    <>
      <NavScrollExample />
      <div className="booking-container">
        <h2>Car Booking Form</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />

          <label>Phone</label>
          <input type="tel" name="phone" onChange={handleChange} required />

          <label>Car Model</label>
          <select name="carModel" onChange={handleChange} required>
            <option value="">Select Car</option>
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="Honda Civic">Honda Civic</option>
            <option value="BMW X5">BMW X5</option>
            <option value="Audi A6">Audi A6</option>
          </select>

          <label>Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            onChange={handleChange}
            required
          />

          <label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            onChange={handleChange}
            required
          />

          <label>Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            onChange={handleChange}
            required
          />

          <button type="submit" className="book-button">
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CarBooking;
