import axios from "axios";

export const fetchTicketDetail = async (ticketId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return { success: false, message: "Error fetching ticket! Try again." };
  }
};

export const updateTicketStatus = async (ticketId, status) => {
  try {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}`,
      { status }
    );
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error updating status:", error);
    return { success: false, message: "Error updating status! Try again." };
  }
};

export const addResponse = async (ticketId, responseText) => {
  try {
    // Code to send email should be added here
    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}/response`,
      { response: responseText }
    );
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error adding response:", error);
    return { success: false, message: "Error adding response! Try again." };
  }
};

export const deleteTicket = async (ticketId) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/tickets/${ticketId}`
    );
    return { success: true, message: "Ticket deleted successfully." };
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return { success: false, message: "Error deleting ticket! Try again." };
  }
};
