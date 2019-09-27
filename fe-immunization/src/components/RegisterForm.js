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
        // <div className="container App">
        //     <Form onSubmit={submitHandler}>
        //         <div className="card-header">
        //             <h1>Register</h1>
        //         </div>
        //         <div>
        //             <Form.Input className="" type="text" placeholder="Username" name="username" onChange={changeHandler} value={userCredentials.username} required />
        //             <Form.Input  type="password" placeholder="Password" name="password" onChange={changeHandler} value={userCredentials.password} required />
        //             <Form.Input  type="email" placeholder="Email" name="email" onChange={changeHandler} value={userCredentials.email} required />
        //             <Form.Input  type="text" placeholder="If Provider, Fill in" name="providerName" onChange={changeHandler} value={userCredentials.providerName}  />
                    
        //             <Button className="login_btn" content="Register" size="large" />
        //         </div>
        //     </Form>
        //     </div>

        <div className="container App">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h1>Register </h1>
                    </div>
                    <div className="card-body">
                        <Form onSubmit={submitHandler}>
                            <div className="input-group form-group">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input
                                type="text"
                                name="username"
                                value={userCredentials.username}
                                onChange={changeHandler}
                                placeholder="Username"
                                required
                                />
                            </div>
                            <div className="input-group form-group"> 
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input
                                    type="password"
                                    name="password"
                                    value={userCredentials.password}
                                    onChange={changeHandler}
                                    placeholder="Password"
                                    required
                                    />
                            </div>
                            <div className="input-group form-group">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input
                                type="email"
                                name="email"
                                value={userCredentials.email}
                                onChange={changeHandler}
                                placeholder="Email"
                                required
                                />
                            </div>
                            <div className="input-group form-group">   
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input
                                type="text"
                                name="providerName"
                                value={userCredentials.providerName}
                                onChange={changeHandler}
                                placeholder="If Provider, Fill in"
                                required
                                />
                            </div>
                                    {/* <button type="submit">Log in</button> */}
                            <div className="form-group">
						        <input type="submit" value="Register" className="btn float-right login_btn"/>
					        </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
