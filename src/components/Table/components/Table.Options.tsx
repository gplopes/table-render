import React from 'react';
import { FiChevronDown, FiChevronRight, FiTrash } from 'react-icons/fi';

import { IconCell, IconWrap } from '../styles';

///////////////////////////////////// Props

type PropsType = {
  showToggle: boolean;
  open?: boolean;
  toggle(): void;
  delete(): void;
};

const defaultProps: PropsType = {
  delete: () => null,
  open: false,
  showToggle: false,
  toggle: () => null
};

//////////////////////////////////// UI

function Options(props: PropsType = defaultProps) {
  const IconCollapse = props.open ? FiChevronDown : FiChevronRight;
  return (
    <IconCell>
      <IconWrap>
        <FiTrash onClick={props.delete} />
      </IconWrap>
      {props.showToggle && (
        <IconWrap>
          <IconCollapse onClick={props.toggle} />
        </IconWrap>
      )}
    </IconCell>
  );
}

export default Options;
