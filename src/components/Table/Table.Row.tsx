import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Row, Cell, RowSpan, RowSpanWrap } from "./styles";

import Collapse from "./Table.Collapse";

////////////////////// Props
interface Props {
  data: string[];
}

interface State {
  showChildren: boolean
}

////////////////////// UI
class TableRow extends Component<Props, State> {
  readonly state = {
    showChildren: false
  };
  toggleChildren = () => {
    this.setState(prev => ({ showChildren: !prev.showChildren }));
  }
  render() {
    const { data } = this.props;
    const { showChildren } = this.state;
    return (
      <Fragment>
        <Row>
          <Collapse toggle={this.toggleChildren} />
          {data.map((value: string, index: number) => {
            const key = `row_inner_${index}`;
            return <Cell key={key}>{value}</Cell>;
          })}
        </Row>
        {showChildren && (
          <RowSpan className="RowSpan" height={300}>
            <RowSpanWrap height={300} />
          </RowSpan>
        )}
      </Fragment>
    );
  }
}

export default TableRow;
