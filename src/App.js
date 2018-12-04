import React from "react";
// Components
import Table from "./components/Table";
import dataJSON from "../src/data.json";

function App() {
  return (
    <main>
      <section>
        <div className="container">
          <Table data={ dataJSON } />
        </div>
      </section>
    </main>
    );
}
export default App;
