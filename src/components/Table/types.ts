
export type TableType = {
  title?: string | null;
  headers: string[];
  rows: RowType[];
  childTable?: any;
};

export type RowType = {
  data: {
    [key: string]: string
  };
  children: TableType | null;
  [key: string]: any;
};

export type JsonType = {
  data: {
    [key: string]: string
  };
  [key: string]: object;
};
