import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../../actions";
import { Link } from "react-router-dom";

const UserRow = (user) => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state);
  const { id, status, email, phone, fullname, password, added, altered } = user;

  const onDelete = () => {
    dispatch(deleteUserAction(id, userList));
  };

  return (
    <tr>
      <th className="action-cell">
        <button onClick={onDelete} className="btn btn-warning">
          DEL
        </button>
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
