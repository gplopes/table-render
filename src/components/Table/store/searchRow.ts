import isObject from "lodash/isObject";

let itemFound = false;
let newTable = [];

export function searchDeepRow(table: any, id: string) {
  if (itemFound) {
    console.log('item found -->', itemFound);
    return false;
  }
  if (table instanceof Array) {
    table.forEach(item => {
      if (item._id === id) {
        itemFound = true;
      } else {
      searchDeepRow(item, id);
      }
    });
  } else if (isObject(table)) {
    for (let prop of Object.keys(table)) {
      if (typeof table[prop] !== "string") {
        searchDeepRow(table[prop], id);
      }
    }
  }
}

export function searchRow(table: any) {}
