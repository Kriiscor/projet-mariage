import { addMonths, differenceInDays, differenceInHours, differenceInMonths } from 'date-fns';

export interface TimeLeft {
  months: number;
  days: number;
  hours: number;
}

// Date du mariage : 24 décembre 2025
const WEDDING_DATE = new Date(2025, 11, 24, 0, 0, 0); // Mois commence à 0, donc 11 = décembre

export const calculateTimeLeft = (): TimeLeft => {
  const now = new Date();

  // Calcul des mois complets
  const months = differenceInMonths(WEDDING_DATE, now);

  // Date après les mois complets
  const dateAfterMonths = addMonths(now, months);

  // Calcul des jours restants
  const days = differenceInDays(WEDDING_DATE, dateAfterMonths);

  // Calcul des heures
  const hours = differenceInHours(WEDDING_DATE, now) % 24;

  return {
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: Math.max(0, hours),
  };
};
