import { useEffect, useState } from 'react';
import type { NeoProfile } from '../types';
import { clearProfile, loadProfile, saveProfile } from '../lib/storage';

export function useProfile() {
  const [profile, setProfile] = useState<NeoProfile | null>(() => loadProfile());

  useEffect(() => {
    if (profile) saveProfile(profile);
  }, [profile]);

  const reset = () => {
    clearProfile();
    setProfile(null);
  };

  return { profile, setProfile, reset };
}
