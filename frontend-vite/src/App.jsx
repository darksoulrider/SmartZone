import styled from "styled-components"
import Login from "./pages/Authentication/login/Login"
import Signup from "./pages/Authentication/signup/Signup"
import { ThemeProvider } from "styled-components"
import GlobalStyle  from "./utils/GlobalStyles"
import  {BrowserRouter as Router, Routes,Route, redirect}  from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes"
import Home from "./pages/Home/Home"
import Admin from "./pages/Admin"
import Navbar from "./components/Navbar/Navbar"
const App = ()=> {
  const theme ={

  }
  const isAuthenticated =true;
  const isAdmin = false;
  const isAdminRoute = true;

  // get authencation first 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        {isAuthenticated ? <Navbar/> :null}
        <Routes>
          <Route path="/login" element={<Login/>}/>            
          <Route path="/signup" element={<Signup/>}/>            
          
          <Route element={<ProtectedRoutes isAuthenticated = {isAuthenticated}/>} >
            <Route path="/" element={<Home/>} />;
          </Route>


          {/* ---------- Admin Routes------------ */}
          <Route element={<ProtectedRoutes isAuthenticated = {isAuthenticated} isAdminRoute={isAdminRoute} isAdmin={isAdmin}/>} >
            <Route path="/admin" element={<Admin/>} />;
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App


