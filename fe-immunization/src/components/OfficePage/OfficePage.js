import React, { useState, useEffect } from "react";
import "./OfficePage.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const OfficePage = ({ values, errors, touched, status }) => {
    const [patients, setPatient] = useState([])
    useEffect(() => {
    if (status) {
        setPatient([...patients, status]);
        }
    }, [status]);

    axios.get("")
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err.response))
    
    return (
        <div className="office-form">
            <Form>
                <Field 
                    type="text"
                    name ="patient"
                    placeholder="Patient Name" />
                    {touched.patient && errors.patient && (
                        <p className="error">{errors.patient}</p>
                    )}
              <label>
                <Field
                    type="checkbox"
                    name="permission"
                    checked={values.permission}
                />
                <Field
                    component="textarea"
                    type="text"
                    name="notes"
                    placeholder="Patient Notes"
                />
              </label>
              <button>Submit</button>
            </Form>
        </div>
    );
};
const FormikOfficePage = withFormik({
    mapPropsToValues({ patient, permission, notes }) {
        return {
            patient: patient || "",
            permission: permission || false,
            notes: notes || ""
        };
    },
    validationSchema: Yup.object().shape({
        patient: Yup.string().required("Patient Name Required")
    })
})

export default OfficePage;