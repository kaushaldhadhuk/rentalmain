// import logo from './logo.svg';


import About from './about';
import './App.css';

import Footer from './footer';
import Header from './header';
import Home from './home';
import Script from './script';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <BrowserRouter>
       <Header/>
    <Router />
    <Footer/>
    </BrowserRouter>
    {/* < RegistrationForm/> */}
    <Script/>
    </>
  );
}

export default App;
