export default function hasValueFromArray(set, array) {
     // The `every` method checks if every element is present
    return array.every((element) => set.has(element));
}