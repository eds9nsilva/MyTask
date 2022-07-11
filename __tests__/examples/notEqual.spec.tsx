describe('Not method', () => {
  it('uso basico - not', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('Mat - expressoes regulares', () => {
  it('uso basico - toMatch', () => {
    expect('edson').toMatch(/\w+/);
  });
});

export {};
