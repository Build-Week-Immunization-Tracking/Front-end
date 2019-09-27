import React, { useState, useEffect } from "react";
// import styled from 'styled-components';
// import { Card, CardTitle, CardText } from 'reactstrap';
// import { axiosWithAuth } from "./utils/axiosWithAuth";
// import User from "./UserPage/User";


// const StyledDiv = styled.div`
// `

// const StyledCard = styled(Card)``




export default function Patient() {

//     const [patient, setPatient]= useState([]);

//         useEffect(()=> {
//             axiosWithAuth().get("/patients")
//             .then((response) => {
//                 console.log(response);
//                 const patientArray = response.data.results;
//                 // setPatient(patientArray);
//             })
//             .catch(error => {
//                 console.log("No data returned", error)
//             });
//         },[]);

//     return (
//         <div className="patient-info">
//         <h1>Patient Info</h1>
//         {patient.map(patientinfo => {  
//             return <StyledDiv>
//                 <StyledCard>
//                     <CardTitle>Patient Name:</CardTitle>{patientinfo.firstName}
//                     <CardText>
//                         <p>Date of Birth: {patientinfo.birthDate}</p>
//                     </CardText>
//                     <CardText>
//                         <p>Immunization: {patientinfo.immunization}</p>
//                     </CardText>
//                 </StyledCard>
//              </StyledDiv>
//         })}
//         </div>
//     )
// }

// const Patient = () => {
//     const [patient, setPatient] = useState([]);
//     const getPatient =  () => {
//          return axiosWithAuth()
//          .get('/patients')
//           .then(res => {
//             setPatient(res.data.patients);
//             console.log("im here",res.data.patients)
//           })
//           .catch(err => console.log(err)
//           )};
//           useEffect (() => {
//             getPatient();
//           }, [])
//           console.log(" Patient", patient);
    return(
//         <div className="patient-info">
                     <h1>Patient Info</h1>
//                     <StyledDiv>
//                         <StyledCard>
                        
//                              <CardTitle>Patient Name:{patient.firstName}</CardTitle>
//                                 <CardText>
//                                 Date of Birth: {patient.birthDate}
//                                 </CardText>
//                                 <CardText>
//                                 Immunization: {patient.immunization}
//                                 </CardText>
//                         </StyledCard>
//                     </StyledDiv>
//         {patient.map(patient => {
//                   return(
//                     <User key={patient.id} patient={patient} />
                  )
//                })}
//     </div>
//     )
    }

    // export default Patient;
