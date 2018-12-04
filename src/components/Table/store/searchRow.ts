import isObject from 'lodash/isObject';

export function searchRow(table: object, id: string) {
  let itemFound: boolean = false;
  const tablePlaceholder: object = { ...table };

  function searchDeepRow(tableDeep: any, itemId: string) {
    if (itemFound) {
      return false;
    }

    if (tableDeep instanceof Array) {
      tableDeep.forEach((item, key) => {
        if (item._id === itemId) {
          itemFound = true;
          tableDeep.splice(key, 1);
        } else {
          searchDeepRow(item, id);
        }
      });
    } else if (isObject(tableDeep)) {
      for (const prop of Object.keys(tableDeep)) {
        if (typeof tableDeep[prop] !== 'string') {
          searchDeepRow(tableDeep[prop], id);
        }
      }
    }
  }
  searchDeepRow(tablePlaceholder, id);
  return tablePlaceholder;
}
