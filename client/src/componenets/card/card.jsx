import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div>Account Number: {props.accountId}</div>
      <div>Name: {props.name}</div>
      <div>Passport ID: {props.id}</div>
      <div>Cash:{props.cash}</div>
      <div>Credit:{props.credit}</div>
    </div>
  );
}
