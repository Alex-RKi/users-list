import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./user-table.css";
import FilterPanel from "../filter-panel/filter-panel";
import UserRow from "../user-row";

const UsersTable = () => {
  const { userList } = useSelector((state) => state);

  const [filterName, saveFilter] = useState("all");
  const [searchText, saveSearchText] = useState("");

  const loadList = (list) => {
    return list.map((user) => {
      const { id } = user;
      return <UserRow key={id} {...user} />;
    });
  };

  const filterByText = (text, list) => {
    if (text.lenght < 1) return userList;
    return list.filter((user) => {
      const nameCheck = checkObject(user, "fullname", text);
      const emailCheck = checkObject(user, "email", text);
      const phoneCheck = checkObject(user, "phone", text);
      return nameCheck || emailCheck || phoneCheck;
    });
  };
  const checkObject = (obj, property, query) => {
    return obj[property].toLowerCase().indexOf(query.toLowerCase()) > -1;
  };
  const filterByRole = (role, list) => {
    if (role === "all") return list;
    return list.filter((user) => user.status === role);
  };

  const filteredList = filterByRole(
    filterName,
    filterByText(searchText, userList)
  );

  const onFilter = (btnName) => {
    saveFilter(btnName);
  };
  const onSearch = (text) => {
    saveSearchText(text);
  };

  const empty = (
    <tr>
      <td className="text-center" colSpan="75%">
        NO DATA ...
      </td>
    </tr>
  );
  return (
    <div >
      <FilterPanel
        onFilter={onFilter}
        onSearch={onSearch}
        filterName={filterName}
      />
      <table className="mt-1">
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
        <tbody>{userList.length ? loadList(filteredList) : empty}</tbody>
      </table>
    </div>
  );
};

export default UsersTable;
