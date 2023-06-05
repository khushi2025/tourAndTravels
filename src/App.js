import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
const App = () => {
  return(
   <>
   <Navbar></Navbar>
   <Home></Home>
    <Main></Main>
     <Footer></Footer>
   </>
  )
}
export default App;
