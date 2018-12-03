import React from "react";

import Table from "./components/Table";
import dataJSON from "../src/data.json";

function App() {
  return (
    <div>
      <section>
        <div className="container">
          <Table data={dataJSON} />
        </div>
      </section>
    </div>
  );
}
export default App;
