import React from "react";

export const TicketActions = ({ ticket, handleStatusUpdate, responseText, setResponseText, handleResponse }) => {
  return (
    <div>
      <div className="row">
        <div className="ticket_data">
          <h3 className="text-uppercase">Actions</h3>
        </div>
      </div>
      <div className="row">
        <div className="ticket_data">
          <label>Status:</label>
        </div>
        <div className="ticket_data">
          <select
            value={ticket.status}
            onChange={(e) => handleStatusUpdate(e.target.value)}
          >
            <option value="new">New</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="ticket_response">
          <label>Response:</label>
          <textarea
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div>
        <button onClick={handleResponse}>Update Ticket</button>
      </div>
    </div>
  );
};
