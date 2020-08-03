import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

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
        
        const login = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/login', login)
        .then(res => {
            console.log(res.data.auth)
            if(res.data.auth) {
                this.props.userLogin({
                    loggedIn: true
                })
                alert('Successfully Login')
            } else {
                this.props.userLogin({
                    loggedIn: false
                })
                alert('Please sign up')
            }
        })
        .catch(err => console.log(err));

    }

    render() {
        return(
            <div>
                <h3>Login</h3>
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
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;