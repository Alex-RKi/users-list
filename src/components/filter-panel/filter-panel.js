import React, { useState } from "react";
import "./filter-panel.css";

const FilterPanel = ({ onFilter, onSearch, filterName }) => {
  const [text, saveText] = useState("");
  let buttons = [
    { name: "all", label: "All" },
    { name: "admin", label: "Admin" },
    { name: "partner", label: "Partner" },
    { name: "client", label: "Client" },
  ];
  const onText = (e) => {
    const string = e.target.value;
    saveText(string);
    onSearch(string);
  };
  const filter = filterName;
  buttons = buttons.map(({ name, label }) => {
    const active = filter === name;
    const classString = active ? "btn btn-primary" : "btn-outline-secondary";
    return (
      <button
        key={name}
        onClick={() => onFilter(name)}
        type="button"
        className={`btn ${classString}`}
      >
        {label}
      </button>
    );
  });

  return (
    <nav className="panel">
      <div className="btn-group">{buttons}</div>
      <input
        onChange={onText}
        value={text}
        type="text"
        className="form-control"
        placeholder="Name, @email or phone number"
      ></input>
    </nav>
  );
};
export default FilterPanel;
