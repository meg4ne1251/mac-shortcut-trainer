const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

// --- User ---

export interface ApiUser {
  id: string;
  nickname: string | null;
  locale: string;
  created_at: string;
}

export async function createUser(locale: string): Promise<ApiUser> {
  return request<ApiUser>('/users', {
    method: 'POST',
    body: JSON.stringify({ locale }),
  });
}

export async function getUser(userId: string): Promise<ApiUser> {
  return request<ApiUser>(`/users/${userId}`);
}

// --- Stats ---

export interface ApiShortcutStat {
  shortcut_key: string;
  avg_latency_ms: number;
  total_attempts: number;
  miss_count: number;
  mastery_score: number;
}

export interface ApiUserStats {
  user_id: string;
  stats: ApiShortcutStat[];
  weaknesses: ApiShortcutStat[];
}

export async function getUserStats(userId: string): Promise<ApiUserStats> {
  return request<ApiUserStats>(`/users/${userId}/stats`);
}

// --- Sessions ---

export interface ApiKeyLog {
  key: string;
  latency_ms: number;
  is_miss: boolean;
}

export interface ApiSessionCreate {
  user_id: string;
  problem_key: string;
  total_time_ms: number;
  total_misses: number;
  completed: boolean;
  key_logs: ApiKeyLog[];
}

export interface ApiSessionResponse {
  id: string;
  user_id: string;
  problem_id: string;
  total_time_ms: number;
  total_misses: number;
  completed: boolean;
  played_at: string;
}

export async function createSession(data: ApiSessionCreate): Promise<ApiSessionResponse> {
  return request<ApiSessionResponse>('/sessions', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// --- Health ---

export async function healthCheck(): Promise<{ status: string }> {
  return request<{ status: string }>('/health');
}
