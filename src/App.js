import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header />
        <Nav />
        <div class='app-wrap-content'>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/dialogs" component ={Dialogs}/>
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
