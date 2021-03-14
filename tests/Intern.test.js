const Intern = require('../lib/Intern');

test('can instantiate intern instance', () => {
    const x = new Intern(name);
    expect(typeof(x)).toBe('object');
});

test('can get role should return "Intern" via getRole()', () => {
    const testValue = "Intern"
    const x = new Intern('Keith', 1, 'test@gmail.com');
    expect(x.getRole()).toBe(testValue);
});
