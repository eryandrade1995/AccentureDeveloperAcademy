import React from "react";
import More from './pages/More';
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global";
import { Routes, Route, BrowserRouter } from "react-router-dom";



function App() {
  
  return (
    <BrowserRouter>
    
      <GlobalStyle />
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/more" element={<More />} />

        </Routes>
        
    </BrowserRouter>   

  );
}

export default App;
