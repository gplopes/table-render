import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: auto;
`;

export const Table = styled.div`
  display: table;
  width: 100%;
`;

export const Head = styled.div`
  display: table-header-group;
  color: #839ba6;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
`;

export const Body = styled.div`
  display: table-row-group;
  background-color: white;
`;

export const Row = styled.div`
  display: table-row;
`;

//////////////////////// RowSpan
interface RowProps {
  height: number;
};
export const RowSpan = styled(Row)`
  height: ${(props: RowProps) => props.height}px;
`;

export const RowSpanWrap = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100%;
  background-color: #f6f6f9;
  border: 1px solid red;
  border-bottom: 8px solid #f7f6fa;
  height: ${(props: RowProps) => props.height}px;
`;


export const Cell = styled.div`
  padding: 10px 15px;
  white-space: nowrap;
  display: table-cell;
  border-bottom: 8px solid #f7f6fa;
  &:nth-child(n + 3) {
    border-left: 1px solid #f0f0f3;
  }
`;
