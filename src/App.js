// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './Utils/AppStore';
import Footer from './Components/Footer';
// not using keys (not acceptable) <<<< index as a key <<<<<<<< unique id (best practice)


const App = () => {

  return(
    <Provider store={AppStore}>
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
  );  
};
export default App