export function flattenTreeArray(treeArray: any) {
  return treeArray.reduce((flatArray: any, item: any) => {
    if (item.children) {
      return flatArray.concat(item, flattenTreeArray(item.children));
    } else {
      return flatArray.concat(item);
    }
  }, []);
};

export const setTitle = (title: string) => {
  document.title = title;
};
