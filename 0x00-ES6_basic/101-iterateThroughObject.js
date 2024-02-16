export default function iterateThroughObject(reportWithIterator) {
  let result = [];
  for (const idx of reportWithIterator) {
    result.push(idx);
   }
  return result.join(' | ');
 }
