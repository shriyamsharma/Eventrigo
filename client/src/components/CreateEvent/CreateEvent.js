import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateEvent extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        event: '',
        date: new Date(),
        city: ''
    }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  } 

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  onChangePhone = (event) => {
    this.setState({
      phone: event.target.value
    });
  }

  onChangeEvent = (event) => {
    this.setState({
      event: event.target.value
    });
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  
  onChangeCity = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    const events = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        event: this.state.event,
        date: this.state.date,
        city: this.state.city
    }

    console.log(events);

    axios.post('http://localhost:5000/events/create', events)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    console.log(this.props.isLogin)
    const login = this.props.isLogin;

    let show = (
        <div>
        <h3>Create New Events</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group"> 
            <label>Organizer Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
              />
          </div>
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
            <label>Phone: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangePhone}
                />
          </div>
          <div className="form-group">
            <label>Event Type: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.event}
                onChange={this.onChangeEvent}
                />
          </div>
          <div className="form-group">
            <label>Event Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Event City: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.city}
                onChange={this.onChangeCity}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Event" className="btn btn-primary" />
          </div>
        </form>
      </div> 
    )

    return (
      <div>
        {login ? show : window.location="/login"} 
      </div>
    )
  }
}

export default CreateEvent;