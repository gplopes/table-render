import React from "react";
import { Title } from "../styles";

///////////////////////////////////////////////////////// Props

type PropsType = {
  data: string[] | null;
};

/////////////////////////////////////////////////////// UI

function TableHead(props: PropsType) {
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
