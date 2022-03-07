import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";

import { store } from "./redux/store";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Pokemon from "./pages/Pokemon/Pokemon";
import PokeDetails from "./pages/Details/PokeDetails";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/details/:url" element={<PokeDetails />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
