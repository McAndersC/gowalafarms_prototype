import { NavLink } from 'react-router-dom';
import styles from './globalNavigation.module.css'
const GlobalNavigation = () => {
    return (
        <div className={styles.globalNavigation}>
            
            <NavLink to="/" className={({ isActive }) =>
                isActive ? styles.active : ""
            }>Front Page</NavLink>

            <NavLink to="/backoffice" className={({ isActive }) =>
                isActive ? styles.active : ""
            }>Backoffice</NavLink>
        </div>
    );
};
export default GlobalNavigation;