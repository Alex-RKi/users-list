import React from "react";
import { Link } from "react-router-dom";

const UserRow = (user) => {
  const { id, status, email, phone, fullname, password, added, altered } = user;
  return (
    <tr>
      <th className="action-cell">
        <button className="btn btn-warning">DEL</button>
      </th>
      <td>{status}</td>
      <td>
        <Link to={{ pathname: `/user/${id}`, user }}>{fullname}</Link>
      </td>
      <td>{password}</td>
      <td>{added}</td>
      <td>{altered}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default UserRow;
