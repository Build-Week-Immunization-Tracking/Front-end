import React, {useState, useEffect, useContext} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import UserForm from "./UserForm";
import User from "./User";
import ConsentForm from "./ConsentForm";


import {ImmunizationContext} from "../context/ImmunizationContext";
// import {PatientContext} from "../context/PatientContext";




const UserPage = () => {
    const [patient, setPatient] = useState([]);
    const [patientToEdit, setPatientToEdit] = useState(null);
    // const{patient} = useContext(PatientContext)

    const [consent, setConsent] =useState({id: "", providers: ""});
    const{immunizationsArray} = useContext(ImmunizationContext);
    console.log("list", immunizationsArray)
  


    // const [patient, setPatient] = useState([]);
  
    // const getPatient =  () => {
     
    //   return axiosWithAuth()
    //   .get('/patients')
    //    .then(res => {
    //      setPatient(res.data.patients);
    //     //  console.log("im here",res.data.patients)
    //    })
    //    .catch(err => console.log(err)
    //    )};
    //    useEffect (() => {
    //      getPatient();
    //    }, [])
    //   //  console.log(" Patient", patient);

    const getPatient =  () => {
      return axiosWithAuth()
      .get('/patients')
       .then(res => {
         setPatient(res.data.patients);
         console.log("im here",res.data.patients)
       })
       .catch(err => console.log(err)
       )};

       useEffect (() => {
         getPatient();
       }, [])
       console.log(" Patient", patient);

    

        
      const addPatient = newPatient => {
        axiosWithAuth().post("/patients", newPatient)
          .then(res => {
            console.log(res.data)
            setPatient([...patient, newPatient])
          })
          .catch(err => console.log(err))
      }

    
      const deletePatient = id => {
        axiosWithAuth().delete(`/patients/${id}`)
          .then(res => {
            console.log("delete", res.data)
            setPatient(patient.filter((patient) => 
              patient.id === id ? false : true
            ))
            
          })
          .catch(err => console.log(err))
      }
    
      const editPatient = (p) => {
        axiosWithAuth().put(`/patients/${p.id}`, p)
          .then(res => {
            // setPatient()
            setPatient(patient.map(patient => (patient.id === res.data.id ? res.data : patient)));
            // get and post
            getPatient();
          })
          .catch(err => console.log(err))
          .finally(setPatientToEdit(null));
      }
    
      const changePatientToEdit = patient => {
        setPatientToEdit(patient);
      }

      // console.log("patient here",patient)
//     return (
//         <div>
//             <UserForm addPatient={addPatient} editPatient={editPatient} patientToEdit={patientToEdit} />
//             <form id={consent.id} providers={consent.providers} />
//             <ConsentForm id={consent.id}/>
//             {/* {immunizationsArray.map(item => {
//               return(
//                 <p key={item.id}>{item.name}</p>
//               )
//             })} */}
//             {console.log("return", patient)}
//             {patient.map(patient => {
//                return(
//                  <div>
//               <User key={patient.id} patient={patient} deletePatient={deletePatient} changePatientToEdit={changePatientToEdit}/>
//               {/* <ConsentForm key={patient.id} id={patient.id} /> */}
//                 </div>
//                )
//             })}
//         </div>
//     )
// };




//   // const [patient, setPatient] = useState([]);
//   const getPatient = () => {
//     return axiosWithAuth()
//       .get("/patients")
//       .then(res => {
//         setPatient(res.data.patients);
//         console.log("im here", res.data.patients);
//       })
//       .catch(err => console.log(err));
//   };
//   useEffect(() => {
//     getPatient();
//   }, []);
//   console.log(" Patient", patient);


  return (
    <div>
      <UserForm
        addPatient={addPatient}
        editPatient={editPatient}
        patientToEdit={patientToEdit}
      />
      <form id={consent.id} providers={consent.providers} />
      <ConsentForm id={consent.id}  />
      {immunizationsArray.map(item => {
        return <p key={item.id}>{item.name}</p>;
      })}
      {console.log("return", patient)}
      <div className="allCards">

        {patient.map(patient => {
          return (
            
            <User
              key={patient.id}
              patient={patient}
              deletePatient={deletePatient}
              changePatientToEdit={changePatientToEdit}
            />
            
          );
        })}
      </div>
      {/* {patient.map(patient => {
        return (
          <ConsentForm
            key={patient.id}
            patient={patient}
            deletePatient={deletePatient}
            changePatientToEdit={changePatientToEdit}
          />
        );
      })} */}
    </div>
  );
};
export default UserPage;