import isEqual from 'lodash/isEqual';
import union from 'lodash/union';
import uniqid from 'uniqid';

import { JsonType, RowType, TableType } from './types';

///////////////////////////////////////////////////////////// Deep Graph Creation

function deepGraph(layer: any, tableChild: TableType | null, path?: string) {
  if (layer instanceof Array) {
    layer.forEach(item => {
      if (item.data && tableChild) {
        const { data, _keys } = getRowData(item);

        // Table Heads
        tableChild.headers = !tableChild.headers
          ? union(tableChild.headers, _keys)
          : tableChild.headers;

        // Table Rows
        if (isEqual(tableChild.headers, _keys)) {
          tableChild.rows.push(data);
        }
      }
      deepGraph(item, tableChild, path);
    });
  } else if (typeof layer === 'object') {
    for (const prop of Object.keys(layer)) {
      if (prop !== 'data' && typeof layer[prop] !== 'string') {
        deepGraph(layer[prop], tableChild, prop);
        if (tableChild && path !== null && path !== undefined) {
          tableChild.title = `/${path}`;
        }
      }
    }
  }
}

///////////////////////////////////////////////////////////// Get Row Data

type GetRowDataType = {
  data: RowType;
  _keys: string[];
}

function getRowData(dataLayer: JsonType): GetRowDataType {
  const rowID: string = uniqid();
  let childrenTemp: object | null = null;
  let keysTemp: string[] = [];
  const rowData: RowType = {
    _id: null,
    children: { rows: [], headers: null, title: null },
    data: {},
  };

  if (typeof dataLayer === 'object') {
    const data = dataLayer.data;
    rowData.data = data;
    rowData._id = rowID;

    keysTemp = Object.keys(data);
    childrenTemp = Object.keys(dataLayer)
      .filter(key => key !== 'data')
      .map(key => dataLayer[key]);
  }
  if (childrenTemp) {
    deepGraph(childrenTemp, rowData.children);
  }

  return { data: rowData, _keys: keysTemp };
}

///////////////////////////////////////////////////////////// Graph Creator

export function graphCreator(jsonData: JsonType[]): TableType {
  const graph: TableType = { rows: [], headers: null };

  jsonData.forEach((dataLayer: JsonType) => {
    const { data, _keys } = getRowData(dataLayer);
    graph.rows.push(data);
    graph.headers = union(graph.headers, _keys);
  });
  return graph;
}
