import React from 'react';
import './UserPage.css'

const User = props => {
  const { patient, deletePatient, changePatientToEdit } = props;

  return (
    <div className="patientResult" >
      <h2>{patient.firstName}</h2>
      <p>{patient.lastName}</p>
      <p>{patient.birthDate}</p>
      <button onClick={() => changePatientToEdit(patient)}>Edit</button>
      <button onClick={() => deletePatient(patient.id)}>Delete</button>
    </div>
  )
}

export default User;