export class HealthFacility {
  healthFacilityId: string;
  name: string;
  type: 'hospital' | 'clinic';
  hours: 24 | 12;
  // shifts: Shift[];
  shiftsPerDay: 1 | 2 | 3 | 4;
}
