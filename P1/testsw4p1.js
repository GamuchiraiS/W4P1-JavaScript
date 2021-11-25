// JavaScript source code
const chai = window.chai;
const expect = chai.expect;

var numArr = [50, 10, 20, 33, 4, 60, 88, 7, 9, 1];

//AverageTest1
describe("Average Test 1", function () {
    it("should return 28.2", function () {
        calculate_avg(numArr);
        expect(28.2, chai.avg);
    });
});

//AverageTest2
describe("Average Test 2", function () {
    it("should return 10", function () {
        calculate_avg([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
        expect(10, chai.avg);
    });
});

//AverageTest3
describe("Average Test 3", function () {
    it("should return 59.8", function () {
        calculate_avg([6, 56, 70, 15, 1, 420, 5, 5, 9, 11]);
        expect(59.8, chai.avg);
    });
});

//BelowAverageTest1
describe("Numbers below average 1", function () {
    it("should return 6", function () {
        belowAverage(numArr, 28.2);
        expect(6, chai.belowCounter);
    });
});

//BelowAverageTest2
describe("Numbers below average 2", function () {
    it("should return 0", function () {
        belowAverage([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10);
        expect(0, chai.belowCounter);
    });
});

//BelowAverageTest3
describe("Numbers below average 3", function () {
    it("should return 8", function () {
        belowAverage([6, 56, 70, 15, 1, 420, 5, 5, 9, 11], 59.8);
        expect(8, chai.belowCounter);
    });
});

//AboveAverageTest1
describe("Numbers above average 1", function () {
    it("should return 4", function () {
        aboveAverage(numArr, 28.2);
        expect(4, chai.aboveCounter);
    });
});

//AboveAverageTest2
describe("Numbers above average 2", function () {
    it("should return 0", function () {
        aboveAverage([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10);
        expect(0, chai.aboveCounter);
    });
});

//AboveAverageTest3
describe("Numbers above average 3", function () {
    it("should return 2", function () {
        aboveAverage([6, 56, 70, 15, 1, 420, 5, 5, 9, 11], 59.8);
        expect(2, chai.aboveCounter);
    });
});

