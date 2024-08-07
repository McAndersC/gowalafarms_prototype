import { NavLink } from "react-router-dom";
import styles from './backofficeNavigation.module.css'
const Navigation = () => {
    return (
        <div className={styles.backofficeNavigation}>
            <NavLink to="/backoffice/signin"  className={({ isActive }) =>
                isActive ? styles.active : ""
            }>Sign In</NavLink>
            <NavLink to="/backoffice/users" className={({ isActive }) =>
                isActive ? styles.active : ""
            }>Redigér Brugere</NavLink>
            <NavLink to="/backoffice/employees" className={({ isActive }) =>
                isActive ? styles.active : ""
            }>Redigér Medarbejdere</NavLink>
        </div>
    );
};

export default Navigation;