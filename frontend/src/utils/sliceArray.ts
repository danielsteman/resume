export function sliceArray(array: any[], chunks: number) {
  const restructuredArray: any = []

  for (let i = 0; i < array.length; i += chunks) {
    restructuredArray.push(array.slice(i, i + chunks));
  }
  
  return restructuredArray
}