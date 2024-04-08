/** @format */

import React, { useState, useEffect } from "react";
import { TicketForm } from "./TicketForm";
import { submitTicket, fetchTickets } from "../utils/ticketUtils";
import "./Styles.css";

export const SubmitTicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [, setTickets] = useState([]);
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await submitTicket(formData);
    setSubmitMessage(message);
    if (success) {
      setFormData({ name: "", email: "", description: "" });
      const { success: fetchSuccess, data, message: fetchMessage } = await fetchTickets();
      if (fetchSuccess) {
        setTickets(data);
      } else {
        console.error(fetchMessage);
      }
    }
  };

  return (
    <div className="submit-form-container">
      <div className="submit-form-card">
        <a href="/admin" className="admin-link">Ticket Admin</a>
        <h2 className="text-uppercase">Submit Support Ticket</h2>
        <TicketForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          submitMessage={submitMessage} 
        />
      </div>
    </div>
  );
};
