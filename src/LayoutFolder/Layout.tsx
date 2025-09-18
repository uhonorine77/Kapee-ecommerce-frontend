import { Outlet, useLocation } from "react-router-dom";
import NavbarPage from "../components/Navbar";
import FooterSide from "../components/Footer";

const LayoutHandling = () => {
    const location = useLocation();
    // Check if the current path is the dashboard route.
    const isDashboardPage = location.pathname === '/dashboard';

    return (
        <div>
            {/* 
              This will now only render the public navbar if the user is NOT on the dashboard page.
            */}
            {!isDashboardPage && <NavbarPage />}
            
            <Outlet />
            
            {/* 
              This will now only render the public footer if the user is NOT on the dashboard page.
            */}
            {!isDashboardPage && <FooterSide />}
        </div>
    );
};

export default LayoutHandling;