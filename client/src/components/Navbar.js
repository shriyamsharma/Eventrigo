import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {

  logoutHandler = (event) => {
    event.preventDefault()
    axios.get('http://localhost:5000/logout')
    .then(response => {
      this.userLogin({
        loggedIn: false
      })
    })
    .catch((error) => {
      console.log(error);
    })

    window.location = '/';
  }

  render() {
    const islogin = this.props.islogin;

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Eventrigo</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="navbar-item">
            { islogin ? <Link to="/create" className="nav-link">CREATE EVENT</Link> : null }
          </li>
          <li className="navbar-item">
            { islogin ? <Link to="#" className="nav-link" onClick={this.logoutHandler}>LOGOUT</Link> : <Link to="/login" className="nav-link">LOGIN</Link> }
          </li>
          <li className="navbar-item">
            { islogin ? null : <Link to="/signup" className="nav-link">SIGNUP</Link> }
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;