import axios from "axios";

export const fetchTickets = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tickets`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return { success: false, message: "Error fetching tickets! Try again." };
  }
};
