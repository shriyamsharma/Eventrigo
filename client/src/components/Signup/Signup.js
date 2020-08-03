import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }


    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        
        const signup = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/signup', signup)
        .then(alert('Successfully Signed Up'))
        .catch(err => console.log(err));

        window.location = "/";
    }

    render() {
        return(
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="email"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Password: </label>
                    <input  type="password"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;