import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersDB from "../../usersDB";
import FilterPanel from "../filter-panel/filter-panel";
import "./user-table.css";
import UserRow from "../user-row";

const UsersTable = () => {
  const userDb = new UsersDB();

  //const { loading } = useSelector(state = > state.loading)
  const [data, setData] = useState([]);

  useEffect(() => {
    userDb
      .getData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
    return <div className="d-flex flex-column">{loadList(data)}</div>;
  }, []);

  const loadList = (list) => {
    return list.map((user) => {
      const { id } = user;
      return <UserRow key={id} {...user} />;
    });
  };

  return (
    <>
    <FilterPanel />
      <table className='mt-2'>
        <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Pass</th>
            <th scope="col">Added</th>
            <th scope="col">Last changed</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>{loadList(data)}</tbody>
      </table>
    </>
  );
};

export default UsersTable;
