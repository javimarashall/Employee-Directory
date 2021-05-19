import {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((res) => {
            console.log("res:",res.data.results);
            setEmployee(res.data.results);
        });
    },[])

    console.log("rerender")

    return (
        <div>Hello</div>
    )
}

export default Main;