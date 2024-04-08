/** @format */
import React, { useState, useEffect } from "react";
import { TicketDetail } from "./TicketDetail";
import { useParams } from "react-router-dom";
import { TicketActions } from "./TicketActions";
import { fetchTicketDetail, updateTicketStatus, addResponse } from "../utils/ticketDetailUtils";

export const TicketDetailPage = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { success, data, message } = await fetchTicketDetail(ticketId);
      if (success) {
        setTicket(data);
      } else {
        console.error(message);
      }
    };
    fetchData();
  }, [ticketId]);

  const handleStatusUpdate = async (status) => {
    const { success, data, message } = await updateTicketStatus(ticketId, status);
    if (success) {
      setTicket(data);
    } else {
      console.error(message);
    }
  };

  const handleResponse = async () => {
    alert("Would normally send email here!");
    const { success, data, message } = await addResponse(ticketId, responseText);
    if (success) {
      setTicket(data);
    } else {
      console.error(message);
    }
  };

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="submit-form-container">
      <div className="submit-form-card">
        <a href="/" className="admin-link">Ticket Form</a> &nbsp;|&nbsp; 
        <a href="/admin" className="admin-link">Ticket List</a>
        <div className="ticket_details">
          <h2 className="text-uppercase">Ticket Detail</h2>
          <TicketDetail ticket={ticket} />
          <TicketActions
            ticket={ticket}
            handleStatusUpdate={handleStatusUpdate}
            responseText={responseText}
            setResponseText={setResponseText}
            handleResponse={handleResponse}
          />
        </div>
      </div>
    </div>
  );
};
