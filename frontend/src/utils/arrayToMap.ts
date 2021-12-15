import _ from 'lodash';

const arrayToMap = (keysArray: any[], defaultValue: any) => {
  const object = keysArray.reduce((o, k) => _.set(o, k, defaultValue), {});
  return object;
};

export default arrayToMap;
