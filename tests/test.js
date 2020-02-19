QUnit.test("is 1 odd", function( assert ) {
  assert.ok(isOdd(1), 'One is an odd number');
});

QUnit.test("is 2 odd", function( assert ) {
  assert.notOk(isOdd(2), 'two is an even number');
});