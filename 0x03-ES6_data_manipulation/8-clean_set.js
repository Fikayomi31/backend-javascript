export default function cleanSet(set, startString) {
    if (!set || !startString || !(set instanceof Set) || typeof xStartString !== 'string') {
      return '';
    }
    // convert set to array
    return Array.from(set)
        // filter ele start with startString to empty string
      .filter((ele) => ele && ele.startsWith(startString))
      .map((ele) => ele.replace(startString, ''))
      .join('-');
  }