import styled from "styled-components";
import { colors } from "../../styles";


export const Container = styled.div`
  width: 100%;
  overflow: auto;
`;

export const Caption = styled.caption`
  text-align: left;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
  font-weight: bold;
`;

export const Row = styled.tr`
  position: relative;
  border-bottom: 10px solid ${colors.bg};
  td:first-child {
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
  padding: 20px 15px;
  background-color: white;
  white-space: nowrap;
  &:nth-child(n + 3) {
    border-left: 1px solid #f0f0f3;
  }
`;

export const CellSpan = styled(Cell)`
  background: ${colors.bg};
`;

export const Title = styled(Cell)`
  color: #839ba6;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
`;
