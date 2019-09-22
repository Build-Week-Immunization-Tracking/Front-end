import React, { useState } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';

export default function RegisterForm(props) {
    const [userCredentials, setCredentials] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    });

    const submitHandler = event => {
        event.preventDefault();

        axios.post("")
            .then(res => {
                console.log(res);
                props.history.push("/");
            })
            .catch(err => console.log(err.response))
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
                <Grid.Column>

                    <Form onSubmit={submitHandler}>
                        <Segment>
                            <h1>Register</h1>
                            <Form.Input fluid type="text" placeholder="First Name" name="firstname" onChange={changeHandler} value={userCredentials.firstname} required />
                            <Form.Input fluid type="text" placeholder="Last Name" name="lastname" onChange={changeHandler} value={userCredentials.lastname} required />
                            <Form.Input fluid type="text" placeholder="Username" name="username" onChange={changeHandler} value={userCredentials.username} required />
                            <Form.Input fluid type="password" placeholder="Password" name="password" onChange={changeHandler} value={userCredentials.password} required />

                            <Form.Button fluid content="Register" size="large" />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
