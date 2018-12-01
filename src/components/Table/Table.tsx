import React, {
  memo,
  Fragment,
  ReactNode,
  ReactChild,
  ReactElement
} from "react";

import { Table, Body, Wrapper, Row, RowSpan, RowSpanWrap } from "./styles";
import Head from "./Table.Head";

////////////////////// Props
interface Props {
  children?: React.ReactNode;
  heading: string[];
}

const defaultProps: Props = {
  heading: []
};

////////////////////// UI
function TableGrid(props = defaultProps) {
  const { heading, children } = props;
  return (
    <Wrapper>
      <Table>
        <Head data={heading} />
        <Body className="TableBody">
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, { heading })
          )}
        </Body>
      </Table>
    </Wrapper>
  );
}

export default memo(TableGrid);
