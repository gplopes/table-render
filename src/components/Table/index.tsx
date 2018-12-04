import React from "react";
import { Provider } from "react-redux";

import Table from "./components/Table";
import tableStore, { registerTable } from "./store/tableStore";
import { graphCreator } from "./tableGraph";

///////////////////////////// Types

type PropsType = {
  data: any[];
};

/////////////////////////////////////////// UI Provider

function TableProvider(props: PropsType) {
  const { data } = props;
  const graphData = graphCreator(data);
  tableStore.dispatch(registerTable(graphData));
  return (
    <Provider store={tableStore}>
      <Table />
    </Provider>
  );
}

export default TableProvider;
