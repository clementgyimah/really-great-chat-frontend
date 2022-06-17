export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://really-great-chat-backend.herokuapp.com"
    : "http://localhost:5000";
