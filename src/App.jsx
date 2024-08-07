import { useRoutes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import BackOfficePage from "./pages/backoffice/BackOfficePage";
import SignInPage from "./pages/backoffice/signin/SignInPage";
import GlobalNavigation from "./components/navigation/global/GlobalNavigation";
import UsersPage from "./pages/backoffice/users/UsersPage";
import EmployeesPage from "./pages/backoffice/employees/EmployeesPage";

function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/backoffice",
      element : <BackOfficePage></BackOfficePage>,
      children : [
        {
          path: "/backoffice/signin",
          element : <SignInPage></SignInPage>
        },
        {
          path: "/backoffice/employees",
          element : <EmployeesPage></EmployeesPage>
        },
        {
          path: "/backoffice/users",
          element : <UsersPage></UsersPage>
        }
      ]
    }
  ]);

  return <>
    
    <div>
        {/* GLOBAL NAVIGATION */}
        <GlobalNavigation></GlobalNavigation>
        <div className="globale-page-wrapper">
        
            {routes}
        
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
