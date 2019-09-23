
import React, { useState } from "react";
import './UserPage.css';
import UserSummaryTable from './UserSummaryTable';

const UserPage = (props) => {

    console.log(props);

    const [vaccine, setVacccine] = useState({
      vaccine:'',
      dateGiven:'',
      dateNextDoseDue:''
    });

    const handleChanges = event => {
      setVacccine({ ...vaccine, [event.target.name]: event.target.value });
      console.log(vaccine);
    };

    const submitForm = event => {
      event.preventDefault();
      props.addNewVaccine(vaccine);
      setVacccine({ vaccine: "", dateGiven: "" , dateNextDoseDue: "" ,});
      console.log(event.target.value);
    };
  
    return (
        <>
            <h1>User Page</h1>
            <div className = 'user-page'>

              <UserSummaryTable />

              <form className = 'user-form' onSubmit={submitForm}>

                  <div className='form-input'>
                    <label htmlFor="Vaccine">Vaccine</label>
                    <input id="userInput"
                    
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={vaccine.name}
                    />
                  </div>
                  
                  <div className='form-input'>
                    <label htmlFor="DateGiven">Date Given</label>
                    <input id="userInput"
                    
                    type="text"
                    name="date"
                    onChange={handleChanges}
                    value={vaccine.dateGiven}
                    />
                  </div>
                  
                  <div className='form-input'>
                    <label htmlFor="DateNextDoseDue">Date Next Dose Due</label>
                    <input id="userInput"
                    
                    type="text"
                    name="date"
                    onChange={handleChanges}
                    value={vaccine.dateNextDoseDue}
                    />
                  </div>
                  
                  <button id="userButton" type="submit">Add Vaccine</button>
              </form>
            </div>
        </>
    )
}
  export default UserPage;