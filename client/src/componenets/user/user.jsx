import React from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import serverApi from "../api/api";

export default function User({ id }) {
  useEffect(() => {
    const getUserData = async () => {
      //   serverApi.oneUser.defaults.baseURL += `/${id}`;
      //   const { data } = await serverApi.oneUser.get();
      const { data } = await serverApi.oneUser.get("", {
        params: { id },
      });
      //   console.log(data);
      //   console.log(serverApi.oneUser.defaults.baseURL);
      //   console.log(id, "from user component");
      //   serverApi.oneUser.defaults.baseURL -= `/${id}/${id}`;
    };
    getUserData();
  }, []);

  return (
    <div>
      <Route path={`/users/${id}`} exact>
        <h1>User</h1>
      </Route>
    </div>
  );
}
