// ======= Imports ======= //
import jwtDecode from "jwt-decode";

// ======= Variables ======= //

// ======= Code ======= //
function getCredentials(token = "") {
  localStorage.setItem("recipeBlog23Token", token);
  const decodedToken = token
    ? { isAuth: true, jwtToken: token, user: jwtDecode(token) }
    : { isAuth: false, jwtToken: "", user: {} };
  return decodedToken;
}

// ======= Exports ======= //
export default getCredentials;
