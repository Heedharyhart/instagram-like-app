import { Switch, Router, Route } from 'react-router';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import React, { Component } from 'react';
import NoMatch from './pages/404Pages/404Page';

class App extends Component{
  state={
    isLog:false 
  }

  handleLogin = (isLog) => {this.setState({isLog})
}



   render(){

    const {isLog} = this.state;
    return (
      <div className="App">
        <Switch>
          {
            !isLog ? 
            <Route exact path='/'render={()=><Login isLogin={this.handleLogin}/>}/>
            :
            <Route path='/' render={()=><Home handleLogged={this.handleLogin}/>}/>
          }
          
          <Route path='*' component={NoMatch}/>
        </Switch>
      </div>
    );
    
  }
}

export default App;
