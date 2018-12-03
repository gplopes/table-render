import React, { ReactNode } from "react";
import randomColor from "randomcolor";

import { Row, CellSpan, LineIndicator } from "../styles";

///////////////////////////////////// Props

type Props = {
  children: ReactNode;
};

///////////////////////////////////// Component

function TableChild(props: Props) {
  const color = randomColor({ luminosity: "dark" });
  return (
    <Row>
      <LineIndicator color={color} />
      <CellSpan className="CellSpan" colSpan={10}>
        {props.children}
      </CellSpan>
    </Row>
  );
}

export default TableChild;
