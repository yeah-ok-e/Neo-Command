export type OccupationType =
  | 'cashier'
  | 'corporate'
  | 'student'
  | 'founder'
  | 'creator'
  | 'freelancer'
  | 'parent'
  | 'athlete'
  | 'other';

export type CurrentFocus =
  | 'stabilize'
  | 'organize'
  | 'grow income'
  | 'build discipline'
  | 'build business'
  | 'improve health'
  | 'rebuild life'
  | 'manage family'
  | 'other';

export interface NeoProfile {
  name: string;
  email: string;
  occupation: OccupationType;
  customOccupation?: string;
  focus: CurrentFocus;
  topGoal: string;
  pressurePoint: string;
  checkInTime: string;
  monthlyIncome?: string;
  bills?: string;
  debt?: string;
  familyResponsibilities?: string;
  healthNotes?: string;
  emotionalState?: string;
  location?: string;
  createdAt: string;
}
