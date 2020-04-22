import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primary || "green"};
  color: ${(props) => props.theme.text || "white"};
`;

export const Toggle = ({ on, onToggle }) => (
  <StyledButton onClick={onToggle}>
    {" "}
    {on ? "Turn Off" : "Turn On"}{" "}
  </StyledButton>
);
