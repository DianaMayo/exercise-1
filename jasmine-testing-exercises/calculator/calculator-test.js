
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(106.7)).toEqual(0.05/12)
});


it("should return a result with 2 decimal places", function() {
  expect(resultWithTwoDecimal(100.30)).toEqual(3.80)
});

/// etc
