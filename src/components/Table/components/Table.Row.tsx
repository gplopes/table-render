import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

// Store
import { removeItem } from "../store/tableStore";

// Styled
import { Row, Cell, IconCell } from "../styles";

// Table Items
import Collapse from "./Table.Collapse";
import TableChild from "./Table.Child";

///////////////////////////////// Props

type PropsType = {
  _id?: string | null;
  data: any;
  removeRow(id: string): void
  hasChildren: boolean;
};

const defaultProps: PropsType = {
  removeRow: () => {},
  data: { data: {}, children: null },
  hasChildren: false
};

//////////////////////////////////////////// State

type StateType = {
  showChildren: boolean;
};

////////////////////////////////////////////// UI Component

class TableRow extends Component<PropsType, StateType> {
  static defaultProps = defaultProps;
  readonly state = {
    showChildren: false
  };

  toggleHandler = () => {
    this.setState(prev => ({ showChildren: !prev.showChildren }));
  };
  clickHandler = () => {
    const { _id, removeRow } = this.props;
    if (_id && removeRow) removeRow(_id);
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
    return hasChildren ? <Collapse {...collapseProps} /> : <IconCell />;
  };

  render() {
    const { data, children } = this.props;
    const { showChildren } = this.state;
    const dataValues = Object.keys(data).map((key: string) => data[key]);
    return (
      <Fragment>
        <Row onClick={this.clickHandler}>
          {this._renderToggler()}
          {dataValues.map(this._renderCell)}
        </Row>
        {showChildren && <TableChild children={children} />}
      </Fragment>
    );
  }
}

////////////////////////////////// Connect

const mapDispatchToProps = (dispatch: any) => ({
  removeRow(id: string) {
    dispatch(removeItem(id));
  }
});

export default connect(null, mapDispatchToProps)(TableRow);
