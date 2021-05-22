import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import React from "react";
import TableRow from "./TableRow";

const Main = () => {
    const [employees, setEmployees] = useState(null);
    const [filtered, setFiltered] = useState(null);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
            console.log("res:", res.data.results);
            setEmployees(res.data.results);
            setFiltered(res.data.results);
           
        });
    }, [])

    const renderTableRows = () => {
        let result = null;


        if (filtered) {
            result = filtered.map((employee) => {
                return (
                    <TableRow data={employee} />
                )
            });
        }

        return result;
    }

    const handleChange = (event) => {
        //get user input
        const userInput = event.target.value.toLowerCase();

        const filteredList = employees.filter((employee) => employee.name.first.toLowerCase().indexOf(userInput) > -1);

        setFiltered(filteredList);
    }

     const handleSort = () => {
       const sortedEmployees = employees.sort(function(a, b){
            
            // if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
            // if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
            // console.log("**",a)
            // return 0;
    //         setEmployees(sortedEmployees);
    //  });
    //}  
     

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor02">

                   
                </div>
                <div className="input-group ">
                    <input onChange={(event) => handleChange(event)} type="text" className="form-control" placeholder="Search Employee" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search Employee</button>
                    </div>
                </div>
                </div>
            </nav>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th onClick={handleSort}>Name</th>
                        <th>Phone</th>
                        <th>E-Mail</th>
                        <th>DOB</th>
                    </tr>
                    {renderTableRows()}
                </tbody>
            </table>
        </>
    )
}

export default Main;
//<th onClick={handleSort}>Name</th>

