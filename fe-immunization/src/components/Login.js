import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Grid, Segment, Message } from 'semantic-ui-react';
import axios from 'axios'


const Login = (props) => {
    // loginData will store the email and Password input by user and is sent to the backend to verify
    const[loginData, setLoginData] = useState({ email: '', password: '' })



    const changeHandler = event => {
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }

    const loginSubmit = event => {
        event.preventDefault();
        axios.post()
            .then(res => {
                localStorage.setItem('token', res.data)
                props.history.push('/mainpage')
                }
            )
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <Grid textAlign='center' verticalAlign='middle' style={{height: "100vh"}}>
                <Grid.Column>
                    <h1>Immunization Tracker App</h1>
                    <Form onSubmit={loginSubmit}>
                        <Segment>
                            <Form.Input fluid type='text' placeholder='Email' icon='user' iconPosition='left' name='email' value={loginData.email} onChange={changeHandler} required />
                            <Form.Input fluid type='password' placeholder='Password' icon='lock' iconPosition='left' name='password' value={loginData.password} onChange={changeHandler} required />

                            <Form.Button fluid content='Login' size='large' />
                        </Segment>
                    </Form>
                    <Message>
                        Don't have an account? <Link to='/register'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Login