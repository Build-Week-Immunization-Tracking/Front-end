import React from 'react';
import './UserPage.css'
import {Button, Card} from "semantic-ui-react";
import styled from "styled-components";


const Title = styled.h2`
color:lightgreen;
text-shadow: 1px 1px 1px #000000;`

const P = styled.p`
color:lightblue;
text-shadow:1px 1px 2px #000000`




const User = props => {
  const { patient, deletePatient, changePatientToEdit } = props;

  return (
    <Card.Group >
      <Card>
        <Card.Content>
          <Title>Patient Card ID</Title>
          <P>ID:{patient.id}</P>
          <P>First Name:{patient.firstName}</P>
          <P>Last Name:{patient.lastName}</P>
          <P>DOB:{patient.birthDate}</P>
          </Card.Content>
        <Card.Content extra>
          <div>
            <Button className="btn float-right userDelete_btn" onClick={() => deletePatient(patient.id)}>Delete</Button>
            <Button className="btn float-right userEdit_btn" onClick={() => changePatientToEdit(patient)}>Edit</Button>
            
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default User;