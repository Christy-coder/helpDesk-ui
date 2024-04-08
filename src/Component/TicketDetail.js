import React from "react";

export const TicketDetail = ({ ticket }) => {
  return (
    <div>
      <div className="row">
        <div className="ticket_data">
          <strong>Name:</strong>
        </div>
        <div className="ticket_data">{ticket.name}</div>
      </div>
      <div className="row">
        <div className="ticket_data">
          <strong>Email:</strong>
        </div>
        <div className="ticket_data">{ticket.email}</div>
      </div>
      <div className="row">
        <div className="ticket_data">
          <strong>Description:</strong>
        </div>
        <div className="ticket_data">{ticket.description}</div>
      </div>
      <div className="row">
        <div className="ticket_data">
          <strong>Status:</strong>
        </div>
        <div className="ticket_data">{ticket.status}</div>
      </div>
      <div className="row">
        <div className="ticket_data">
          <strong>Creation Date:</strong>{" "}
        </div>
        <div className="ticket_data">
          {new Date(ticket.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
};
