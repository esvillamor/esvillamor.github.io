class odometer {
  constructor(diameter, rotation) {
    this.data = diameter;
    this.rot = rotation;
  }

  circumference() {
    const circumference = parseFloat((Math.PI * this.data).toFixed(2));
    return circumference;
  }

  calculate() {
    const circumference = this.circumference();
    const distance = parseFloat((circumference * this.rot / 100000).toFixed(0));
    const distanceString = distance.toString().padStart(6, '0');
    const formattedDistance = `[${distanceString.substring(0, 1)}][${distanceString.substring(1, 2)}][${distanceString.substring(2, 3)}][${distanceString.substring(3, 4)}][${distanceString.substring(4, 5)}][${distanceString.substring(5, 6)}]`;
    return formattedDistance;
  }
}

// Example usage
const myOdometer = new odometer(19, 457752);
const circumference = myOdometer.circumference();
const traveledDistance = myOdometer.calculate();

console.log('Result Circumference:', circumference);
console.log('Result Traveled Distance:', traveledDistance);

/*
class Odometer {
  constructor(diameter, rotation) {
    this.diameter = diameter;
    this.rotation = rotation;
  }

  circumference() {
    const circumference = parseFloat((Math.PI * this.diameter).toFixed(2));
    return circumference;
  }

  calculate() {
    const circumference = this.circumference();
    const traveledDistance = parseFloat((circumference * this.rotation / 100000).toFixed(0));
    const distanceString = traveledDistance.toString().padStart(6, '0');
    const formattedDistance = distanceString
      .split('')
      .map(digit => `[${digit}]`)
      .join('');
    return {
      circumference,
      traveledDistance: formattedDistance
    };
  }
}

const tireDiameter = 19;
const wheelRotations = 457752;

const myOdometer = new Odometer(tireDiameter, wheelRotations);
const result = myOdometer.calculate();

console.log('Tire diameter:', tireDiameter, 'inches');
console.log('Wheel Rotation:', wheelRotations);
console.log('Result Circumference:', result.circumference);
console.log('Result Traveled Distance:', result.traveledDistance);
*/