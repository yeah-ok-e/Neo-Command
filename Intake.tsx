import { useState } from 'react';
import { motion } from 'framer-motion';
import type { CurrentFocus, NeoProfile, OccupationType } from '../types';

const occupations: OccupationType[] = ['cashier', 'corporate', 'student', 'founder', 'creator', 'freelancer', 'parent', 'athlete', 'other'];
const focuses: CurrentFocus[] = ['stabilize', 'organize', 'grow income', 'build discipline', 'build business', 'improve health', 'rebuild life', 'manage family', 'other'];

export function Intake({ onSave }: { onSave: (profile: NeoProfile) => void }) {
  const [form, setForm] = useState({
    name: '', email: '', occupation: 'corporate' as OccupationType, customOccupation: '', focus: 'organize' as CurrentFocus,
    topGoal: '', pressurePoint: '', checkInTime: '8:00 AM', monthlyIncome: '', bills: '', debt: '', familyResponsibilities: '', healthNotes: '', emotionalState: '', location: '',
  });

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submit() {
    onSave({
      ...form,
      name: form.name || 'New Operator',
      email: form.email || 'operator@example.com',
      topGoal: form.topGoal || 'Create more stability and forward motion.',
      pressurePoint: form.pressurePoint || 'Too many moving parts.',
      createdAt: new Date().toISOString(),
    });
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white sm:px-6">
      <motion.div className="mx-auto max-w-3xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8 border border-white/10 bg-white/[0.035] p-5">
          <p className="text-[10px] uppercase tracking-[0.34em] text-white/40">60 second intake</p>
          <h1 className="mt-3 text-3xl font-semibold">Build your command center.</h1>
          <p className="mt-3 text-sm leading-6 text-white/60">NEO is not here to judge your starting point. It helps you organize the next move.</p>
        </div>

        <div className="mb-5 border border-white/10 bg-white/[0.055] p-4 text-sm text-white/70">
          Sensitive details are optional. You can skip them now and add them later in Admin. NEO still works with placeholders.
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Name" value={form.name} onChange={(v) => update('name', v)} />
          <Input label="Email" value={form.email} onChange={(v) => update('email', v)} />
          <Select label="Main occupation" value={form.occupation} options={occupations} onChange={(v) => update('occupation', v)} />
          <Select label="Current focus" value={form.focus} options={focuses} onChange={(v) => update('focus', v)} />
          {form.occupation === 'other' && <Input label="Occupation detail" value={form.customOccupation} onChange={(v) => update('customOccupation', v)} />}
          <Input label="Top goal" value={form.topGoal} onChange={(v) => update('topGoal', v)} />
          <Input label="Main pressure point" value={form.pressurePoint} onChange={(v) => update('pressurePoint', v)} />
          <Input label="Preferred daily check-in" value={form.checkInTime} onChange={(v) => update('checkInTime', v)} />
        </div>

        <p className="mt-8 text-[10px] uppercase tracking-[0.34em] text-white/40">Optional sensitive data</p>
        <p className="mt-2 text-sm text-white/50">Skip anything you do not want to add yet. You can complete it later.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input label="Monthly income" value={form.monthlyIncome} onChange={(v) => update('monthlyIncome', v)} />
          <Input label="Bills" value={form.bills} onChange={(v) => update('bills', v)} />
          <Input label="Debt" value={form.debt} onChange={(v) => update('debt', v)} />
          <Input label="Family responsibilities" value={form.familyResponsibilities} onChange={(v) => update('familyResponsibilities', v)} />
          <Input label="Health notes" value={form.healthNotes} onChange={(v) => update('healthNotes', v)} />
          <Input label="Emotional state" value={form.emotionalState} onChange={(v) => update('emotionalState', v)} />
          <Input label="Location" value={form.location} onChange={(v) => update('location', v)} />
        </div>

        <button onClick={submit} className="mt-8 w-full border border-white/20 bg-white px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-black">
          Enter Command
        </button>
      </motion.div>
    </main>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-white/10 bg-white/[0.035] px-4 py-3 text-sm outline-none transition focus:border-white/30" />
    </label>
  );
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-white/10 bg-[#090909] px-4 py-3 text-sm outline-none transition focus:border-white/30">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
