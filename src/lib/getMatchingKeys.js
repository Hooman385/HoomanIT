export const regexForKeys = /^category\d+$/;

export default function getAllMatchingKeys(keys) {
  const tempMatchingKeys = [];
  keys.forEach((key) => {
    if (key.match(regexForKeys)) {
      tempMatchingKeys.push(key);
    }
  });
  return tempMatchingKeys;
}
