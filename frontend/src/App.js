import React from 'react';
import './App.css';
import Navbar from './components/navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Groups from './components/Groups/Groups'
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import MapPages from './pages/map';
import Video from './components/VideoChat';
import JoinMeet from './components/JoinMeet';
import DirectionMap from './components/DirectionMap';
import Rrouter from './components/Blog/Router';
import Survey from './components/Survey/Survey'
import Background from "./Background"
import EventTable from "./components/EventsTable/index";
import ViewEvent from './ViewEvent';
function App() {
  return (
    
    <Router>
      <Background/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/event' exact component={EventTable} />
        <Route path='/blog' component={Rrouter} />
        <Route path='/group' component={Groups} />
        <Route path='/about' component={About} />
        <Route path='/survey' component={Survey} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path ='/Map' component={MapPages} />
        <Route path ='/Join' component ={JoinMeet} />
        <Route path ='/inspire/:url' component={Video} />
        <Route path='/directionMap'component={DirectionMap}/>
        <Route path='/eventView' component={ViewEvent}/>
      </Switch>
    </Router>
  );

  }
export default App;
