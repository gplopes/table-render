import React from "react";

// Components
import TableHead from "./components/Table.Head";
import TableRow from "./components/Table.Row";

// Styled Components
import { Caption } from "./styles";

// Types
import { TableType, RowType } from'./types';

///////////////////////////////////////////////////////////// Create Rows

function rowsFactory(rows: RowType[]) {
  return (
    rows &&
    rows.map((row: RowType, key: number) => {
      const childData = row.children;
      const id = `row__${key}`;
      const hasChildren = !!childData && childData.rows.length > 0;
      return (
        <TableRow key={id} data={row.data} hasChildren={hasChildren}>
          {hasChildren && childData && tableFactory(childData)}
        </TableRow>
      );
    })
  );
}

//////////////////////////////////////////////////////////// Create Table

export function tableFactory({ headers, rows, title, childTable }: TableType) {
  return (
    <table>
      {title && <Caption>{title}</Caption>}
      <tbody>
        {headers && <TableHead data={headers} />}
        {rows && rowsFactory(rows)}
        {childTable}
      </tbody>
    </table>
  );
}
