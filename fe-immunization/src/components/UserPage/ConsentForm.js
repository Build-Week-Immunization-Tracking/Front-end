import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const ConsentForm = props => {
  // const { patient } = props;
  const id = localStorage.getItem("patient.id");
  const [newConsent, setNewConsent] = useState({
    patient: "",
    providerId: ""
  });



  const handleChange = e => {
    setNewConsent({ ...newConsent, [e.target.name]: e.target.value });
  };


  const handleSubmit = e => {
    e.preventDefault();
    console.log("this is the id", id);
    setNewConsent({ providerId: "" });
    axiosWithAuth()
      .post(`/patients/${newConsent.patient}/consent`, newConsent)
      .then(res => {
        console.log(res);
        setNewConsent(res.data);
      })
      .catch(err => console.log(err));
  };


  return (
    <div>
      <h1>{newConsent.patient}</h1>
      <form className="concent-form" onSubmit={handleSubmit}>

        <label>
          Provider Id:
          <input
            type="text"
            name="providerId"
            placeholder="Provider Id"
            value={newConsent.providerId}
            onChange={handleChange}
          />
        </label>
        <label>
          Patient Id:
          <input
            type="text"
            name="patient"
            value={newConsent.patient}
            onChange={handleChange}
            placeholder="Patient Id"
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {/* <PatientList/> */}
      

    </div>
  );
};
export default ConsentForm;