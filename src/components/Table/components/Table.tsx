import React from "react";
import { connect } from "react-redux";

// Styled Components
import { Container } from "../styles";

// Factories
import { tableFactory } from "../tableFactory";
import { StoreType, TableType } from "../types";

////////////////////// Types

type PropsType = {
  table?: TableType;
};

///////////////////////////// UI Component

function Table(props: PropsType) {
  return <Container>{props.table && tableFactory(props.table)}</Container>;
}

////////////////////////////////// Connect

const mapStateToProps = (state: StoreType) => ({ table: state });

export default connect(mapStateToProps)(Table);
