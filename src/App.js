
import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {  Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Recomendation/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import {initialiseApp} from '../src/components/redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component{

    componentDidMount() {
      this.props.initialiseApp()
  }

  render(){
    if(!this.props.initialized) {
      return <Preloader />
    }

      return (
          <div className="app-wrap">
            <HeaderContainer />
            <Nav />
            <div className='app-wrap-content'>
              <Route path="/profile/:userId?" render={() => 
                <ProfileContainer />}
              />

              <Route  path="/dialogs" render ={() => 
                <DialogsContainer/>}
              />

              <Route  path="/news" render={() => <News />} />
              <Route  path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/recomendation" render={() => <UsersContainer />} />
              <Route path='/login' render={() => <LoginPage />} />

            </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose( 
  withRouter,
  ( connect(mapStateToProps, {initialiseApp})) (App));
