import React from 'react';
import './App.css';
import Navbar from './components/navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import MapPages from './pages/map';
import Video from './components/VideoChat';
import JoinMeet from './components/JoinMeet';
import DirectionMap from './components/DirectionMap';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path ='/Map' component={MapPages} />
        <Route path ='/Join' component ={JoinMeet} />
        <Route path ='/inspire/:url' component={Video} />
        <Route path='/directionMap'component={DirectionMap}/>
      </Switch>
    </Router>
  );
}

export default App;
