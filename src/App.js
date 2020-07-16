import React, {component} from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
       <Route exact={true} path='/'component={Home} />
       <Route path='/about' component={About} />
       <Route path='/contact' component={Contact} />


      <Footer/>
    </div>
  );
}

export default App;
