// index.ts
var isEmpty = (value) => {
  if (typeof value === "boolean") {
    return false;
  }
  return true;
};
export {
  isEmpty
};
