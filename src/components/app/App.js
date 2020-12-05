import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "../add-form";
import UserTable from "../user-table";

function App() {
  return (
    <div className="jumbotron h-auto">
      <Router>
        <nav className="mb-5">
          <Link className="btn btn-primary" to="/">
            LIST
          </Link>
          <Link className="btn btn-secondary" to="/add-new">
            Add new user
          </Link>
        </nav>

        <Switch>
          <Route path="/" exact component={UserTable} />
          <Route path="/add-new" component={AddForm} />
          <Route
            path="/user/:id"
            render={({match, location}) => {
              
              const { id } = match.params;
              const { user } = location;
              return <AddForm id={id} user={user}/>;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


