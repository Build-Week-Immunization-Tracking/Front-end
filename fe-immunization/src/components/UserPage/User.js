import React from 'react';
import './UserPage.css'

const User = props => {
  const { patient, deletePatient, changePatientToEdit } = props;

  return (
    <div className="patientResult" >
      <p> First Name: {patient.firstName}</p>
      <p>Last Name:{patient.lastName}</p>
      <p>DOB:{patient.birthDate}</p>
      <button onClick={() => changePatientToEdit(patient)}>Edit</button>
      <button onClick={() => deletePatient(patient.id)}>Delete</button>
    </div>
  )
}

export default User;