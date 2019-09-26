import React, {useEffect, useState} from 'react';
import './App.css';
import {Route} from "react-router-dom";

import Login from "./components/Login"
import RegisterForm from "./components/RegisterForm";
import UserPage from "./components/UserPage/UserPage";
import OfficePage from "./components/OfficePage/OfficePage";
import Patient from "./components/Patient";
import PrivateRoute from "./components/PrivateRoute";
import Immunization from "./components/UserPage/Immunization";
import { ImmunizationContext } from './components/context/ImmunizationContext';
import {axiosWithAuth} from "./components/utils/axiosWithAuth";



function App() {

  const [immunizationsArray, setImmunizations] = useState([]);
  console.log(immunizationsArray);
  const getImmunizations = () => {
    return axiosWithAuth()
      .get("/immunizations")
      .then(res => {
        console.log("immunization req", res.data.immunization);
        setImmunizations(res.data.immunization);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  };
  useEffect(() => {
    getImmunizations();
  }, []);
  
  console.log(immunizationsArray);
  return (
  <ImmunizationContext.Provider value={{immunizationsArray}}>
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={RegisterForm}/>
      <PrivateRoute exact path="/userpage" component={UserPage}/>
      <PrivateRoute exact path="/officepage" component={OfficePage}/>
      <PrivateRoute exact path="/patient" component={Patient}/>
      <PrivateRoute exact path="/immunization" component={Immunization}/>
    </div>
  </ImmunizationContext.Provider>
  );
}

export default App;
