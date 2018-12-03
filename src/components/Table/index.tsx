import React from "react";

// Styled Components
import { Container } from "./styles";

// Interface
import { graphCreator } from "./tableGraph";

// Factories
import { tableFactory } from "./tableFactory";

//////////////////////////////////////////// Props

type PropsType = {
  data: any[];
};

//////////////////////////////////////////// UI Component

function Table(props: PropsType) {
  const { data } = props;
  const graphData = graphCreator(data);
  return <Container>{tableFactory(graphData)}</Container>;
}

export default Table;
