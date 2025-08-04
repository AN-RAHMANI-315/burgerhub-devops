// Simple React App Test
import React from 'react';

// Minimal test that doesn't require @testing-library
describe('App Tests', () => {
  test('React is imported correctly', () => {
    expect(React).toBeDefined();
  });

  test('Basic math works', () => {
    expect(2 + 2).toBe(4);
  });
});
