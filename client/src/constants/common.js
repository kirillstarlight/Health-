export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const URL =
  process.env.NODE_ENV === "production"
    ? "/api/"
    : "http://localhost:5000/api/";