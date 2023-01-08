import Header from "./components/Header"
import Footer from "./components/Footer"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';



// importation redux
import { store } from './redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <Header />
    <Provider store={store}>
    <App />
    </Provider>
    <Footer />
    
  </React.StrictMode>
);

reportWebVitals();