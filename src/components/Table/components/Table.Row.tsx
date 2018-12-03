import React, { Component, Fragment } from "react";
import { Row, Cell } from "../styles";

import Collapse from "./Table.Collapse";
import TableChild from "./Table.Child";

import { RowType } from "../types";

//////////////////////////////////////////// Props

type PropsType = {
  data: any;
  hasChildren: boolean;
};

const defaultProps: PropsType = {
  data: { data: {}, children: null },
  hasChildren: false
};

//////////////////////////////////////////// State

type StateType = {
  showChildren: boolean;
};

//////////////////////////////////////////// UI Component

class TableRow extends Component<PropsType, StateType> {
  static defaultProps = defaultProps;
  readonly state = {
    showChildren: false
  };

  toggleHandler = () => {
    this.setState(prev => ({ showChildren: !prev.showChildren }));
  };

  _renderCell(value: string, index: number) {
    const key = `row_inner_${index}`;
    return <Cell key={key}>{value}</Cell>;
  }

  _renderToggler = () => {
    const { hasChildren } = this.props;
    const collapseProps = {
      toggle: this.toggleHandler,
      open: this.state.showChildren
    };
    return !hasChildren ? <Collapse {...collapseProps} /> : <Cell />;
  };

  render() {
    const { data, children } = this.props;
    const { showChildren } = this.state;
    const dataValues = Object.keys(data).map((key: string) => data[key]);
    return (
      <Fragment>
        <Row>
          {this._renderToggler()}
          {dataValues.map(this._renderCell)}
        </Row>
        {showChildren && <TableChild children={children} />}
      </Fragment>
    );
  }
}

export default TableRow;
