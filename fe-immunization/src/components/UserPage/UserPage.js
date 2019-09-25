import React, { useState } from "react";
import './UserPage.css';
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserPage = (props) => {

    console.log(props);

    const [child, setChild] = useState({
      child:'',
      dateOfBirth:''
     
    });


    axiosWithAuth().get("/providers")
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err.response))

    const handleChanges = event => {
      setChild({ ...child, [event.target.name]: event.target.value });
      console.log(child);
    };

    const submitForm = event => {
      event.preventDefault();
      props.addNewChild(child);
      setChild({ child: "", dateOfBirth: "" ,});
      console.log(event.target.value);
    };
  
    return (
        <>
            <h1>User Page</h1>
            <div className = 'user-page'>

              

              <form className = 'user-form' onSubmit={submitForm}>

                  <div className='form-input'>

                    <label htmlFor="Child">Child</label>
                    <input
                    placeholder='Name'
                    id="name"

                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={child.name}
                    required
                    />
                  </div>
                  
                  <div className='form-input'>

                    <label htmlFor="Date">Date Of Birth</label>
                    <input
                    id="dateOfBirth"
                    type="date"
                    name=""

                    onChange={handleChanges}
                    value={child.dateOfBirth}
                    required
                    />
                  </div>
                  

                  <button type="submit">Add Child</button>

              </form>
            </div>
        </>
    )
}
  export default UserPage;