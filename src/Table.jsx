import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css"; // Add Tailwind CSS

const Table1 = () => {
  const [apidata, setApidata] = useState(null);
  const [shwfrm, setShw] = useState(false);
  const [stor, setStor] = useState({});

  function handleedit(e) {
    const { name, value } = e.target;
    setStor({ ...stor, [name]: value });
  }

  function edit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/car/${stor.id}`, stor).then((r) => {
      alert("Data updated successfully");
      setShw(false);
      window.location.reload();
    });
  }

  function del(id) {
    axios.delete(`http://localhost:3000/car/${id}`).then((r) => {
      alert("Data deleted successfully");
      window.location.reload();
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/car")
      .then((res) => {
        const allData = res.data;
        const lastData = allData[allData.length - 1];
        setApidata(lastData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      {apidata ? (
        <table className="w-full text-sm text-left text-gray-500 shadow-lg rounded-lg" style={{width:"100%"}}>
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              {[
                "ID",
                "Name",
                "Email",
                "Phone",
                "Car Model",
                "Pickup Date",
                "Return Date",
                "Pickup Location",
                "Edit",
                "Delete",
              ].map((heading, index) => (
                <th key={index} className="px-6 py-3">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-100">
              <td className="px-6 py-4">{apidata.id}</td>
              <td className="px-6 py-4">{apidata.name}</td>
              <td className="px-6 py-4">{apidata.email}</td>
              <td className="px-6 py-4">{apidata.phone}</td>
              <td className="px-6 py-4">{apidata.carModel}</td>
              <td className="px-6 py-4">{apidata.pickupDate}</td>
              <td className="px-6 py-4">{apidata.returnDate}</td>
              <td className="px-6 py-4">{apidata.pickupLocation}</td>
              <td className="px-6 py-4">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={() => (setShw(true), setStor(apidata))}
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => del(apidata.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-700">Loading data...</p>
      )}

      {shwfrm && (
        <form
          onSubmit={edit}
          className="mt-8 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto"
        >
          {[
            { label: "Name", name: "name" },
            { label: "Email", name: "email" },
            { label: "Phone", name: "phone" },
            { label: "Car Model", name: "carModel" },
            { label: "Pickup Date", name: "pickupDate" },
            { label: "Return Date", name: "returnDate" },
            { label: "Pickup Location", name: "pickupLocation" },
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={stor[field.name] || ""}
                onChange={handleedit}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                style={{    marginLeft: "209px",
    paddingRight: "20px",
    paddingLeft: "20px"}}
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default Table1;
