import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Card from "../card/card";
// import User from "../user/user";
import "./accounts.css";

export default function Accounts({ accounts, gotToUserByIdAppProp }) {
  const drawAllAccounts = () => {
    return accounts.map((a) => {
      return (
        <Fragment key={a.accountId}>
          <Card
            name={a.name}
            id={a.id}
            cash={a.cash}
            credit={a.credit}
            accountId={a.accountId}
            active={a.isActiveAccount}
            goToUserByIdAccountProp={gotToUserByIdAppProp}
          />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <Route exact path={"/accounts"}>
        <h1>Accounts</h1>
        <table className="ui single line table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Account ID</th>
              <th>Passport ID</th>
              <th>Active User</th>
              <th>Cash</th>
              <th>Credit</th>
              <th>Go To</th>
            </tr>
          </thead>
          <tbody>{drawAllAccounts()}</tbody>
        </table>
      </Route>
    </div>
  );
}
