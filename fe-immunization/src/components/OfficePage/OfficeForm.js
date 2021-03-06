import React, { useState, useEffect } from "react";
import "./OfficePage.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import DatePicker from "./DatePicker.js";
// import "./DatePicker.jsx";


const OfficePage = ({ values, errors, touched, status }) => {
    const [patients, setPatient] = useState([])
    useEffect(() => {
    if (status) {
        setPatient([...patients, status]);
        }
    }, [status]);

    axiosWithAuth().get("/patients")
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err.response))
    
    return (
        <>
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
              <button className="log-out">Log Out</button>
            </Form>
            {patients.map(patient => (
                <ul key={patient.id}>
                    <li>Patient:{patient.patientname}</li>
                    <li>Immunization:{patient.immunization}</li>
                    <li>Date:{patient.DOI}</li>
                    <li>Notes:{patient.notes}</li>
                </ul>
            ))}
        </div>
        </>
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