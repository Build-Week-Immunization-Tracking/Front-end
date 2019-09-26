import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import PatientList from "./PatientsList";

const ConsentForm = () => {
  
  const [newConsent, setNewConsent] = useState({ providerId: ""})

  const handleChange = e => {
    setNewConsent({ ...newConsent, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("this is the id",id)
    setNewConsent({ providerId: ""});
        axiosWithAuth().post(`/patients/${id}/consent`, newConsent)
        .then(res => {
          console.log(res)
          setNewConsent(res.data)
        })
        .catch(err => console.log(err))
      }

      const id = localStorage.getItem("id")

    
  return (
    <div>
      <form class="concent-form" onSubmit={handleSubmit}>
        <label>
          Provider Id: 
          <input
            type="text"
            name="providerId"
            value={newConsent.providerId}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit} >Submit</button>
      </form>
      {/* <PatientList/> */}
    </div>
  )
}

export default ConsentForm;