import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import SideNavbar from './components/Side-Navbar';
import SuperadminLogin from './components/superadminLogin';

function App() {
  const location = useLocation();
  const token = Cookies.get("authToken");
  const hideNavbarPaths = ["/login"];

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <SideNavbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SuperadminLogin />} />
        <Route path="/sidenavbar" element={token ? <SideNavbar /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;