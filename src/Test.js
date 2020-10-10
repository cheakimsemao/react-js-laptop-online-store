import React from "react";
import ReactDOM from "react-dom";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
function User({ name }) {
  return <div>{name}</div>;
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function QueryScreen() {
  let query = useQuery();
  return (
    <div>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/account?name=foo">Foo User</Link>
          </li>
          <li>
            <Link to="/account?name=bar">Bar User</Link>
          </li>
          <li>
            <Link to="/account?name=baz">Baz User</Link>
          </li>
        </ul>
        <User name={query.get("name")} />
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <QueryScreen />
    </Router>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);