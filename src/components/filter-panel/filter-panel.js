import React from "react";
import "./filter-panel.css";

const FilterPanel = () => {
  let buttons = [
    { name: "all", label: "All" },
    { name: "admin", label: "Admin" },
    { name: "partner", label: "Partner" },
    { name: "client", label: "Client" },
  ];

  const filter = "all";
  buttons = buttons.map(({ name, label }) => {
    const active = filter === name;
    const classString = active ? "btn btn-primary" : "btn-outline-secondary";
    return (
      <button key={name} type="button" className={`btn ${classString}`}>
        {label}
      </button>
    );
  });

  return (
    <nav className='panel'>
      <div className="btn-group">{buttons}</div>
      <input
        type="text"
        className="form-control"
        palceholder="Статус, телефон или почта"
      ></input>
    </nav>
  );
};
export default FilterPanel;

