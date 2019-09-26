import React, {useState, useEffect, useContext} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import UserForm from "./UserForm";
import User from "./User"
import ConsentForm from "./ConsentForm";


import {ImmunizationContext} from "../context/ImmunizationContext";
// import {PatientContext} from "../context/PatientContext";




const UserPage = () => {
    const [patient, setPatient] = useState([]);
    const [patientToEdit, setPatientToEdit] = useState(null);
    // const{patient} = useContext(PatientContext)

    const [consent, setConsent] =useState({id: "", providers: ""});
    const{immunizationsArray} = useContext(ImmunizationContext);
    console.log("list", immunizationsArray)
  


    // const [patient, setPatient] = useState([]);
  
    const getPatient =  () => {
      return axiosWithAuth()
      .get('/patients')
       .then(res => {
         setPatient(res.data.patients);
         console.log("im here",res.data.patients)
       })
       .catch(err => console.log(err)
       )};
       useEffect (() => {
         getPatient();
       }, [])
       console.log(" Patient", patient);

    

        
      const addPatient = newPatient => {
        axiosWithAuth().post('/patients', newPatient)
          .then(res => {
            console.log(res.data)
            setPatient(res.data)
          })
          .catch(err => console.log(err))
      }
    
      const deletePatient = id => {
        axiosWithAuth().delete(`/user/${id}`)
          .then(res => {
            setPatient(res.data)
          })
          .catch(err => console.log(err))
      }
    
      const editPatient = patient => {
        axiosWithAuth().put(`/patients/${patient.id}`, patient)
          .then(res => {
            setPatient(res.data.patients)
          })
          .catch(err => console.log(err))
          .finally(setPatientToEdit(null));
      }
    
      const changePatientdToEdit = patient => {
        setPatientToEdit(patient);
      }

      // console.log("patient here",patient)
    return (
        <div>
            <UserForm addPatient={addPatient} editPatient={editPatient} patientToEdit={patientToEdit} />
            <form id={consent.id} providers={consent.providers} />
            <ConsentForm id={consent.id}/>
            {immunizationsArray.map(item => {
              return(
                <p key={item.id}>{item.name}</p>
              )
            })};
            {console.log("return", patient)}
            {patient.map(patient => {
               return(
              <User key={patient.id} patient={patient} deletePatient={deletePatient} changePatientdToEdit={changePatientdToEdit}/>
               )
            })}
        </div>
    )
};


export default UserPage;