/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.slots = {
        1: big,
        2: medium,
        3: small
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (this.hasSpace(carType)) {
        this.slots[carType]--;
        return true;
    }

    return false;
};

ParkingSystem.prototype.hasSpace = function (carType) {
    return this.slots[carType] > 0;
}

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */