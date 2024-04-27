export const UseDestructuring = (ev) => {
  const newObj = {};
  ev.target.childNodes.forEach((element) => {
    if (element.type !== "file" && element.value) {
      newObj[element.name] = element.value;
    }
  });
  return newObj;
};
