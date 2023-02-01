import styled from "styled-components"
import Login from "./pages/Authentication/login/Login"
import Signup from "./pages/Authentication/signup/Signup"
import { ThemeProvider } from "styled-components"
import GlobalStyle  from "./utils/GlobalStyles"
import  {BrowserRouter as Router, Routes,Route}  from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes"
import Home from "./pages/Home/Home"


const App = ()=> {
  const theme ={

  }
  const isAuthenticated = false;
  // get authencation first 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>;
          <Route path="/signup" element={<Signup/>}/>;
          <Route element={<ProtectedRoutes isAuthenticated = {isAuthenticated}/>} >
            <Route path="/" element={<Home/>} />;
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App


const Dev = styled.div`
  
  font-size: 100px;

`