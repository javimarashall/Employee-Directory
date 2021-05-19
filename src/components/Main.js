import { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
            console.log("res:", res.data.results);
            setEmployee(res.data.results);
        });
    }, [])

    console.log("rerender")

    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Employee's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search Employees</button>
                </div>
      </div>
    )
}

export default Main;

//We need to be able to map through employee array for the change in status as the user enters the name