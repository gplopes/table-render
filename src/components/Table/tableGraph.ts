import union from "lodash/union";
import isEqual from "lodash/isEqual";
import uniqid from "uniqid";

import { RowType, TableType, JsonType } from "./types";

///////////////////////////////////////////////////////////// Types

type GetRowDataType = {
  data: RowType;
  _keys: string[];
};

///////////////////////////////////////////////////////////// Types
function getChildren(layer: any, tableChild: TableType | null, path?: string) {
  if (layer instanceof Array) {
    layer.forEach(item => {
      if (item.data && tableChild) {
        const { data, _keys } = getRowData(item);

        // Table Heads
        tableChild.headers = !tableChild.headers
          ? union(tableChild.headers, _keys)
          : tableChild.headers;

        // Table Rows
        isEqual(tableChild.headers, _keys) && tableChild.rows.push(data);
      }
      getChildren(item, tableChild, path);
    });
  } else if (typeof layer === "object") {
    for (let prop of Object.keys(layer)) {
      if (prop !== "data" && typeof layer[prop] !== "string") {
        getChildren(layer[prop], tableChild, prop);
        if (tableChild && path !== null && path !== undefined) {
          tableChild.title = `/${path}`;
        }
      }
    }
  }
}

///////////////////////////////////////////////////////////// Get All Row+Children Data

function getRowData(dataLayer: JsonType): GetRowDataType {
  const rowID: string = uniqid();
  let _children: object | null = null;
  let _keys: string[] = [];
  let rowData: RowType = {
    _id: null,
    data: {},
    children: { rows: [], headers: null, title: null }
  };

  if (typeof dataLayer === "object") {
    const data = dataLayer.data;
    rowData.data = data;
    rowData._id = rowID;

    _keys = Object.keys(data);
    _children = Object.keys(dataLayer)
      .filter(key => key !== "data")
      .map(key => dataLayer[key]);
  }
  _children && getChildren(_children, rowData.children);

  return { data: rowData, _keys };
}

///////////////////////////////////////////////////////////// Table Graph Creator

export function graphCreator(jsonData: JsonType[]): TableType {
  const graph: TableType = { rows: [], headers: null };

  jsonData.forEach((dataLayer: JsonType) => {
    const { data, _keys } = getRowData(dataLayer);
    graph.rows.push(data);
    graph.headers = union(graph.headers, _keys);
  });
  //console.log(graph);
  return graph;
}
