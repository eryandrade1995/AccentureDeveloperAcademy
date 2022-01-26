import React from "react";
import More from './pages/More';
import Home from "./pages/Home"
import useTheme from './hooks/Theme';
import { GlobalStyle } from "./styles/global";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";



function App() {
  const { theme, changeTheme } = useTheme();
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Routes>
      
          <Route path="/" element={<Home onChangeTheme={changeTheme}/>} />
          <Route path="/home" element={<Home onChangeTheme={changeTheme}/>} />

          <Route path="/more" element={<More onChangeTheme={changeTheme}/>} />

        </Routes>
        </ThemeProvider>
    </BrowserRouter>   

  );
}

export default App;
