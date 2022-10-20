import React, { useEffect, useState } from 'react'
import PatientService from '../services/PatientService';

 function PatientComponent() {
   const [patients, setPatients] = useState([])

   useEffect(() => {
      getPatients()

   }, [])
   

   const getPatients = () =>{
    PatientService.getPatients().then((response) =>{

      setPatients(response.data)
      console.log(response.data);

    });


  };

  return (
    <div>
    <h1 className = "text-center"> Patients List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Patient Id</td>
                            <td> Patient First Name</td>
                            <td> Patient Last Name</td>
                            <td> Patient NumL</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            patients.map(
                                patient => 
                                <tr key = {patient.id}>
                                     <td> {patient.id}</td>   
                                     <td> {patient.nom}</td>   
                                     <td> {patient.prenom}</td>   
                                     <td> {patient.numtel}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                </div>

  )
}

export default PatientComponent
