import React from "react";
import { Title } from "../styles";

///////////////////////////////////////////////////////// Props

type Props = {
  data: string[] | null;
};

/////////////////////////////////////////////////////// UI

function TableHead(props: Props) {
  const { data } = props;
  return (
    data && (
      <tr>
        <Title />
        {data.map(title => (
          <Title key={title}>{title}</Title>
        ))}
      </tr>
    )
  );
}

export default TableHead;
