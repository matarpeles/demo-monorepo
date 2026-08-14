import { describe, expect, it } from 'vitest';
import { loadConfig } from '../../src/config/config.js';

describe('deadline dashboard config', () => {
  it('applies documented defaults when env vars are unset', () => {
    const config = loadConfig({});

    expect(config.matterManagementServiceUrl).toBe('');
    expect(config.firmWideLookAheadDays).toBe(30);
    expect(config.deadlineCacheTtlSeconds).toBe(60);
    expect(config.matterMgmtTimeoutMs).toBe(3000);
  });

  it('reads deadline dashboard env vars when provided', () => {
    const config = loadConfig({
      MATTER_MANAGEMENT_SERVICE_URL: 'http://matter-management:3000',
      FIRM_WIDE_LOOK_AHEAD_DAYS: '45',
      DEADLINE_CACHE_TTL_SECONDS: '120',
      MATTER_MGMT_TIMEOUT_MS: '5000',
    });

    expect(config.matterManagementServiceUrl).toBe(
      'http://matter-management:3000',
    );
    expect(config.firmWideLookAheadDays).toBe(45);
    expect(config.deadlineCacheTtlSeconds).toBe(120);
    expect(config.matterMgmtTimeoutMs).toBe(5000);
  });
});
