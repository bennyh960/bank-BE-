import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ name, id, active, cash, credit, accountId, goToUserByIdAccountProp }) {
  const colorIfActive = active ? "black" : "red";
  const goToUserById = (id) => {
    // console.log(id);
    goToUserByIdAccountProp(id);
  };
  return (
    <tr style={{ color: colorIfActive }}>
      <td>{name}</td>
      <td>{accountId}</td>
      <td>{id}</td>
      {active ? <td>Yes</td> : <td>No</td>}
      {cash < 0 ? (
        <td style={{ color: "red" }}>{cash}</td>
      ) : cash === 0 ? (
        <td>{cash}</td>
      ) : (
        <td style={{ color: "green" }}>{cash}</td>
      )}
      <td>{credit}</td>
      <td>
        <Link to={`/users/${id}`}>
          <button className="ui active button go-to-btn" onClick={(e) => goToUserById(id)}>
            <i className="user icon"></i>
            Watch
          </button>
        </Link>
      </td>
    </tr>
  );
}
