import React from "react";
import { useToggle } from "../utilities/useToggle";
import { Toggle } from "../design-system/Toggle";
import { GlobalStyles} from "../design-system/GlobalStyles"

function App() {
  const { on: darkModeOn, toggle: toggleDarkMode } = useToggle();
  return (
    <GlobalStyles darkModeEnabled={darkModeOn}>
      <h1 className="header">Example Application</h1>
      Dark Mode: <Toggle on={darkModeOn} onToggle={toggleDarkMode} />
    </GlobalStyles>
  );
}

export default App;
