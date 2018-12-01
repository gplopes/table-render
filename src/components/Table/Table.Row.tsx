import React, { Component, Fragment, ReactNode } from "react";
import { Row, Cell, RowSpan, RowSpanWrap } from "./styles";

import Collapse from "./Table.Collapse";

////////////////////// Props
interface Props {
  data: string[];
  heading: string[];
}

interface State {
  showChildren: boolean;
}

////////////////////// UI: TableRowSpan
class TableRowSpan extends Component<{}, {}> {
  span: ReactNode;
  componentDidMount() {
    console.log('this.node', this.span);
  }
  render() {
    const { children } = this.props;
    return (
      <RowSpan className="RowSpan" height={300}>
        <RowSpanWrap height={300} ref={(node: ReactNode) => (this.span = node)}>
          {React.Children.only(children)}
        </RowSpanWrap>
      </RowSpan>
    );
  }
}

////////////////////// UI: TableRow
class TableRow extends Component<Props, State> {
  readonly state = {
    showChildren: false
  };
  childrenToggler = () => {
    this.setState(prev => ({ showChildren: !prev.showChildren }));
  };
  _renderRow() {
    // Only Values Necessary Items
    const { data, heading } = this.props;
    const values = heading.map((key: any) => data[key]);
    return (
      <Row>
        <Collapse toggle={this.childrenToggler} />
        {values.map((value: string, index: number) => {
          const key = `row_inner_${index}`;
          return <Cell key={key}>{value}</Cell>;
        })}
      </Row>
    );
  }
  _renderSpanRow() {
    const { children } = this.props;
    return <TableRowSpan>{children}</TableRowSpan>;
  }
  render() {
    console.log("props", this.props);
    const { showChildren } = this.state;
    return (
      <Fragment>
        {this._renderRow()}
        {showChildren && this._renderSpanRow()}
      </Fragment>
    );
  }
}

export default TableRow;
