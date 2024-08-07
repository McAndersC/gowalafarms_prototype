import { useEffect, useState } from "react";

import styles from './employees.module.css'
import Employee from "./Employee";
const Employees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect( () => {
      
      
        const getEmployees = async () => {
      
            try {
                const response = await fetch('http://localhost:3042/employees');

                console.log(response)
                const result = await response.json();
                console.log(result)
                setEmployees(result.data);
            } catch (error) {
                // console.log(error)
            }


        }

        getEmployees();

    }, [])

    let noEmployees = employees.length === 0 ? 'No Employees - Have you started the server?' : null;

    return (
        
        <div className={styles.employees}>
               <h2>Employees Component</h2>
               <div className={styles.list}>
                    {noEmployees}
                    {employees.map( (employee) => {
                        
                        return <Employee key={employee._id} employee={employee}></Employee>

                    })}

                </div>
         </div>
 
    );
};
export default Employees;