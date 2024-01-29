
it('should calculate the monthly rate correctly', function () {
  let returnedValue1 = calculateMonthlyPayment({amount: 100000, years: 30, rate: 5});
  expect(returnedValue1).toEqual("536.82");
  let returnedValue2 = calculateMonthlyPayment({amount: 50000, years: 15, rate: 3});
  expect(returnedValue2).toEqual("345.29");
});


it("should return a result with 2 decimal places", function() {
const values = {amount: 10000, years: 10, rate: 4.5};
expect(calculateMonthlyPayment(values)).toEqual("103.64");
});


