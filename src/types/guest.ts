export interface Guest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAttending: boolean;
  guestCount: number;
  dinnerParticipation?: boolean;
  dinnerChoice?: string;
  dessertChoice?: string;
  brunchParticipation?: boolean;
  needsAccommodation?: boolean;
  accommodationDates?: string;
  comments?: string;
  createdAt: string;
  updatedAt: string;
}
