import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react';
import {axiosWithAuth} from "./utils/axiosWithAuth";

    const Login = props => {
        const [login, setLogin] = useState({username: "", password: ""})
    
        const handleChange = e => {
            setLogin({...login, [e.target.name]: e.target.value})
        }
    
        const handleSubmit = e => {
            e.preventDefault();
            setLogin({username: "", password: ""})
            
            axiosWithAuth().post("./login", login)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                props.history.push("/userpage")
            })
            .catch(err => console.log(err))
            setLogin({username: "", password: ""})
        }

    return (
        <div>
                    <h1>Immunization Tracker </h1>
                <Form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={login.username}
                        onChange={handleChange}
                        placeholder="Username"
                        />
                    <input
                        type="text"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                        placeholder="Password"
                        />
                     <button type="submit">Log in</button>
                </Form>
                <Message>
                    Don't have an account? <Link to='/register'>Register Now</Link>
                </Message>
        </div>
    )
}

export default Login;