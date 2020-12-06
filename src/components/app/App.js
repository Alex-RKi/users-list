import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddForm from "../add-form";
import UserTable from "../user-table";
import "./app.css";

function App() {
  return (
    <div className="appBody">
      <Router>
        <nav className="head">
          <button className="btn btn-primary">
            <Link className="navLink" to="/">
              LIST
            </Link>
          </button>
          <button className="btn btn-secondary">
            <Link className="navLink" to="/add-new">
              Add new user
            </Link>
          </button>
        </nav>

        <Switch>
          <Route path="/" exact component={UserTable} />
          <Route path="/add-new" component={AddForm} />
          <Route
            path="/user/:id"
            render={({ match, location }) => {
              const { id } = match.params;
              const { user } = location;
              return <AddForm id={id} user={user} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
