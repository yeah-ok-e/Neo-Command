import { motion } from 'framer-motion';
import { Brain, Briefcase, CalendarClock, CircleDollarSign, Goal, RotateCcw, Shield, Sparkles } from 'lucide-react';
import { Card } from '../components/Card';
import { lifeAreas, occupationLabels, placeholderProfile } from '../data/placeholders';
import { getMilestone, getNextMove, getPriorities } from '../lib/recommendations';
import type { NeoProfile } from '../types';

export function Dashboard({ profile, onReset, onEdit }: { profile: NeoProfile; onReset: () => void; onEdit: () => void }) {
  const merged = { ...placeholderProfile, ...profile };
  const priorities = getPriorities(merged);
  const occupation = merged.occupation === 'other' ? merged.customOccupation || 'Main Occupation' : occupationLabels[merged.occupation];

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_100%,52px_52px,52px_52px]" />
      <motion.div className="relative z-10 mx-auto max-w-7xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <header className="mb-6 flex flex-col gap-4 border border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.42em] text-white/40">NEO Command</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Welcome, {merged.name}.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">NEO is not here to judge your starting point. It helps you organize the next move.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={onEdit} className="border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/70">Edit</button>
            <button onClick={onReset} className="flex items-center gap-2 border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/70"><RotateCcw size={14}/>Reset</button>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card title="Today's Command" kicker="Daily operating layer">
            <ul className="space-y-3 text-sm text-white/70">
              {priorities.map((item) => <li className="border-l border-white/20 pl-3" key={item}>{item}</li>)}
            </ul>
            <div className="mt-5 border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Next best move</p>
              <p className="mt-2 text-sm leading-6 text-white/75">{getNextMove(merged)}</p>
            </div>
          </Card>

          <Card title="Work / Main Occupation" kicker="Advancement path">
            <IconLine icon={<Briefcase size={16}/>} label="Current role" value={occupation || 'Main Occupation'} />
            <IconLine icon={<Sparkles size={16}/>} label="Focus" value={merged.focus} />
            <IconLine icon={<Goal size={16}/>} label="Advancement" value="Stabilize performance, build proof, add one income stream." />
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/55">
              <div className="border border-white/10 p-3">Stream 01<br/><span className="text-white/80">Primary work</span></div>
              <div className="border border-white/10 p-3">Stream 02<br/><span className="text-white/80">To define</span></div>
            </div>
          </Card>

          <Card title="Money Snapshot" kicker="Placeholder-safe">
            <IconLine icon={<CircleDollarSign size={16}/>} label="Income" value={merged.monthlyIncome || placeholderProfile.monthlyIncome!} />
            <IconLine icon={<Shield size={16}/>} label="Bills" value={merged.bills || placeholderProfile.bills!} />
            <IconLine icon={<Brain size={16}/>} label="Money move" value="Know the gap, protect essentials, create one cash action." />
          </Card>

          <Card title="Goals" kicker="30 / 90 direction">
            <p className="text-sm leading-6 text-white/70">Top goal: {merged.topGoal}</p>
            <p className="mt-3 text-sm leading-6 text-white/70">{getMilestone(merged)}</p>
            <p className="mt-3 text-sm leading-6 text-white/70">90-day direction: become visibly more organized, stable, and consistent.</p>
          </Card>

          <Card title="Routine" kicker="Daily anchors">
            {['Morning anchor: check command + choose 3 moves', 'Work block: complete the one advancement task', 'Body / health: one action that gives energy back', 'Evening reset: close loops + stage tomorrow'].map((item) => (
              <p key={item} className="mb-3 border-b border-white/10 pb-3 text-sm text-white/70 last:border-0">{item}</p>
            ))}
          </Card>

          <Card title="Life Areas" kicker="Balanced view">
            <div className="grid grid-cols-2 gap-2">
              {lifeAreas.map((area) => <div key={area} className="border border-white/10 p-3 text-xs text-white/65">{area}</div>)}
            </div>
          </Card>

          <section className="border border-white/10 bg-white/[0.045] p-5 lg:col-span-2">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">AI Next Move Panel</p>
            <h3 className="mb-4 text-sm font-semibold tracking-wide">Prototype intelligence</h3>
            <p className="text-sm leading-6 text-white/70">Based on your focus of <span className="text-white">{merged.focus}</span>, your next system move is to reduce the day into one stabilizing action, one advancement action, and one reset action. Future AI will connect calendar, email, goals, money, and routines.</p>
          </section>

          <Card title="Admin Preview" kicker="Future control room">
            <p className="text-sm leading-6 text-white/65">Admin tools will let you update sensitive data, connect calendar/email, manage income streams, and tune AI recommendations.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/55">
              {['Profile', 'Sensitive Data', 'Integrations', 'Goals', 'Income Streams', 'Routines', 'Calendar Sync', 'AI Settings'].map((item) => <div className="border border-white/10 p-3" key={item}>{item}</div>)}
            </div>
          </Card>
        </div>

        <footer className="mt-6 flex items-center gap-2 text-xs text-white/35"><CalendarClock size={14}/> Daily check-in set for {merged.checkInTime}</footer>
      </motion.div>
    </main>
  );
}

function IconLine({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="mb-4 flex items-start gap-3 border-b border-white/10 pb-4 last:border-0">
      <div className="mt-1 text-white/50">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">{label}</p>
        <p className="mt-1 text-sm leading-5 text-white/75">{value}</p>
      </div>
    </div>
  );
}
