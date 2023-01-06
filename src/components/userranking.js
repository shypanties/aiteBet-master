import React from "react";

import "../styles/userranking.css";

const UserRanking = ({ username, rank, score }) => {
  return (
    <tr className="row-wrapper">
      <td className="flex-1">{rank}</td>
      <td className="flex-4">{username}</td>
      <td className="flex-1">{score}</td>
    </tr>
  );
};

export default UserRanking;
