import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

import Login from "./components/Login"
import RegisterForm from "./components/RegisterForm";
import UserPage from "./components/UserPage/UserPage";
import OfficePage from "./components/OfficePage/OfficePage";
import Patient from "./components/Patient";
import PrivateRoute from "./components/PrivateRoute";



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={RegisterForm}/>
      <PrivateRoute exact path="/userpage" component={UserPage}/>
      <PrivateRoute exact path="/officepage" component={OfficePage}/>
      <PrivateRoute exact path="/patient" component={Patient}/>
    </div>
  );
}

export default App;
