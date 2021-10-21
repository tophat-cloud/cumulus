const Xss = require('../src/weakness/xss');
const SqlInjection = require('../src/weakness/sqlinjection');
const Sensitive = require('../src/weakness/sensitive');
const Fileupload = require('../src/weakness/fileupload');

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


describe('sensitive test', () => {
  it('detect case', (done) => {
    window = {
      location: {
        protocol: 'http:'
      }
    };

    const isDetected = Sensitive.checkJSON({ password: '12345678' });
    expect(isDetected).toBeTruthy();
    done();
  });

  it('undetect case 1', (done) => {
    window = {
      location: {
        protocol: 'https:'
      }
    };

    const isDetected = Sensitive.checkJSON({ password: '00000000' });
    expect(isDetected).not.toBeTruthy();
    done();
  });

  it('undetect case 2', (done) => {
    window = {
      location: {
        protocol: 'http:'
      }
    };

    const isDetected = Sensitive.checkJSON({ name: 'jinny you' });
    expect(isDetected).not.toBeTruthy();
    done();
  });
});


describe('fileupload test', () => {
  // todo write test-code
});
