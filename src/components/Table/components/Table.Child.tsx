import randomColor from 'randomcolor';
import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { CellSpan, Container, LineIndicator, Row } from '../styles';
import { StoreType } from '../types';

///////////////////////////////////// Props

type PropsType = {
  children: ReactNode;
  tableSize: number;
};

///////////////////////////////////// UI Component

function TableChild(props: PropsType) {
  const color = randomColor({ luminosity: 'dark' });
  return (
    <Row>
      <LineIndicator color={color} />
      <CellSpan className="CellSpan" colSpan={props.tableSize}>
        <Container>{props.children}</Container>
      </CellSpan>
    </Row>
  );
}

////////////////////////////////// Connect

const mapStateToProps = (state: StoreType) => ({
  tableSize: state.headers ? state.headers.length : 0
});
export default connect(mapStateToProps)(TableChild);
