export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter(value => value.substring(0, startString.length) === startString)
    .map(value => value.slice(startString.length))
    .join('-');
}
