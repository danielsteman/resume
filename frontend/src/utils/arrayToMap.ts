const arrayToMap = (keysArray: string[], defaultValue: any) => {
  const object = Object.assign({}, ...keysArray.map((k) => ({ [k]: defaultValue })));
  return object;
};

export default arrayToMap;
