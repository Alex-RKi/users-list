import React from "react";
import { useSelector } from "react-redux";
import "./user-table.css";
import FilterPanel from "../filter-panel/filter-panel";
import UserRow from "../user-row";

const UsersTable = () => {
  const {userList} = useSelector((state) => state);
  console.log(userList);

  const loadList = (list) => {
    return list.map((user) => {
      const { id } = user;
      return <UserRow key={id} {...user} />;
    });
  };
const empty = <tr><td className='text-center' colSpan="75%">NO DATA ...</td></tr>;
  return (
    <>
      <FilterPanel />
      <table className="mt-2">
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
        <tbody>{userList.length ? loadList(userList): empty}</tbody>
      </table>
    </>
  );
};

export default UsersTable;
