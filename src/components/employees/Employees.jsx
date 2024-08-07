import { useEffect, useState } from "react";

import styles from './employees.module.css'
import Employee from "./Employee";
const Employees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect( () => {

      
        const getEmployees = async () => {
      
            const response = await fetch('http://localhost:3042/employees');
            const result = await response.json();

            setEmployees(result.data);

        }

        getEmployees();

    }, [])

    return (
        
        <div className={styles.employees}>
               <h2>Employees Component</h2>
               <div className={styles.list}>
                    
                    {employees.map( (employee) => {
                        
                        return <Employee key={employee._id} employee={employee}></Employee>

                    })}

                </div>
         </div>
 
    );
};
export default Employees;