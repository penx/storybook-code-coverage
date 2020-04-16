// from https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks

import React from "react";

export default () => {
  const [on, setOnState] = React.useState(false);

  const toggle = () => setOnState((o) => !o);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);

  return { on, toggle, setOn, setOff };
};
