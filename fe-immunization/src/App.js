import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

import Login from "./components/Login"
import RegisterForm from "./components/RegisterForm";
import UserPage from "./components/UserPage";
import OfficePage from "./components/OfficePage/OfficePage";
import Patient from "./components/Patient";



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={RegisterForm}/>
      <Route exact path="/userpage" component={UserPage}/>
      <Route exact path="/officepage" component={OfficePage}/>
      <Route exact path="/patient" component={Patient}/>
    </div>
  );
}

export default App;
