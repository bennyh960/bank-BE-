import axios from "axios";

const accountsAPI = axios.create({
  baseURL: "http://localhost:5000/api/accounts",
});
const usersAPI = axios.create({
  baseURL: "http://localhost:5000/api/users",
});
const oneUserAPI = axios.create({
  baseURL: "http://localhost:5000/api/users",
});

const serverApi = {
  accounts: accountsAPI,
  users: usersAPI,
  oneUser: oneUserAPI,
};

export default serverApi;
