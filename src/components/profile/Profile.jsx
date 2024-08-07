import { useAuth } from '../../hooks/useAuth';
import styles from './profile.module.css'

const SignedIn = ({user}) => {
    return (
        <>
            <img src={`http://localhost:3042/${user.picture ? user.picture : '/users/fallback.jpg'}`}></img>
        </>
    )
}

const SignedOut = () => {
    
    return (
        <>
            <img src={`/MCDM_Logo.jpg`}></img>
        </>
    )
}

const Profile = () => {

    const { signedIn, getUser } = useAuth();

    const user = getUser();

    return (
        
        <div className={styles.profile}>
           
            <div className={styles.picture}>
                {signedIn ? <SignedIn user={user}></SignedIn> : <SignedOut></SignedOut>}
            </div>

            <div>NAME : {user.name}</div>
            <div>EMAIL : {user.email}</div>
        </div>
    );
};

export default Profile;