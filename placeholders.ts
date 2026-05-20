import type { NeoProfile } from '../types';

export const placeholderProfile: NeoProfile = {
  name: 'New Operator',
  email: 'operator@example.com',
  occupation: 'corporate',
  focus: 'organize',
  topGoal: 'Build a cleaner, calmer, more productive life system.',
  pressurePoint: 'Too many moving parts and no single place to see the next move.',
  checkInTime: '8:00 AM',
  monthlyIncome: '$3,500',
  bills: '$2,400 estimated monthly obligations',
  debt: 'Not added yet',
  familyResponsibilities: 'Not added yet',
  healthNotes: 'Not added yet',
  emotionalState: 'Not added yet',
  location: 'Not added yet',
  createdAt: new Date().toISOString(),
};

export const lifeAreas = ['Work', 'Money', 'Body', 'Relationships / Family', 'Learning', 'Environment'];

export const occupationLabels: Record<string, string> = {
  cashier: 'Cashier / Service Worker',
  corporate: 'Corporate / Professional',
  student: 'Student',
  founder: 'Founder / Business Owner',
  creator: 'Creator',
  freelancer: 'Freelancer',
  parent: 'Parent / Household Operator',
  athlete: 'Athlete',
  other: 'Other',
};
