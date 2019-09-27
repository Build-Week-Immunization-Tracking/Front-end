import React from 'react';
import './UserPage.css'
import {Button, Card} from "semantic-ui-react";

const User = props => {
  const { patient, deletePatient, changePatientToEdit } = props;

  return (
    <Card.Group >
      <Card>
        <Card.Content>
          <p>ID:{patient.id}</p>
          <p>First Name:{patient.firstName}</p>
          <p>Last Name:{patient.lastName}</p>
          <p>DOB:{patient.birthDate}</p>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button basic color="green" onClick={() => changePatientToEdit(patient)}>Edit</Button>
            <Button basic color="red" onClick={() => deletePatient(patient.id)}>Delete</Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default User;