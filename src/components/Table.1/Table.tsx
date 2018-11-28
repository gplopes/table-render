import React, { memo, Fragment } from "react";

import { Table, Body, Wrapper, Row, RowSpan, RowSpanWrap } from "./styles";
import Head from "./Table.Head";
import TableRow from "./Table.Row";

////////////////////// Props
interface Props {
  data: any;
  heading: string[];
  // data: {
  //   [key: string]: object;
  // };
}

const defaultProps: Props = {
  data: [],
  heading: []
};

////////////////////// UI
function TableGrid(props = defaultProps) {
  const { data } = props;
  const heading = Object.keys(data[0]);
  // console.log(data);
  // console.log(heading);
  return (
    <Wrapper>
      <Table>
        <Head data={heading} />
        <Body className="TableBody">
          {data.map((row: any, index: number) => {
            const key = `row_${index}`;
            const rowData = heading.map(k => row[k]);
            return <TableRow key={key} data={rowData} />;
          })}
        </Body>
      </Table>
    </Wrapper>
  );
}

export default memo(TableGrid);
