import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AddForm = ({ user }) => {
  const formSelect = (user = {}) => {
    const options = [
      { value: "", label: "Select user role" },
      { value: "admin", label: "Admin" },
      { value: "partner", label: "Partner" },
      { value: "client", label: "Client" },
    ];
    const status = user ? user.status : "";
    const selectOpt = options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
    return (
      <select
        key={user.id}
        defaultValue={status}
        className="form-control"
        name="roles"
        id="role-select"
        required
      >
        {selectOpt}
      </select>
    );
  };

  return (
    <form className="form-group mt-2">
      <label htmlFor="role-select">Role</label>
      {formSelect(user)}

      <fieldset
        key={user ? user.fullname : "new"}
        className="d-flex flex-column form-group"
      >
        <label htmlFor="fullname">Full name</label>
        <input
          defaultValue={user ? user.fullname : ""}
          className="form-control"
          id="fullname"
          minLength="4"
          pattern="^([a-zA-Z]|[А-Яа-я])+\s([a-zA-Z]|[А-Яа-я])+\s?([a-zA-Z]|[А-Яа-я])*$"
          type="text"
          required
        ></input>

        <label htmlFor="password">Password, at least 8 symbols </label>
        <input
          defaultValue={user ? user.password : ""}
          placeholder="Letters in upper & lowercase and '!','?' symbols"
          className="form-control"
          id="password"
          minLength="8"
          pattern="[0-9!?a-zA-Z]+"
          type="text"
          required
        ></input>

        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          defaultValue={user ? user.email : ""}
          id="email"
          type="email"
          placeholder="@"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          required
        ></input>

        <label htmlFor="phone">
          Full phone number, (whitespaces, '-' & '()' can be omitted")
        </label>
        <input
          placeholder=". (...) ... .. .."
          className="form-control"
          defaultValue={user ? user.phone : ""}
          id="tel"
          type="tel"
          pattern="\+?[89]{1}[-\s]?\(?[0-9]{3}\)?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}"
          required
        ></input>
      </fieldset>
      <input className="btn btn-primary  w-100" type="submit" value="Create" />
    </form>
  );
};
export default AddForm;
