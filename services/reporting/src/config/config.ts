export interface DeadlineDashboardConfig {
  matterManagementServiceUrl: string;
  firmWideLookAheadDays: number;
  deadlineCacheTtlSeconds: number;
  matterMgmtTimeoutMs: number;
}

function parseEnvInt(value: string | undefined, defaultValue: number): number {
  if (value === undefined || value === '') {
    return defaultValue;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? defaultValue : parsed;
}

export function loadConfig(
  env: NodeJS.ProcessEnv = process.env,
): DeadlineDashboardConfig {
  return {
    matterManagementServiceUrl: env.MATTER_MANAGEMENT_SERVICE_URL ?? '',
    firmWideLookAheadDays: parseEnvInt(env.FIRM_WIDE_LOOK_AHEAD_DAYS, 30),
    deadlineCacheTtlSeconds: parseEnvInt(env.DEADLINE_CACHE_TTL_SECONDS, 60),
    matterMgmtTimeoutMs: parseEnvInt(env.MATTER_MGMT_TIMEOUT_MS, 3000),
  };
}

export const config = loadConfig();
