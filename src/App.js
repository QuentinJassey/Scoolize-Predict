import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Formations from "./pages/Formations";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import GlobalStyle from "./GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getFormations } from "./redux/reducers/formation.js";
import { getFormationslimited } from "./redux/reducers/formationLimited";
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFormationslimited(20));
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
