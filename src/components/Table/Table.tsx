import React from "react";
import { connect } from "react-redux";

// Styled Components
import { Container } from "./styles";

// Factories
import { tableFactory } from "./tableFactory";
import { TableType } from "./types";

////////////////////// Types

type PropsType = {
  table?: TableType;
};

///////////////////////////// UI Component

function Table(props: PropsType) {
  console.log(props);
  return <Container>{props.table && tableFactory(props.table)}</Container>;
}

////////////////////////////////// Connect

const mapStateToProps = (state: any) => ({ table: state });

export default connect(mapStateToProps)(Table);
