import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useLocation } from 'react-router-dom';

export const AuthContextProvider = ({ children }) => {

    const [auth, saveAuth] = useLocalStorage("auth", {});
    const [user, setUser] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    // useEffect to check token if user could be signed in.
    useEffect(() => {
      
      const checkUser = async () => {
        if(location.pathname.includes('backoffice') && !location.pathname.includes('signin')) {
          if (auth.token !== undefined) {
            let response = await fetch("http://localhost:3042/auth/token", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${auth.token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ token: auth.token })
            });

            let data = await response.json();
          
            if(data.message === 'Token Expired') {

              saveAuth({});
              setUser({});

              return navigate('/backoffice/signin')
            }
            else {
              setUser(data.user);
            }
        

          } else {
            
          
              return navigate('/backoffice/signin')
            

          }
        }
      };

      checkUser();

    }, [location.pathname, auth.token, navigate, saveAuth]);

    // token function to get token from user object.
    const token = auth.token ? auth.token : '';

    // signedIn function to check if user is signed in.
    const signedIn = auth.token !== undefined;

    // signIn function to sign in user.
    const signIn = async (email, password) => {

      let response = await fetch("http://localhost:3042/auth/signin", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
        },
        "body": JSON.stringify({
            email: email,
            password: password,
        }),
      });

      let result = await response.json();

      const user = jwtDecode(result.data.token);

      saveAuth({token:result.data.token});
      setUser(getUser());

      return user;
    };

    const getUser = () => {
        return token !== '' ? jwtDecode(token) : {};
    }

    const signOut = () => {
      saveAuth({});
      setUser({});
    };
    
    // value object to pass to AuthContext.Provider ultimately authHook.
    const value = { token, user, getUser, signIn, signOut, signedIn };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

  
export const AuthContext = createContext();
