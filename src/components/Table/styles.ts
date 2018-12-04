import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  border: 1px solid #e7ebff;
  padding: 10px;
`;

export const Caption = styled.caption`
  text-align: left;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: bold;
`;

export const Row = styled.tr`
  position: relative;
  border-bottom: 5px solid ${colors.bg};

  &:hover > td:not(:first-child):not(.CellSpan) {
    color: white;
    background-color: #5C5FEB;
  }

  td:nth-child(2) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const LineIndicator = styled.td`
  border-right: 2px solid ${({ color }) => color};
`;

export const Cell = styled.td`
  text-align: center;
  padding: 5px 15px;
  height: 55px;
  background-color: white;
  white-space: nowrap;
  transition: all 0.4s ease;
  &:nth-child(n + 3) {
    border-left: 3px solid ${colors.bg};
  }
`;

export const IconCell = styled(Cell)`
  cursor: pointer;
  text-align: right;
  background-color: transparent;
`;

export const CellSpan = styled(Cell)`
  background-color: ${colors.bg};
`;

export const Title = styled(Cell)`
  color: #839ba6;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  &:nth-child(n + 3) {
    border: 0;
  }
`;

export const IconWrap = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: white;
  border-radius: 5px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    color: white;
    background-color: #5C5FEB;
  }
`;
