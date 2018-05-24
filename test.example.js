var assert = chai.assert;

describe('My first test', function(){
  it('Should sum 2 numbers', function(){
    assert.equal(sum(2,2), __, 'Cuanto es 2 +2?');
  });

  it('Should assert array', function() {
    assert(Array.isArray(__), 'Agrega un arreglo');
  });

  it('Should assert a truthy', function() {
    assert.isOk(returnTruthy(), 'Agrega un truthy');
  });

  it('Should assert falsy', function() {
    assert.isNotOk(returnFalsy(), 'Agrega un falsy');
  });

  it('Should assert with not strict-equality', function() {
    assert.equal(__, returnCoartionValue(), 'Agrega el equivalente en js para que haga coercion');
  });

  it('Should assert with strict equility', function() {
    assert.strictEqual(2, returnStrictEqualValue, 'Agrega un valor igual')
  });
});
