import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./componenets/hompage/home";
import Accounts from "./componenets/accounts/accounts";
import { useEffect, useState } from "react";
import User from "./componenets/user/user";
import serverApi from "./componenets/api/api";

export default function App() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await serverApi.accounts.get();
      setData(data);
      console.log(data);
    };
    getData();
  }, [setData]);

  const goToUserByIdApp = (id) => {
    setUserId(id);
    // console.log(id);
  };

  return (
    <div>
      <Router>
        <Home />
        <Accounts accounts={data} gotToUserByIdAppProp={goToUserByIdApp} />
        <Route path={`/users/${userId}`}>
          <User id={userId} />
        </Route>
      </Router>
    </div>
  );
}
