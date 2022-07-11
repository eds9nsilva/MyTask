describe('Comparar numero', () => {
  it('uso basico - toEqual', () => {
    expect(1 + 1).toBeGreaterThan(1); // para uso de >
    expect(1 + 1).toBeGreaterThanOrEqual(1); // para uso de > ou =
    expect(1 + 1).toBeLessThan(3); // para uso de <
    expect(1 + 1).toBeLessThanOrEqual(2); // para uso de < ou =
  });
});

describe('Mock', () => {
  it('mock implementantion', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);
    expect(fakeAdd(1, 1)).toBe(5);
  });
});

export {};
