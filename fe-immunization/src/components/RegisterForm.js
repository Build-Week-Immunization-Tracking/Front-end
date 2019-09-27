import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function RegisterForm(props) {
    const [userCredentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
        providerName: ""
    });

    const submitHandler = event => {
        event.preventDefault();
        console.log(userCredentials);

        axios.post("https://immunization.herokuapp.com/register", userCredentials,  {headers: {"Content-Type": "application/json" }})
            .then(res => {
                console.log(res);
                props.history.push("/");
            })
            .catch(err => console.log(err.response))
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    // const checkedHandler = event => {
    //     console.log(event.target.checked)
    //     setCredentials({...userCredentials, [event.target.name]: event.target.checked})
    // }

    return (
        <div className="container App">
            <Form onSubmit={submitHandler}>
                <div className="card-header">
                    <h1>Register</h1>
                </div>
                <div>
                    <Form.Input className="" type="text" placeholder="Username" name="username" onChange={changeHandler} value={userCredentials.username} required />
                    <Form.Input  type="password" placeholder="Password" name="password" onChange={changeHandler} value={userCredentials.password} required />
                    <Form.Input  type="email" placeholder="Email" name="email" onChange={changeHandler} value={userCredentials.email} required />
                    <Form.Input  type="text" placeholder="If Provider, Fill in" name="providerName" onChange={changeHandler} value={userCredentials.providerName}  />
                    
                    <Button className="login_btn" content="Register" size="large" />
                </div>
            </Form>
        </div>
    )
}
