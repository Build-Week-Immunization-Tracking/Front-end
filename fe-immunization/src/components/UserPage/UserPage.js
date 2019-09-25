
import React, { useState, useEffect } from "react";
import "./UserPage.css";
import {withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';


const UserForm = ({ values, errors, touched, status }) => {
  const [child, setChild] = useState([]);
  useEffect(() => {
    if (status) {
      setChild([...child, status]);
    }
  }, [status]);

  return (
    <div>
  <h1>Welcome to Immunization Tracking for Children</h1>
    <div className="user-form"> 
      <Form>
        <h5>First Name</h5>
        <Field type="text" name="child" placeholder="Child Name" />
        {touched.child && errors.child && (
          <p className="error">{errors.child}</p>
        )}
        <h5>Last Name</h5>
        <Field type="text" name="immunization" placeholder="Immunization" />
        {touched.immunization && errors.immunization && <p className="error">{errors.immunization}</p>}

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
  mapPropsToValues({ name, immunization, dateOfBirth,}) {
    return {
      name: name || "",
      immunization: immunization || "",
      dateOfBirth: dateOfBirth || ""
      
    };
  },
  validationSchema: Yup.object().shape({
    species: Yup.string().required("You must put a child"),
    size: Yup.string().required()
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(UserForm);
console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;



