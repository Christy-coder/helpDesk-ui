/** @format */

import React, { useState, useEffect } from "react";
import { TicketList } from "./TicketListPage";
import { fetchTickets } from "../utils/ticketUtils";

export const AdminPanelPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { success, data, message } = await fetchTickets();
      if (success) {
        setTickets(data);
      } else {
        console.error(message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="submit-form-container">
      <div className="submit-form-card w-100">
        <a href="/" className="admin-link">Ticket Form</a>
        <h2 className="text-uppercase">Admin Panel - Ticket List</h2>
        <TicketList tickets={tickets} />
      </div>
    </div>
  );
};




