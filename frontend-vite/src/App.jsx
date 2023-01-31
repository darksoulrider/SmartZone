import styled from "styled-components"
import Login from "./pages/Authentication/login/Login"
import { ThemeProvider } from "styled-components"
import GlobalStyle  from "./utils/GlobalStyles"
const App = ()=> {
  const theme ={

  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Login />
    </ThemeProvider>
  )
}

export default App


const Dev = styled.div`
  
  font-size: 100px;

`