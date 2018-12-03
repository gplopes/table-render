
export type TableType = {
  title?: string | null;
  headers: string[] | null;
  rows: RowType[];
};

export type RowType = {
  _id?: string | null;
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
  [key: string]: object
};
