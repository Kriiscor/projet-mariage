import { RsvpFormData } from '../components/RsvpForm';

// Configuration de l'API
const getApiUrl = () => {
  const envApiUrl = import.meta.env?.VITE_API_URL;
  if (!envApiUrl) {
    console.warn("VITE_API_URL n'est pas défini, utilisation de l'URL par défaut");
    return 'http://localhost:5000/api';
  }
  return envApiUrl;
};

const API_URL = getApiUrl();

/**
 * Service pour gérer les soumissions du formulaire RSVP
 */
export const submitRsvpForm = async (
  formData: RsvpFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Conversion des données pour correspondre au format de l'API
    const apiData = {
      lastName: formData.lastName,
      firstName: formData.firstName,
      email: formData.email,
      isAttending: formData.isAttending,
      guestCount: formData.guestCount,
      dinnerParticipation: formData.dinnerParticipation,
      dinnerChoice: formData.dinnerChoice,
      dessertChoice: formData.dessertChoice,
      brunchParticipation: formData.brunchParticipation,
      needsAccommodation: formData.needsAccommodation,
      accommodationDates: formData.accommodationDates,
      comments: formData.comments,
    };

    console.log('Envoi de la requête à:', API_URL);

    const response = await fetch(`${API_URL}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de la soumission du formulaire');
    }

    return {
      success: true,
      message: 'Votre réponse a été enregistrée avec succès !',
    };
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Une erreur est survenue lors de la soumission du formulaire. Veuillez réessayer.',
    };
  }
};
