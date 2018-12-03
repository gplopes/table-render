import union from "lodash/union";
import isEqual from "lodash/isEqual";

import { RowType, TableType, JsonType } from './types';

///////////////////////////////////////////////////////////// Types

type GetRowDataType = {
  data: RowType;
  _keys: string[];
};

///////////////////////////////////////////////////////////// Types

function getChildren(layer: any, graphChild: any, path?: string) {
  if (layer instanceof Array) {
    layer.forEach(item => {
      if (item.data) {
        const { data, _keys } = getRowData(item);
        graphChild.title += `/${path}`;
        graphChild.headers = !graphChild.headers
          ? union(graphChild.headers, _keys)
          : graphChild.headers;
        isEqual(graphChild.headers, _keys) && graphChild.rows.push(data);
      }
      getChildren(item, graphChild, path);
    });
  } else if (typeof layer === "object") {
    for (let prop of Object.keys(layer)) {
      if (prop !== "data" && typeof layer[prop] !== "string") {
        //console.log("object prop =>", title);
        getChildren(layer[prop], graphChild, prop);
      }
    }
  }
}

///////////////////////////////////////////////////////////// Get All Row+Children Data

function getRowData(dataLayer: JsonType): GetRowDataType {
  let rowData: RowType = { data: {}, children: null };
  let _children: object | null = null;
  let _keys: string[] = [];

  if (typeof dataLayer === "object") {
    const data = dataLayer.data;
    rowData.data = data;

    _keys = Object.keys(data);
    _children = Object.keys(dataLayer)
      .filter(key => key !== "data")
      .map(key => dataLayer[key]);
  }

  rowData.children = { rows: [], headers: [], title: null };
  getChildren(_children, rowData.children);

  return { data: rowData, _keys };
}

///////////////////////////////////////////////////////////// Table Graph Creator

export function graphCreator(jsonData: JsonType[]): TableType {
  const graph: TableType = { rows: [], headers: [] };

  jsonData.forEach((dataLayer: JsonType) => {
    const { data, _keys } = getRowData(dataLayer);
    graph.rows.push(data);
    graph.headers = union(graph.headers, _keys);
  });
  return graph;
}
