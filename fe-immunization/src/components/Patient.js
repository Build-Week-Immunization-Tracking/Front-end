import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';
import { axiosWithAuth } from "./utils/axiosWithAuth";


const StyledDiv = styled.div`
`

const StyledCard = styled(Card)``




export default function Patient() {

    const [patient, setPatient]= useState([{}]);

        useEffect(()=> {
            axiosWithAuth().get("/patients")
            .then((response) => {
                console.log(response);
                const patientArray = response.data.results;
                // setPatient(patientArray);
            })
            .catch(error => {
                console.log("No data returned", error)
            });
        },[]);

    return (
        <div className="patient-info">
        <h1>Patient Info</h1>
        {patient.map(patientinfo => {  
            return <StyledDiv>
                <StyledCard>
                    <CardTitle>Patient Name:</CardTitle>{patientinfo.firstName}
                    <CardText>
                        <p>Date of Birth: {patientinfo.birthDate}</p>
                    </CardText>
                    <CardText>
                        <p>Immunization: {patientinfo.immunization}</p>
                    </CardText>
                </StyledCard>
             </StyledDiv>
        })}
        </div>
    )
}
