import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import PatientCard from "./PatientCard";


const PatientList = () => {

    const [patient, setPatient] = useState({firstName:""})

  useEffect(() => {
    axiosWithAuth()
      .get("/patients")
      .then(res => {
        console.log("patients req", res.data);
        setPatient(res.data);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  }, []);



  return (
      <div>
          <h1>name:</h1>
      </div>
    // <div> {patient.map(patients => (
    //     <PatientCard patients={patients} history={props.history} />
    //   ))}
//     </div>
  )
  }

  export default PatientList;






//   class PatientList extends React.Component {

//     const [patient, setPatient] = useState({firstName:""})

//      axiosWithAuth()
//       .get("/patients")
//       .then(res => {
//         console.log("patients req", res.data);
//         setPatient(res.data);
//       })
//       .catch(err => {
//         console.log("This is bad", err.response);
//       });

//   useEffect(() => {
//     PatientList();
//   }, []);



//   return (
//       <div>
//           <h1>{patient.firstName}</h1>
//       </div>
//     // <div> {patient.map(patients => (
//     //     <PatientCard patients={patients} history={props.history} />
//     //   ))}
// //     </div>
//   )
//   }

//   export default PatientList;