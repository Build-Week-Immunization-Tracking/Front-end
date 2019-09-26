import React, { useState, useEffect } from "react";
import "./OfficePage.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import User from "../UserPage/User";
import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';

const StyledDiv = styled.div`
`

const StyledCard = styled(Card)`
    opacity: .7;
    `

const OfficePage = ({ values, errors, touched, status }) => {
    const [patient, setPatient] = useState([])
    useEffect(() => {
    if (status) {
        setPatient([...patient, status]);
        }
    }, [status]);
    axiosWithAuth().get("/patients")
        .then(response => {
            console.log(response);
            // const patientArray = response.data.results;
            // setPatient(patientArray);
        })
        .catch(err => console.log(err.response))
        
        const getPatient =  () => {
             return axiosWithAuth()
             .get('/patients')
              .then(res => {
                setPatient(res.data.patients);
                console.log("im here",res.data.patients)
              })
              .catch(err => console.log(err)
              )};
              useEffect (() => {
                getPatient();
              }, [])
              console.log(" Patient", patient);
        return (
            <div className= "office-page">
            <h1>Office Page</h1>
            <div className="office-form">
                <Form>
                    <Field id ="input"
                        type="text"
                        name="patientname"
                        placeholder="Patient Name" />
                        {touched.patientname && errors.patientname && (
                            <p className="error">{errors.patientname}</p>
                        )}
                    <Field id ="input"
                        type="text"
                        name="immunization"
                        placeholder="Immunization" />
                        {touched.immunization && errors.immunization && (
                            <p className="error">{errors.immunization}</p>
                        )}
                    <Field id ="input"
                        type="date"
                        name="DOI"
                        required
                        placeholder="DOI"
                    />
                  <label>
                    <h6>Check below if patient has given permission to share records</h6>
                    <Field id ="input"
                        type="checkbox"
                        name="permission"
                        checked={values.permission}
                    />
                    <Field id ="input"
                        component="textarea"
                        type="text"
                        name="notes"
                        placeholder="Patient Notes"
                    />
                  </label>
                  <button id="officeButton">Submit</button>
                </Form>
        </div>
        <div className="patient-info">
                     <h1>Patient Info</h1>
                    <StyledDiv>
                        <StyledCard>
                            <CardTitle>Patient Name:{patient.firstName}</CardTitle>
                                <CardText>
                                Date of Birth: {patient.birthDate}
                                </CardText>
                                <CardText>
                                Immunization: {patient.immunization}
                                </CardText>
                                <CardText>
                                Patient Notes:
                                </CardText>
                        </StyledCard>
                    </StyledDiv>
        {patient.map(patient => {
                  return(
                    <User key={patient.id} patient={patient} />
                  )
               })}
    </div>
      </div>  
        );
};
const FormikOfficePage = withFormik({
    mapPropsToValues({ patientname, immunization, permission, notes }) {
        return {
            patientname: patientname || "",
            immunization: immunization || "",
            permission: permission || false,
            notes: notes || ""
        };
    },
    validationSchema: Yup.object().shape({
        patientname: Yup.string().required("Patient Name Required"),
        immunization: Yup.string().required("Immunization Required")
    })
})(OfficePage);
export default FormikOfficePage;