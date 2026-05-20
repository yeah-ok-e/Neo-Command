import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import { Intake } from './pages/Intake';
import { LoadScreen } from './pages/LoadScreen';
import { useProfile } from './hooks/useProfile';

export default function App() {
  const { profile, setProfile, reset } = useProfile();
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(false);

  if (!loaded) return <LoadScreen onComplete={() => setLoaded(true)} />;
  if (!profile || editing) return <Intake onSave={(next) => { setProfile(next); setEditing(false); }} />;
  return <Dashboard profile={profile} onReset={reset} onEdit={() => setEditing(true)} />;
}
