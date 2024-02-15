export default function concatArrays(array1, array2, string) {
  let we = [...array1, ...array2, ...string];
  return we;
}
