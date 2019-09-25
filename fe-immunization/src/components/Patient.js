import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';


const StyledDiv = styled.div`
`

const StyledCard = styled(Card)``




const Patient = () => {

    const [patient, setPatient]= useState([{}]);

        useEffect(()=> {
            axios
            .get("https://immunization.herokuapp.com/patients")
            .then((response) => {
                console.log(response);
                const patientArray = response.data.results;
                setPatient(patientArray);
            })
            .catch(error => {
                console.log("No data returned", error)
            });
        },[]);

    return (
        <div className="patient-info">
        <h1>Patient Info</h1>
        {patient.map(char => {  //change "char" when data received
            return <StyledDiv>
                <StyledCard>





                </StyledCard>
            </StyledDiv>
        })}
        </div>
    )
}

export default Patient;