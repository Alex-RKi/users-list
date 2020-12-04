import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "./users-list";
function App() {

  return (
    <div className="jumbotron">
      
      <UsersList />
    </div>
  );
}

export default App;
