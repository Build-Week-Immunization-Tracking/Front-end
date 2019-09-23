
import React, { useState } from "react";
import './UserPage.css';

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

            <form onSubmit={submitForm}>
                <label htmlFor="Vaccine">Vaccine</label>
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={vaccine.name}
                />
                <label htmlFor="DateGiven">Date Given</label>
                <input
                id="dateGiven"
                type="text"
                name="date"
                onChange={handleChanges}
                value={vaccine.dateGiven}
                />
                <label htmlFor="DateNextDoseDue">Date Next Dose Due</label>
                <input
                id="DateNextDoseDuel"
                type="text"
                name="date"
                onChange={handleChanges}
                value={vaccine.dateNextDoseDue}
                />
                <button type="submit">Add Vaccine</button>
            </form>
        </>
    )
}
  export default UserPage;