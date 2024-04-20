export class Shift {
  id: string;
  userId: string;
  healthFacilityId: string;
  available: boolean;
  period: Period;
  duration: 6 | 8 | 12 | 24;
  startTime: Date;
  endTime: Date;
}

export type Period = 'morning' | 'afternoon' | 'night';
