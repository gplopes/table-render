import React from "react";
import styled from "styled-components";

import { Cell } from "./styles";

////////////////////// Style
const Chevron = styled.div`
  border: 1px solid;
  display: flex;
  width: 25px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:after {
    content: "•";
    display: block;
  }
`;

////////////////////// UI
function Collapse(props: any) {
  return (
    <Cell>
      <Chevron onClick={props.toggle} />
    </Cell>
  );
}

export default Collapse;
