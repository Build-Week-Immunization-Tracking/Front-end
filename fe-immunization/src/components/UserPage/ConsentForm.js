import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";

const ConsentForm = (props) => {
  
  const [newConsent, setNewConsent] = useState({ providerId: ""})

    
  const handleChange = e => {
    setNewConsent({ ...newConsent, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setNewConsent({ providerId: ""});

        axiosWithAuth().post("/patients/2/consent", newConsent)
        .then(res => {
          console.log(res)
          setNewConsent(res.data)
        })
        .catch(err => console.log(err))
      }


//   const patientConsent = patient => {
//     axiosWithAuth().get(`/patients/${patient.id}/consent`)
//     .then(res => {
//       console.log(res.data)
//     })
//     .catch(err => console.log(err))
//   }

//   useEffect(() => {
//       if (patientToEdit) setNewConsent({...patientToEdit})
//   }, [patientToEdit])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Provider Id: 
          <input
            type="text"
            name="providerId"
            value={newConsent.providerId}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit} >Sumbit</button>
      </form>
    </div>
  )
}

export default ConsentForm;