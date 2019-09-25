import React, { useState, useEffect } from 'react';

const UserForm = (props) => {
  const { addPatient, editPatient, patientToEdit } = props;
  const [newPatient, setNewPatient] = useState({ firstName: "", lastName: "", birthDate: "" })

  const handleChange = e => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (patientToEdit) {
        editPatient(newPatient)
    } else {
        addPatient({...newPatient, id: Date.now() })
    }
    setNewPatient({ firstName: "", lastName: "", birthDate: "" });
  }

  useEffect(() => {
      if (patientToEdit) setNewPatient({...patientToEdit})
  }, [patientToEdit])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: 
          <input
            type="text"
            name="firstName"
            value={newPatient.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name: 
          <input
            type="text"
            name="lastName"
            value={newPatient.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          DOB: 
          <input
            type="text"
            name="birthDate"
            value={newPatient.birthDate}
            onChange={handleChange}
          />
        </label>
        <button>{patientToEdit ? "edit patient" : "add patient"}</button>
      </form>
    </div>
  )
}

export default UserForm;