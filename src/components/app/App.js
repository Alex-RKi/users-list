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
          <Link className="navLink" to="/">
            <button className="btn btn-primary">LIST</button>
          </Link>

          <Link className="navLink" to="/add-new">
            <button className="btn btn-secondary">Add new user</button>
          </Link>
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
