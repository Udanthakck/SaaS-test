import { useEffect} from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import Landing from './pages/common/Landing.jsx';
import PageNotFound from './pages/common/PageNotFound.jsx';
import AdminLogin from './pages/admin/Login.jsx';
import SupAdminLogin from './pages/super-admin/Login.jsx';
import AdminResetPassword from './pages/admin/ResetPassword.jsx';
import SupAdminResetPassword from './pages/super-admin/ResetPassword.jsx';
import AdminEmailVerify from './pages/admin/EmailVerification.jsx';
import AdminSignup from './pages/admin/Signup.jsx';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<Landing />} 
        />
        <Route 
          path="/*" 
          element={<PageNotFound />} 
        />
        <Route 
          path="/admin/*" 
          element={<AdminRoutes />} 
        />
        <Route 
          path="/super-admin/*" 
          element={<SupAdminRoutes />} 
        />
        
      </Routes>
      
    </>
      
  )
}

function AdminRoutes() {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={<AdminLogin />} 
      />
      <Route 
        path="/password-reset"
        element={<AdminResetPassword />}
      />
      <Route
        path='/verify'
        element={<AdminEmailVerify />}
      />
      <Route 
        path='/signup'
        element={<AdminSignup />}
      />
    </Routes>
  )
}

function SupAdminRoutes() {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={<SupAdminLogin />} 
      />
      <Route 
        path="/password-reset"
        element={<SupAdminResetPassword />}
      />
    </Routes>
  )
}

export default App
