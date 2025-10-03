function stringChop(str, size) {
  if (str == null) return [];
  size = parseInt(size); // ensure numeric chunk size
  if (size <= 0) return [];
  let result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }
  return result;
}
