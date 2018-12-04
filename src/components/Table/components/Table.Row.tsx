import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Store
import { removeItem } from '../store/tableStore';

// Styled
import { Cell, IconCell, Row } from '../styles';

// Table Items
import TableChild from './Table.Child';
import Options from './Table.Options';

///////////////////////////////// Props

type PropsType = {
  _id?: string | null;
  data: any;
  hasChildren: boolean;
  removeRow(id: string): void;
};

const defaultProps: PropsType = {
  data: { data: {}, children: null },
  hasChildren: false,
  removeRow: () => null
};

//////////////////////////////////////////// State

type StateType = {
  showChildren: boolean;
};

////////////////////////////////////////////// UI Component

class TableRow extends Component<PropsType, StateType> {
  public static defaultProps = defaultProps;
  public readonly state = {
    showChildren: false
  };

  public toggleHandler = () => {
    this.setState(prev => ({ showChildren: !prev.showChildren }));
  };

  public deleteHandler = () => {
    const { _id, removeRow } = this.props;
    if (_id && removeRow) {
      this.setState({ showChildren: false }, () => removeRow(_id));
    }
  };

  public _renderCell(value: string, index: number) {
    const key = `row_inner_${index}`;
    return <Cell key={key}>{value}</Cell>;
  }

  public render() {
    const { data, children } = this.props;
    const { showChildren } = this.state;
    const dataValues = Object.keys(data).map((key: string) => data[key]);

    const optionProps = {
      delete: this.deleteHandler,
      open: this.state.showChildren,
      showToggle: this.props.hasChildren,
      toggle: this.toggleHandler
    };
    return (
      <Fragment>
        <Row>
          <Options {...optionProps} />
          {dataValues.map(this._renderCell)}
        </Row>
        {showChildren && children && <TableChild children={children} />}
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

export default connect(
  null,
  mapDispatchToProps
)(TableRow);
