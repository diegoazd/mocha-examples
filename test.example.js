var assert = chai.assert;

describe('My first test', function(){
  it('Should be equals 2+2 ==4', function(){
    assert.equal(sum(2,2), 4);
  });
});
