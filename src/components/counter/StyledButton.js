import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(prop) =>
    prop.red ? "#c81d25" : prop.green ? "#4c956c" : null};
  padding: 1em 2em;
  border-radius: 15px;
  border: none;
  margin: 1em;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;
