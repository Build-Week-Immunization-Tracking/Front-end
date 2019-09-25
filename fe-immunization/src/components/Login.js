
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
            
            axiosWithAuth().post("/login", login)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.id)
                if (res.data.isProvider) {
                    props.history.push("/officepage")
                } else {
                props.history.push("/userpage")}

            })
            .catch(err => console.log(err))
            setLogin({username: "", password: ""})
        }

    return (
        <div className="container App">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h1>Immunization Tracker </h1>
                    </div>
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <div className="input-group form-group">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input
                                type="text"
                                name="username"
                                value={login.username}
                                onChange={handleChange}
                                placeholder="Username"
                                />
                            </div>
                            <div className="input-group form-group"> 
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input
                                    type="password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    />
                            </div>
                                    {/* <button type="submit">Log in</button> */}
                            <div className="form-group">
						        <input type="submit" value="Login" className="btn float-right login_btn"/>
					        </div>
                        </Form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                        <Message>
                            Don't have an account? <Link to='/register'>Register Now</Link>
                        </Message>
                        </div>
			        </div>
                </div>
            </div>
        </div>
    )
}

export default Login;