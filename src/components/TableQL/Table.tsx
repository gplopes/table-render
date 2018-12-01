import React, { memo, Fragment, Children } from "react";

import { Table, Body, Container, Row, RowSpan, RowSpanWrap } from "./styles";
import Head from "./Table.Head";
import TableRow from "./Table.Row";

//////////////////////////////////////////////////////////////////// Schema

interface Schema {
  headers(data: object): string[];
  row(): {
    data: object;
    children?: {
      data: object,
      schema: Schema
    };
  };
}

/////////////////////////////////////////////////////////////////// Props

interface Props {
  data: any[];
  schema: Schema;
}

const defaultProps: Props = {
  data: [],
  schema: {
    headers: () => [],
    row: () => ({
      data: {}
    })
  }
};

//////////////////////////////////////////////////////////// Helpers

const getData = (data: any, schema: any) => {
  const headers = schema.headers(data);
  const rows = data ? data.map(schema.row) : null;
  return { headers, rows };
};


///////////////////////////////////////////////////////////// Render

const renderRows = (rows: object[]) => {
  return (
    rows &&
    rows.map((row: any, key: number) => {

      const childData = row.children ? getData(row.children.data, row.children.schema) : null;
      const hasChildren = !!row.children && !!row.children.data;
      console.log("childrenRows", row.data, hasChildren);
      return (
        <TableRow key={key} data={row.data} hasChildren={hasChildren}>
          {row.children && childData && (
            <Table>
              <Head data={childData.headers} />
              <Body>{childData.rows && renderRows(childData.rows)}</Body>
            </Table>
          )}
        </TableRow>
      );
    })
  );
};

//////////////////////////////////////////////////////////// UI

function TableGrid(props = defaultProps) {
  const { data, schema } = props;
  const { headers, rows } = getData(data, schema);
  return (
    <Container>
      <Table>
        <Head data={headers} />
        <Body>{renderRows(rows)}</Body>
      </Table>
    </Container>
  );
}
export default TableGrid;
