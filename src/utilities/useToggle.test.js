import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { useToggle } from "./useToggle";

it("is off by default", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";

  const TestComponent = () => {
    const { on } = useToggle();

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
      </div>
    );
  };

  const { getByText } = render(<TestComponent />);
  expect(getByText(offMessage)).toBeInTheDocument();
});

it("toggle changes on state", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";
  const toggleMessage = "Toggle";

  const TestComponent = () => {
    const { on, toggle } = useToggle();

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
        <button onClick={toggle}>{toggleMessage}</button>
      </div>
    );
  };

  const { getByText } = render(<TestComponent />);
  fireEvent.click(getByText(toggleMessage));
  expect(getByText(onMessage)).toBeInTheDocument();
});

it("setOn changes on state from off to on", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";
  const setOnMessage = "Set On";

  const TestComponent = () => {
    const { on, setOn } = useToggle();

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
        <button onClick={setOn}>{setOnMessage}</button>
      </div>
    );
  };

  const { getByText } = render(<TestComponent />);
  fireEvent.click(getByText(setOnMessage));
  expect(getByText(onMessage)).toBeInTheDocument();
});

it("supports initial on state", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";

  const TestComponent = () => {
    const { on } = useToggle(true);

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
      </div>
    );
  };

  const { getByText } = render(<TestComponent />);
  expect(getByText(onMessage)).toBeInTheDocument();
});

it("setOff changes on state from on to off", () => {
  const onMessage = "Is On";
  const offMessage = "Is Off";
  const setOffMessage = "Set Off";

  const TestComponent = () => {
    const { on, setOff } = useToggle(true);

    return (
      <div>
        <h2>{on ? onMessage : offMessage}</h2>
        <button onClick={setOff}>{setOffMessage}</button>
      </div>
    );
  };

  const { getByText } = render(<TestComponent />);
  fireEvent.click(getByText(setOffMessage));
  expect(getByText(offMessage)).toBeInTheDocument();
});
