import React from 'react';

const Event = props => (
    <tr>
      <td>{props.event.name}</td>
      <td>{props.event.email}</td>
      <td>{props.event.phone}</td>
      <td>{props.event.event}</td>
      <td>{props.event.date.substring(0,10)}</td>
      <td>{props.event.city}</td>
    </tr>
);

export default Event;