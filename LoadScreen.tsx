import { motion } from 'framer-motion';

export function LoadScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_100%,44px_44px,44px_44px]" />
      <motion.div
        className="relative z-10 mx-auto max-w-md px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="mx-auto mb-8 h-24 w-24 border border-white/20 shadow-halo"
          animate={{ rotate: [0, 0, 45], scale: [1, 1.02, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-white/50">NEO Command</p>
        <h1 className="text-4xl font-semibold tracking-tight">Your personal command center for what comes next.</h1>
        <p className="mt-4 text-sm leading-6 text-white/60">NEO turns your work, goals, money, routines, and next moves into one simple daily operating system.</p>
        <button
          onClick={onComplete}
          className="mt-8 border border-white/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white/90"
        >
          Build My Command Center
        </button>
      </motion.div>
    </main>
  );
}
