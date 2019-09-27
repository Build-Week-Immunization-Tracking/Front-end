import React from 'react';
import './UserPage.css'

const User = props => {
  const { patient, deletePatient, changePatientToEdit } = props;

  return (
    <div className="patientResult">
      <p>ID:{patient.id}</p>
      <h2>First Name:{patient.firstName}</h2>
      <p>Last Name:{patient.lastName}</p>
      <p>DOB:{patient.birthDate}</p>
      <button onClick={() => changePatientToEdit(patient)}>Edit</button>
      <button onClick={() => deletePatient(patient.id)}>Delete</button>
    </div>
  )
}

export default User;