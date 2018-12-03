import React from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

import { Cell } from "../styles";

///////////////////////////////////// Props

type Props = {
  toggle(): void;
  open?: boolean;
};

const defaultProps: Props = {
  toggle: () => {},
  open: false
};

//////////////////////////////////// UI

function Collapse(props: Props = defaultProps) {
  const Icon = props.open ? FiChevronDown : FiChevronRight;
  return (
    <Cell>
      <Icon onClick={props.toggle} />
    </Cell>
  );
}

export default Collapse;
