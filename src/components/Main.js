import { useState, useEffect } from 'react'
import axios from 'axios'
import React from "react";
import TableRow from "./TableRow";

const Main = () => {
    const [employees, setEmployees] = useState(null);
    const [filtered, setFiltered] = useState(null);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
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
                    <TableRow data={employee}/>
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

    // function handleSort(a,b) {
    //     const { employee } = props;
    //     let sortedProducts = [...employee];
    //     sortedProducts.sort((a, b) => {
    //       if (a.name < b.name) {
    //         return -1;
    //       }
    //       if (a.name > b.name) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   }


    const handleSort = (employees) => {
        employees.sort(function (a, b) {
            return a.localeCompare(b); //using String.prototype.localCompare()
          });
    }

    return (
        <>
            <div className="input-group mb-3">
                <input onChange={(event) => handleChange(event)} type="text" className="form-control" placeholder="Employee's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search Employees</button>
                </div>
            </div>
            <table className="table">
                <tbody>
                    <tr>
                        <th>picture</th>
                        <th onClick={handleSort}>name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>DOB</th>
                    </tr>
                    {renderTableRows()}
                </tbody>
            </table>
        </>
    )
}

export default Main;

//We need to be able to map through employee array for the change in status as the user enters the name