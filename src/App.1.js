import React from "react";
import get from "lodash/get";
import Table from "./components/TableQL/Table";

import dataJSON from "../src/data.json";

// console.log(data);
const getChildrenTitle = rowData =>
  Object.keys(get(rowData, "kids.has_relatives.records[0].data", null) || {});

const tableSchema = {
  headers: data => Object.keys(data[0].data),
  row: rowData => ({
    data: rowData.data,
    children: {
      data: get(rowData, "kids.has_relatives.records"),
      schema: {
        headers: () => getChildrenTitle(rowData),
        row: childData => ({
          hey: "hello",
          data: childData.data,
          children: {
            data: get(childData, "kids.has_phone.records"),
            schema: {
              headers: () => Object.keys(get(childData, "kids.has_phone.records[0].data", null) || {}),
              row: (granChild) => ({
                hey: 'granchild',
                data: granChild.data
              })
            }
          }
        })
      }
    }
  })
};

function App() {
  console.log("Schema");
  return (
    <div>
      <section>
        <div className="container">
          <h2>Ataccama</h2>
          <Table data={dataJSON} schema={tableSchema} />
        </div>
      </section>
    </div>
  );
}
export default App;
