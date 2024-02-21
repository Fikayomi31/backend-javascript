import Building from "./5-building";
export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super (sqft);
        this._floors = floors;
    }
    get sqft() {
        return super (sqft);
    }
    set
}