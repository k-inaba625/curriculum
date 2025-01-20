// 問1
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(number) {
    let num = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            num.push(number[i]);
        }
    }
    console.log(num + 'は偶数です');
}

isEven(numbers);

// 問2
class Car {
    constructor(gasoline, carNumber) {
        this.gasoline = gasoline;
        this.carNumber = carNumber;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.carNumber}です`);
    }
}
let privateCar = new Car('レギュラー', 1);
privateCar.getNumGas();