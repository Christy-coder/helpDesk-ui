import React from "react";
import "./Styles.css";

export const TicketForm = ({ formData, handleChange, handleSubmit, submitMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="fields">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="fields">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          placeholder="Provide Description Of Your Ticket"
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit Ticket</button>
      {submitMessage && (
        <div className={`msg ${submitMessage.includes("successfully") ? "success" : "failed"}`}>
          {submitMessage}
        </div>
      )}
    </form>
  );
};
