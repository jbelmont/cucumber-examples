const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('a list of numbers set to []', function () {
    this.setTo([1, 2, 3, 4, 5])
});

When('I add the numbers together by []', function () {
    this.addBy();
});

Then('I get a larger result that is the sum of the numbers', function () {
    expect(this.summation).to.eql(15)
});