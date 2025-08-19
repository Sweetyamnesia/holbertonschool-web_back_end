export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return {
      brand: this._brand,
      motor: this._motor,
      color: this._color,
    };
  }
}
