import React, { Component } from 'react';
import axios from 'axios';
import Event from './Events/Event';

class EventList extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/events/')
        .then(response => {
          this.setState({ events: response.data });
        })
        .catch((error) => {
          console.log(error);
        })
    }

    eventList() {
        return this.state.events.map(currentevent => {
          return <Event event={currentevent} key={currentevent._id}/>;
        })
      }

    render() {
        return(
            <div>
                <h3>Events</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Organizer Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Event Type</th>
                    <th>Date</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {this.eventList()}
                </tbody>
                </table>
            </div>
        );
    }
}

export default EventList;
