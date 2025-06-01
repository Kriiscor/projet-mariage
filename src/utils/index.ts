export interface TimeLeft {
  months: number;
  days: number;
  hours: number;
}

/**
 * Calcule le temps restant jusqu'à la date du mariage (6 septembre 2025)
 */
export const calculateTimeLeft = (): TimeLeft => {
  const weddingDate = new Date('2025-09-06T16:00:00');
  const now = new Date();

  // Différence en millisecondes
  const difference = weddingDate.getTime() - now.getTime();

  // Si la date est passée, retourner 0 pour toutes les valeurs
  if (difference <= 0) {
    return {
      months: 0,
      days: 0,
      hours: 0,
    };
  }

  // Calculer les mois, jours et heures restants
  const monthsInMs = 1000 * 60 * 60 * 24 * 30.44; // Approximation moyenne d'un mois
  const daysInMs = 1000 * 60 * 60 * 24;
  const hoursInMs = 1000 * 60 * 60;

  const months = Math.floor(difference / monthsInMs);
  const remainingAfterMonths = difference % monthsInMs;

  const days = Math.floor(remainingAfterMonths / daysInMs);
  const remainingAfterDays = remainingAfterMonths % daysInMs;

  const hours = Math.floor(remainingAfterDays / hoursInMs);

  return {
    months,
    days,
    hours,
  };
};
