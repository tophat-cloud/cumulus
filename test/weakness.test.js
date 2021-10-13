const Xss = require('../src/weakness/xss');
const SqlInjection = require('../src/weakness/sqlinjection');

describe('xss test', () => {
  it('detect case', (done) => {
    const isDetected = Xss.checkString('<xss id=x tabindex=1 onactivate=alert(1)></xss>');
    expect(isDetected).toBeTruthy();
    done();
  });

  it('undetect case', (done) => {
    const isDetected = Xss.checkString('Hi, It is xss');
    expect(isDetected).not.toBeTruthy();
    done();
  });
});


describe('sqlinjection test', () => {
  it('detect case', (done) => {
    const isDetected = SqlInjection.checkString('select * from 1');
    expect(isDetected).toBeTruthy();
    done();
  });

  it('undetect case', (done) => {
    const isDetected = SqlInjection.checkString('Hi, It is sqlinjection');
    expect(isDetected).not.toBeTruthy();
    done();
  });
});

