// Simple client-side admin utilities backed by localStorage

const ADMIN_LIST_KEY = "nutec_admin_emails";
const ADMIN_PASSCODE_KEY = "nutec_admin_passcode";

// Change this default passcode as needed
const DEFAULT_ADMIN_PASSCODE = "nutec-admin-123";

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getAdmins(): string[] {
  return readJson<string[]>(ADMIN_LIST_KEY, []);
}

export function isAdmin(email?: string | null): boolean {
  if (!email) return false;
  const admins = getAdmins();
  return admins.includes(email.toLowerCase());
}

export function addAdmin(email: string): void {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return;
  const admins = getAdmins();
  if (!admins.includes(normalized)) {
    admins.push(normalized);
    writeJson(ADMIN_LIST_KEY, admins);
  }
}

export function removeAdmin(email: string): void {
  const normalized = email.trim().toLowerCase();
  const admins = getAdmins().filter(e => e !== normalized);
  writeJson(ADMIN_LIST_KEY, admins);
}

export function getPasscode(): string {
  const existing = localStorage.getItem(ADMIN_PASSCODE_KEY);
  if (existing && existing.length > 0) return existing;
  localStorage.setItem(ADMIN_PASSCODE_KEY, DEFAULT_ADMIN_PASSCODE);
  return DEFAULT_ADMIN_PASSCODE;
}

export function setPasscode(newCode: string): void {
  const trimmed = newCode.trim();
  if (trimmed.length === 0) return;
  localStorage.setItem(ADMIN_PASSCODE_KEY, trimmed);
}

export function verifyPasscode(input: string): boolean {
  return input.trim() === getPasscode();
}


