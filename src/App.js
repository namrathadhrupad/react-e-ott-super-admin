import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import SideNavbar from './components/Side-Navbar';
import SuperadminLogin from './components/superadminLogin';

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/login"];

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <SideNavbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SuperadminLogin />} />
        {/* <Route path="/sidenavbar" element={ <SideNavbar />} /> */}
      </Routes>
    </div>
  );
}

export default App;