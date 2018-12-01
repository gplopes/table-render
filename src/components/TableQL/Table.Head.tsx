import React from "react";
import styled from "styled-components";

import { Row, Cell, Head } from "./styles";

////////////////////// Props
interface Props {
  data: string[];
}

const defaultProps: Props = {
  data: []
};

////////////////////// UI
function TableHead(props: Props = defaultProps) {
  const { data } = props;
  return (
    <Head className="TableHead">
      <Row>
        <Cell />
        {data.map(title => (
          <Cell key={title}>{title}</Cell>
        ))}
      </Row>
    </Head>
  );
}

export default TableHead;
