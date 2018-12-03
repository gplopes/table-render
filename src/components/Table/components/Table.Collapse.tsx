import React from "react";
import { FiChevronRight, FiChevronDown, FiTrash } from "react-icons/fi";

import { IconCell } from "../styles";

///////////////////////////////////// Props

type PropsType = {
  toggle(): void;
  open?: boolean;
};

const defaultProps: PropsType = {
  toggle: () => {},
  open: false
};

//////////////////////////////////// UI

function Collapse(props: PropsType = defaultProps) {
  const Icon = props.open ? FiChevronDown : FiChevronRight;
  return (
    <IconCell onClick={props.toggle}>
      <Icon />
    </IconCell>
  );
}

export default Collapse;
