import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Register from './components/user/Register';
import HomePage from './components/home/HomePage';
import Login from './components/user/Login';
import Dashboard from './components/home/Dashboard';
import Logout from './components/user/Logout';

const Routes = () => (
  <Switch>
    <PublicRoute restricted = {true} exact path= '/' component={HomePage}/>
    <PublicRoute restricted = {true} exact path= '/sign-up' component={Register}/>
    <PublicRoute restricted = {true} exact path= '/login' component={Login}/>
    <PublicRoute restricted = {false} exact path= '/logout' component={Logout}/>
    
    <PrivateRoute exact path= '/dashboard' component = {Dashboard}/>
  </Switch>
)

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  return (
    //restricted = false => public route
    //restricted = true => restricted route, only unauthenticated user can see
      <Route {...rest} render={(props) => (
          localStorage.getItem('isLoggedIn') === "true" && restricted 
              ?  <Redirect to={{
                  pathname: '/dashboard',
                  state: {from: props.location}
              }}/>
              : <Component {...props} />
              
      )}/>

  )
}

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
      <Route {...rest} render={(props) => (
          localStorage.getItem('isLoggedIn') === "true"
              ? <Component {...props} />
              : <Redirect to={{
                  pathname: '/login',
                  state: {from: props.location}
              }}/>
      )}/>

  )
}


export default Routes;
