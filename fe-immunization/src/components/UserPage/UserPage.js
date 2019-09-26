import React, { useState, useEffect } from "react";
import "./UserPage.css";
import {withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const UserForm = ({ values, errors, touched, status }) => {
  const [child, setChild] = useState([]);
  useEffect(() => {
    if (status) {
      setChild([...child, status]);
    }
  }, [status]);
  
   axiosWithAuth().get("/providers")
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err.response))

    const handleChanges = event => {
      setChild({ ...child, [event.target.name]: event.target.value });
      console.log(child);
    };

  return (
    <div>
  <h1>Welcome to Immunization Tracking for Children</h1>
    <div className="user-form"> 
      <Form>
        <h5>First Name</h5>
        <Field type="text" name="child" placeholder="First Name" />
        {touched.child && errors.child && (
          <p className="error">{errors.child}</p>
        )}
        <h5>Last Name</h5>
        <Field type="text" name="child" placeholder="Last Name" />
        {touched.child && errors.child && <p className="error">{errors.child}</p>}


        <h5>Date Of Birth</h5>
        <Field
          type="date"
          name="DOI"
          required
          placeholder="DOI"
          />

        <label>
          <h5>Check below for Processing</h5>
          <Field
            type="checkbox"
            name="immunization"
            checked={values.immunization}
          />
          <Field
            component="textarea"
            type="text"
            name="notes"
            placeholder="Notes"
            
          />
        </label>
        <button>Add Patient!</button>
      </Form>
      {child.map(child => (
        <ul key={child.id}>
          <li>First Name:{child.firstname}</li>
          <li>Last Name: {child.lastname}</li>
          <li>Date Of Birth: {child.dateOfBirth}</li>
        </ul>
      ))}
    </div>
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({ firstname, lastname, dateOfBirth,immunization,notes}) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      dateOfBirth: dateOfBirth || "",
      immunization:immunization || false,
      notes:notes ||""
      
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("You must put a child"),
    lastname: Yup.string().required("You must put a child"),
    dateOfBirth: Yup.string().required()
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axiosWithAuth().post("/patients", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(UserForm);
console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;



