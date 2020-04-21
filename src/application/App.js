import React from "react";
import { useToggle } from "../utilities/useToggle";
import { Toggle } from "../design-system/Toggle";
import { GlobalStyles } from "../design-system/GlobalStyles";
import { Switch, Route, Link } from "react-router-dom";
import { About } from './About';
import { Users } from './Users';

function App() {
  const { on: darkModeOn, toggle: toggleDarkMode } = useToggle();
  return (
    <GlobalStyles darkModeEnabled={darkModeOn}>
      <h1 className="header">Example Application</h1>
      Dark Mode: <Toggle on={darkModeOn} onToggle={toggleDarkMode} />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </GlobalStyles>
  );
}

export default App;
