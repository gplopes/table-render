import React from "react";
import Table from "./components/Table/Table";

import data from "../src/data.json";

console.log(data);

function App() {
  const mainData = data.map(item => item.data);
  //const mainHeading = Object.keys(data[0].data);

  const childrenData = data
    .filter(item => item.kids.has_relatives)
    .map(item => item.kids.has_relatives.records)
    .map(item => item[0].data);

  console.log(childrenData);
  return (
    <div>
      <section>
        <div className="container">
          <h2>Ataccama</h2>
          <Table data={mainData} />
        </div>
      </section>
      <section>
        <div className="container">
         <Table data={childrenData} />
        </div>
      </section>
    </div>
  );
}
export default App;
