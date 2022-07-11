describe('Igualdade', () => {
  it('uso basico - toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('edson').toEqual('edson');
    expect({name: 'edson'}).toEqual({name: 'edson'});
  });
  it('uso basico - toBe', () => {
    expect(1 + 1).toBe(2);
    expect('edson').toBe('edson');
  });
});

export {};
