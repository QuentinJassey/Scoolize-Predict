import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Formations from "./pages/Formations";
import GlobalStyle from './GlobalStyle.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();

