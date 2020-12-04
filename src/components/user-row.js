import React from "react";

const UserRow = (user) => {
  const { status, email, phone, fullName, password, added, altered } = user;
  console.log("--------------");

  return (
    <div>
      <span>{status}</span>|<span>{fullName[0]}</span>|<span>{password}</span>|
      <span>{added}</span>|<span>{altered}</span>|
      <span>{email}</span>|<span>{phone}</span>|
    </div>
  );
};

export default UserRow;

//</span>{fullName[0]}<span>
