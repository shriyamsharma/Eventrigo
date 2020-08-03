import React, {Component} from 'react';
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import EventList from './components/EventList/EventList';
import CreateEvent from './components/CreateEvent/CreateEvent';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import axios from 'axios';

class App extends Component {

  state = {
    loggedIn: false
  }

  componentDidMount() {
    this.isLogin();
  }

  userLogin = (userObject) => {
    this.setState(userObject);
  }

  isLogin() {
    axios.get('http://localhost:5000/haslogin').then(response => {
      console.log('Get user response: ')
      console.log(response.data.auth)
      if (response.data.auth) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  render() {
    return (
        <div className="container">
          <Navbar userLogin={this.userLogin} islogin={this.state.loggedIn} />
          <br />
          <Route path="/" exact component={EventList} />

          <Route path="/create" render={() => 
            <CreateEvent isLogin={this.state.loggedIn} />
          } />
          
          <Route 
            path="/login"
            render={ () => 
              <Login userLogin={this.userLogin} />
            } />
          
          <Route path="/signup" component={Signup} />
        </div> 
    );
  }
}

export default App;