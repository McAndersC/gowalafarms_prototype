
import Profile from "../../../components/profile/Profile";
import { useAuth } from "../../../hooks/useAuth";

const SignInPage = () => {

    const { signIn, signOut } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const {email, password} = e.target.elements;
        let result = await signIn(email.value, password.value);
    
    };

    return (
        <>
            <Profile></Profile>
          
            <form onSubmit={handleSubmit}>

                <label>
                    Email
                    <input type="text" name="email" defaultValue="admin@mediacollege.dk"></input>
                </label>

                <label>
                    Password
                    <input type="text" name="password" defaultValue="admin"></input>
                </label>

                <button type="submit">Sign In</button>{' '}<button type="button" onClick={ () => signOut()}>Sign Out</button>

            </form>
            
        </>
    );
};


export default SignInPage;