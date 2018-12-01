import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Row, Cell, RowSpan, RowSpanWrap } from "./styles";

import Collapse from "./Table.Collapse";

////////////////////// Props
interface Props {
  data: string[];
  hasChildren: boolean;
}

const defaultProps: Props = {
  data: [],
  hasChildren: false
};

interface State {
  showChildren: boolean;
}

////////////////////// UI
class TableRow extends Component<Props, State> {
  static defaultProps = defaultProps;
  readonly state = {
    showChildren: false
  };
  toggleChildren = () => {
    this.setState(prev => ({ showChildren: !prev.showChildren }));
  };
  render() {
    const { data, children, hasChildren } = this.props;
    const { showChildren } = this.state;
    console.log(this.props);
    const row = Object.keys(data).map((key: any) => data[key]);
    return (
      <Fragment>
        <Row>
          {hasChildren ? <Collapse toggle={this.toggleChildren} /> : <Cell/>}
          {row.map((value: string, index: number) => {
            const key = `row_inner_${index}`;
            return <Cell key={key}>{value}</Cell>;
          })}
        </Row>
        {showChildren && (
          <RowSpan className="RowSpan" height={300}>
            <RowSpanWrap height={300}>{children}</RowSpanWrap>
          </RowSpan>
        )}
      </Fragment>
    );
  }
}

export default TableRow;
