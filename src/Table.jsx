import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Table1 = () => {

    let [apidata,setApidata]=useState([])
    // let [tab,setTab]=useState(false)

    useEffect((e)=>{
        axios.get("http://localhost:3000/car").then((res) => {
          setApidata(res.data);
          console.log(res.data)
        });
    },[])
  return (
    <>
      <div>
        <table border="1px" style={{ width: "100%" }}>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Car Model</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>PickupLocation</th>
          </tr>

          {apidata.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.carModel}</td>
                  <td>{e.pickupDate}</td>
                  <td>{e.returnDate}</td>
                  <td>{e.pickupLocation}</td>
                  {/* <td>
                  <button onClick={() => del(e.id)}>DELETE</button>
                </td> */}
                  {/* <td>
                  <button onClick={() => (setShw(true), setStor(e))}>
                    EDIT
                  </button>
                </td> */}
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Table1
