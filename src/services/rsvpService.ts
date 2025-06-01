import { RsvpFormData } from '../components/RsvpForm';

/**
 * Service pour gérer les soumissions du formulaire RSVP
 */
export const submitRsvpForm = async (
  formData: RsvpFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Pas besoin de formatter accommodationDates car c'est une chaîne de caractères
    // et non un tableau de dates

    // Ici, vous intégrerez l'appel API réel vers votre backend
    // Exemple avec fetch:
    /*
    const response = await fetch('https://votre-api.com/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la soumission du formulaire');
    }
    
    const data = await response.json();
    return data;
    */

    // Pour l'instant, simulons une réponse réussie après un délai
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Données du formulaire:', formData);
        resolve({
          success: true,
          message: 'Votre réponse a été enregistrée avec succès !',
        });
      }, 1000);
    });
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de la soumission du formulaire. Veuillez réessayer.',
    };
  }
};
