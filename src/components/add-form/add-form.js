import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, updateUserAction } from "../../actions";
import { useHistory } from "react-router-dom";
import createTemplate from "../../utils";
import "./add-form.css";

const AddForm = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userList } = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const btnText = user ? "UPDATE USER" : "ADD";

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
  const saveUserData = (e) => {
    e.preventDefault();
    const newUser = createTemplate(e.target);
    if (user) {
      newUser.id = user.id;
      newUser.added = user.added;
      dispatch(updateUserAction(newUser, userList));
      setMessage(
        <div className="alert alert-success text-center mt-2">User updated</div>
      );
      history.push("/add-new");
      //setTimeout(() => history.goBack(), 1000);
    } else {
      dispatch(addUserAction(newUser, userList));
      setMessage(
        <div className="alert alert-primary text-center mt-2 w-100">
          User added to list
        </div>
      );
      setTimeout(() => history.push("/"), 1000);
    }
  };

  return (
    <form className="form-group mt-2" onSubmit={saveUserData}>
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
          placeholder="Letters in upper & lowercase and ! ? symbols"
          className="form-control"
          id="password"
          pattern="[0-9!?a-zA-Z]{8,}"
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
          Full phone number, whitespaces, '-' & '()' can be omitted
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
      <input className="btn btn-primary  w-100" type="submit" value={btnText} />
      {message}
    </form>
  );
};
export default AddForm;
