import React from "react";

const FilterPanel = () => {
  let  buttons = [
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

  return <div className="btn-group">{buttons}</div>;
};
export default FilterPanel;