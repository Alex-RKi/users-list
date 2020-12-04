import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersDB from "../usersDB";
import FilterPanel from "./filter-panel";

import UserRow from "./user-row";

const UsersList = () => {
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

  //console.log(data);

  const loadList = (list) => {
    return list.map((user) => {
      const { id, ...props } = user;
      console.log("id is " + id);
      return <UserRow key={id} {...props} />;
    });
  };

  return (
    <>
      <nav>
        <FilterPanel />
        <input type="text" palceholder="Статус, телефон или почта"></input>
      </nav>

      <div className="d-flex flex-column">{loadList(data)}</div>
    </>
  );
};

export default UsersList;
