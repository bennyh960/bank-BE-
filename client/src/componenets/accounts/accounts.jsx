import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Card from "../card/card";
import "./accounts.css";

export default function Accounts({ accounts }) {
  const drawAllAccounts = () => {
    return accounts.map((a) => {
      return (
        <Fragment key={a.accountId}>
          <Card name={a.name} id={a.id} cash={a.cash} credit={a.credit} accountId={a.accountId} />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <Route exact path={"/accounts"}>
        <h1>Accounts</h1>
        <div className="accounts-cards-container">{drawAllAccounts()}</div>
      </Route>
    </div>
  );
}
