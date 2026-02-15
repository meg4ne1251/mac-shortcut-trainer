import { describe, it, expect } from 'vitest';
import { formatTime } from '../hooks/useTimer';

describe('formatTime', () => {
  it('should format 0 ms as 00:00.00', () => {
    expect(formatTime(0)).toBe('00:00.00');
  });

  it('should format 1000 ms as 00:01.00', () => {
    expect(formatTime(1000)).toBe('00:01.00');
  });

  it('should format 60000 ms as 01:00.00', () => {
    expect(formatTime(60000)).toBe('01:00.00');
  });

  it('should format 65320 ms as 01:05.32', () => {
    expect(formatTime(65320)).toBe('01:05.32');
  });

  it('should format 500 ms as 00:00.50', () => {
    expect(formatTime(500)).toBe('00:00.50');
  });

  it('should handle large values', () => {
    expect(formatTime(3661230)).toBe('61:01.23');
  });

  it('should format 12345 ms correctly', () => {
    // 12345 ms = 12s 345ms → 00:12.34
    expect(formatTime(12345)).toBe('00:12.34');
  });
});
