import React, { useState, useEffect, useContext } from "react";
import "./OfficePage.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import User from "../UserPage/User";
import styled from 'styled-components';
import { Card, CardTitle, CardText } from 'reactstrap';
import {Link} from "react-router-dom";

import {ImmunizationContext} from "../context/ImmunizationContext";


// const div = styled.div`
// `

// const Card = styled(Card)`
//     opacity: ;
//     `

const Title = styled.h2`
color:lightgreen;
text-shadow: 1px 1px 1px #000000;`

const P = styled.p`
color:lightblue;
text-shadow:1px 1px 2px #000000`


const OfficePage = ({ values, errors, touched, status }) => {
    const [patient, setPatient] = useState([])

    const{immunizationsArray} = useContext(ImmunizationContext);
    console.log("list", immunizationsArray)


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
            <div id= "office-page">
            <h1 className="userH1">Office Page</h1>
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
        <Link className="patient-link" to={`/patient/${patient.id}`}>
            <div className="patient-info">
                        {/* <h1>Patient Info</h1> */}
                        <div className="information">
                            <Card>
                                <Title>Patient Name:{patient.firstName}</Title>
                                    <P>
                                    Date of Birth: {patient.birthDate}
                                    </P>
                                    <P>
                                    Immunization: {patient.immunization}
                                    </P>
                                    <P>
                                    Patient Notes:
                                    </P>
                            </Card>
                        </div>
            {patient.map(patient => {
                    return(
                        <User key={patient.id} patient={patient} />
                    )
                })}
        </div>
    </Link>
        <footer className="immunizations">
            <h1>Vaccines:</h1>
            {immunizationsArray.map(item => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </footer>
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