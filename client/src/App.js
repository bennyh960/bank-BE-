import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./componenets/hompage/home";
import Accounts from "./componenets/accounts/accounts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/accounts");
      setData(data);
      console.log(data);
    };
    getData();
  }, [setData]);

  return (
    <div>
      <Router>
        <Home />
        <Accounts accounts={data} />
      </Router>
    </div>
  );
}
