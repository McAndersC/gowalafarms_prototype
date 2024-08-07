import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/backoffice/BackofficeNavigation";
import styles from './backOffice.module.css';

const BackOfficePage = () => {

    return (
        <div className={styles.backoffice}>
            
            <div className={styles.navpane}>
                <Navigation></Navigation>
            </div>

            <div className={styles.content}>
                <Outlet />
            </div>
           
        </div>
    );
    
};


export default BackOfficePage;