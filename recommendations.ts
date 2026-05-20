import type { NeoProfile } from '../types';

export function getPriorities(profile: NeoProfile): string[] {
  const pressure = profile.pressurePoint || 'the biggest point of friction';
  const goal = profile.topGoal || 'your top goal';
  return [
    `Name the one action that reduces ${pressure.toLowerCase()} today.`,
    `Move ${goal.toLowerCase()} forward for 25 focused minutes.`,
    `Complete your ${profile.checkInTime || 'daily'} check-in and reset tomorrow's first move.`,
  ];
}

export function getNextMove(profile: NeoProfile): string {
  if (profile.focus === 'grow income') return 'Identify one income opportunity you can message, apply to, sell, or post about today.';
  if (profile.focus === 'improve health') return 'Lock one body anchor today: walk, lift, meal prep, water, or sleep reset.';
  if (profile.focus === 'build business') return 'Push one visible proof asset: offer, outreach, content, product page, or customer follow-up.';
  if (profile.focus === 'manage family') return 'Stabilize the household first: calendar, meals, pickups, bills, and one calm family touchpoint.';
  if (profile.focus === 'rebuild life') return 'Do the smallest move that restores order: clean space, check money, apply, call, document, or schedule.';
  return 'Reduce the day to three moves: stabilize, advance, reset.';
}

export function getMilestone(profile: NeoProfile): string {
  return `In 30 days: make visible progress on “${profile.topGoal || 'your top goal'}” with a weekly review trail.`;
}
