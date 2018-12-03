import isObject from "lodash/isObject";

let itemFound = false;

export function searchDeepRow(table: any, id: string) {
  if (itemFound) return false;
  console.log("table", typeof table);
  if (table instanceof Array) {
    table.forEach(item => {
      if (item._id === id) {
        console.log("Hey! found it");
        itemFound = true;
      }
      searchDeepRow(item, id);
    });
  } else if (isObject(table)) {
    for (let prop of Object.keys(table)) {
      if (typeof table[prop] !== "string") {
        //console.log("prop", prop);
        searchDeepRow(table[prop], id);
      }
    }
  }

  if (table === null) {
    console.log("hey done");
    return false;
  }
}

export function searchRow(table: any) {}
