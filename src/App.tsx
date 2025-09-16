import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/home';
import FAQ from './components/FAQ';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Cart from './components/Cart';
import LayoutHandling from './LayoutFolder/Layout';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordModel from './components/ForgotPasswordModel';
import Dashboard from './components/Dashboard';
import { AuthProvider, useAuth } from './AuthContext'; 

const AppRoutes = () => {
const { isLoggedIn } = useAuth(); 
return (
<Routes>
<Route path="/" element={<LayoutHandling />}>
<Route index element={<Homepage />} />
<Route path="home" element={<Homepage />} />
<Route path="faq" element={<FAQ />} />
<Route path="blogs" element={<Blogs />} />
<Route path="cart" element={<Cart />} />
code
Code
{/* CORRECTED: Protected Dashboard Route */}
    <Route
      path="dashboard"
      element={isLoggedIn ? <Dashboard /> : <Navigate to="/home" replace />}
    />

    {/* The login form route is now simpler */}
    <Route path="loginform" element={<LoginForm onClose={() => {}} />} />
    <Route path="signupform" element={<SignupForm onClose={() => {}} />} />
    <Route path="forgotpasswordmodel" element={<ForgotPasswordModel onClose={() => {}} />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
);
};
function App() {
return (
<AuthProvider> {/* Wrap everything with the AuthProvider */}
<BrowserRouter>
<AppRoutes />
</BrowserRouter>
</AuthProvider>
);
}
export default App;