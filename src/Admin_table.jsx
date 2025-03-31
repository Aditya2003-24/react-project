import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  let [apidata, setApidata] = useState([]);
  const [shwfrm, setShw] = useState(false);
  const [stor, setStor] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/car").then((res) => {
      setApidata(res.data);
      console.log(res.data);
    });
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setStor({ ...stor, [name]: value });
  };

  const edit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/car/${stor.id}`, stor).then(() => {
      alert("Data updated successfully");
      setShw(false);
      fetchData(); // Refresh the data
    });
  };

  const del = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios.delete(`http://localhost:3000/car/${id}`).then(() => {
        alert("Data deleted successfully");
        fetchData();
      });
    }
  };

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Car Rental Bookings
        </h1>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">NAME</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Car Model</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apidata.map((e) => (
              <tr
                key={e.id}
                className="border-b hover:bg-gray-100 transition duration-300"
              >
                <td className="py-3 px-4 text-center">{e.id}</td>
                <td className="py-3 px-4 text-center">{e.name}</td>
                <td className="py-3 px-4 text-center">{e.email}</td>
                <td className="py-3 px-4 text-center">{e.phone}</td>
                <td className="py-3 px-4 text-center">{e.carModel}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                    onClick={() => {
                      setShw(true);
                      setStor(e);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    onClick={() => del(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {shwfrm && (
          <form
            onSubmit={edit}
            className="mt-6 p-4 border border-gray-300 rounded shadow-lg max-w-md mx-auto"
          >
            <h2 className="text-xl font-bold mb-4">Edit Car Booking</h2>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={stor.name || ""}
              onChange={handleEdit}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={stor.email || ""}
              onChange={handleEdit}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={stor.phone || ""}
              onChange={handleEdit}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <label>Car Model:</label>
            <input
              type="text"
              name="carModel"
              value={stor.carModel || ""}
              onChange={handleEdit}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Update
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Admin;
