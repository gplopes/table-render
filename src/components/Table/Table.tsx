import React, { memo, Fragment } from "react";

import { Table, Body, Wrapper, Row, RowSpan, RowSpanWrap } from "./styles";
import Head from "./Table.Head";
import TableRow from "./Table.Row";

////////////////////// Props
interface Props {
  //data: any;
  children?: React.ReactNode;
  heading: string[];
  // data: {
  //   [key: string]: object;
  // };
}

const defaultProps: Props = {
  //data: [],
  heading: []
};

////////////////////// UI
function TableGrid(props = defaultProps) {
  const { heading, children } = props;
  return (
    <Wrapper>
      <Table>
        <Head data={heading} />
        <Body className="TableBody">{children}</Body>
      </Table>
    </Wrapper>
  );
}

export default memo(TableGrid);
