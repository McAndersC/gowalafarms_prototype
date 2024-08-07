import { useState } from 'react';
import styles from './employee.module.css';

const Employee = ({employee = {name : 'Placeholder Name', description: `<p>Placeholder html <b>markup</b> text</p>`, imagePath: '/employees/01.jpg'}}) => {

    const [open, setOpen] = useState(false)

    return (
        <div className={`${styles.card} ${open ? styles.open : null}`}>
            <div className={styles.box}>
                <div className={styles.actions}>
                    <div className={styles.text} dangerouslySetInnerHTML={{__html : employee.description}}></div>
                    <div className={styles.btn} onClick={() => setOpen(!open)}>{employee.name}</div>
                </div>
            </div>
            <img src={'http://localhost:3042' + employee.imagePath}/>
        </div>
    );
};

export default Employee;
