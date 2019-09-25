import React, {useEffect, useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Immunization from "./Immunization";

const Immunization = () => {
    const [immunization, setImmunization] = useState([]);

    useEffect(() => {
    axiosWithAuth().get("/patients/:id/immunizations")
        .then(res => {
            console.log("working?",res)
            setImmunization(res.data)
        })
        .catch(err => console.log(err))
        }, [])


    return (
        <div>
            {immunization.map((immunization) => {
                return<Immunization name={immunization.name}/>
            })}
        </div>
    )
}

export default Immunization;