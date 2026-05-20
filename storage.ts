import type { NeoProfile } from '../types';

const KEY = 'neo-command-profile-v1';

export function loadProfile(): NeoProfile | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as NeoProfile) : null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: NeoProfile) {
  localStorage.setItem(KEY, JSON.stringify(profile));
}

export function clearProfile() {
  localStorage.removeItem(KEY);
}
