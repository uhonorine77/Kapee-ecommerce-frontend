import { Outlet, useLocation } from "react-router-dom";
import NavbarPage from "../components/Navbar";
import FooterSide from "../components/Footer";

const LayoutHandling = () => {
    const location = useLocation();
    const isDashboardPage = location.pathname === '/dashboard';

    return (
        <div>
            <NavbarPage />
            <Outlet />
            {!isDashboardPage && <FooterSide />}
        </div>
    );
};

export default LayoutHandling;