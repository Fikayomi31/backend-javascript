export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }
  get students() {
    return this._students;
  }
  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    this._students = value;
  }
}
