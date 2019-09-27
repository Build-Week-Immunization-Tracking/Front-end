// import React, { useState, useEffect } from 'react';
// import {axiosWithAuth} from "../utils/axiosWithAuth";
// import PatientList from "./PatientsList";

// const ConsentForm = props => {
  
//   const {id} = props;

//   const [newConsent, setNewConsent] = useState({ providerId: ""})
//   const [patients, setPatients] = useState({id})
//     // setPatients(id)
//   console.log(patients)
  
//   const handleChange = e => {
//     setNewConsent({ ...newConsent, [e.target.name]: e.target.value })
//     setPatients({ ...patients, [e.target.name]: e.target.value })

//   }

//   const handleSubmit = e => {
//     // const {patient} = props;
//     e.preventDefault();
//     console.log("this is the id",patients)

//     setNewConsent({ providerId: ""});
//     setPatients({id})
//       // setPatients({patients});
//       //  setPatients(patients)

//         axiosWithAuth().post(`/patients/${patients.id}/consent`, newConsent, patients)
//         .then(res => {
//           console.log("resss dataaaa",res)
//           setNewConsent(res.data)
//           setPatients(res.data)
//         })
//         .catch(err => console.log(err))
//       }
//       // console.log("consent ",patient)

//       // const id = localStorage.getItem("id")

    
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Provider Id: 
//           <input
//             type="text"
//             name="providerId"
//             value={newConsent.providerId}
//             onChange={handleChange}
//           />
//         </label>
        
//         <input
//             type="text"
//             name="patients"
//             value={patients.id}
//             onChange={handleChange}
//           />
//         <button onClick={handleSubmit} >Submit</button>
        
//       </form>
//       <PatientList/>
//     </div>
//   )
// }

// export default ConsentForm;


import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PatientList from "./PatientsList";


const ConsentForm = props => {
  const { patient } = props;
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
            value={newConsent.providerId}
            onChange={handleChange}
          />
        </label>
        <label>
          Patient Id
          <input
            type="text"
            name="patient"
            value={newConsent.patient}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {/* <PatientList/> */}
      
    </div>
  );
};
export default ConsentForm;