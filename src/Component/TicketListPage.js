import React from 'react';
import { Link } from 'react-router-dom';

export const TicketList = ({ tickets }) => {
  return (
    <div className="ticket_list_outter">
      <table className="ticket_list">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Creation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket._id}</td>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.status}</td>
              <td>{new Date(ticket.createdAt).toLocaleString()}</td>
              <td>
                <Link to={`/ticket/${ticket._id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
