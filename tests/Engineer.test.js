const Engineer = require('../lib/Engineer');

test('can instantiate engineer instance', () => {
    const x = new Engineer(name);
    expect(typeof(x)).toBe('object');
});

test('can get role should return "Engineer" via getRole()', () => {
    const testValue = "Engineer"
    const x = new Engineer('Keith', 1, 'test@gmail.com', 'glchavez');
    expect(x.getRole()).toBe(testValue);
});
