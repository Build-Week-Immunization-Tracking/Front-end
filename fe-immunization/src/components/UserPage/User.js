import React from 'react';

const User = props => {
  const { patient, deletePatient, changePatientToEdit } = props;

  return (
    <div>
      <p>{patient.id}</p>
      <h2>{patient.firstName}</h2>
      <p>{patient.lastName}</p>
      <p>{patient.birthDate}</p>
      <button onClick={() => changePatientToEdit(patient)}>Edit</button>
      <button onClick={() => deletePatient(patient.id)}>Delete</button>
    </div>
  )
}

export default User;