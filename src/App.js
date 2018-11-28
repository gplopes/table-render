import React from "react";
import Table from "./components/Table/Table";
import TableRow from './components/Table/Table.Row';

import data from "../src/data.json";

console.log(data);

function App() {
  const mainData = data.map(item => item.data);
  const mainHeading = Object.keys(data[0].data);

  // const childrenData = data
  //   .filter(item => item.kids.has_relatives)
  //   .map(item => item.kids.has_relatives.records)
  //   .map(item => item[0].data);
  // console.log(childrenData);
  console.log(mainData[0], 'hey');
  return (
    <div>
      <section>
        <div className="container">
          <h3>Ataccama</h3>
          <Table heading={mainHeading}>
            <TableRow data={mainData[0]} />
          </Table>
        </div>
      </section>
    </div>
  );
}
export default App;
