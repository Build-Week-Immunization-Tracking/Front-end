import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import UserForm from "./UserForm";
import User from "./User";
import ConsentForm from "./ConsentForm";

const UserPage = () => {
    const [patient, setPatient] = useState([]);
    const [patientToEdit, setPatientToEdit] = useState(null);
    const [consent, setConsent] =useState({id: "", providers: ""});

    useEffect(() => {
        axiosWithAuth().get('/patients')
          .then(res => {
            setPatient(res.data);
            // console.log(res)
          })
          .catch(err => console.log(err))
      }, [])

        
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
        axiosWithAuth().put(`/user/${patient.id}`, patient)
          .then(res => {
            setPatient(res.data)
          })
          .catch(err => console.log(err))
          .finally(setPatientToEdit(null));
      }
    
      const changePatientdToEdit = patient => {
        setPatientToEdit(patient);
      }


    return (
        <div>
            <UserForm addPatient={addPatient} editPatient={editPatient} patientToEdit={patientToEdit} />
            <form id={consent.id} providers={consent.providers} />
            <ConsentForm />
            {/* {patient.map(patient => {
                return (
                        <User key={patient.id} patient={patient} deletePatient={deletePatient} changePatientdToEdit={changePatientdToEdit} />
                )
            })} */}

        </div>
    )
};


export default UserPage;