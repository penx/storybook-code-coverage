import React from "react";
import { useToggle } from "../utilities/useToggle";
import { Toggle } from "../design-system/Toggle";
import { GlobalStyles } from "../design-system/GlobalStyles";
import { Switch, Route, Link } from "react-router-dom";
import { About } from "./About";

const Users = React.lazy(() => import('./Users'));

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
            {darkModeOn && (
              <li>
                <Link to="/secret">Hidden Link</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <h1>Home</h1>
            <p>Home page</p>
          </Route>
          {darkModeOn && (
            <Route path="/secret">
              <DarkModePage />
            </Route>
          )}
        </Switch>
      </div>
    </GlobalStyles>
  );
}

const DarkModePage = () => (
  <>
    <h1>Hidden Page</h1>
    <p>This route is only available in dark mode</p>
  </>
);

export default App;
