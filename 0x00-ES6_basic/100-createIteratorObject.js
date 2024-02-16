export default function createIteratorObject(report) {
  let result = [];
  for (let idx of Object.values(report.allEmployees)) {
    result.push(...idx);
  }
  return result;
}
