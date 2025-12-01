import axios from 'axios';

const API_URL =
  process.env.REACT_APP_API_URL || process.env.VITE_API_URL || 'http://localhost:5000/api';

const paymentApi = axios.create({
  baseURL: API_URL,
});

interface PaymentIntentResponse {
  clientSecret: string;
}

export interface StripeBalance {
  available: Array<{
    amount: number;
    currency: string;
    sourceTypes: Record<string, number>;
  }>;
  pending: Array<{
    amount: number;
    currency: string;
    sourceTypes: Record<string, number>;
  }>;
  totalAvailable: number;
  totalPending: number;
}

/**
 * Crée un Payment Intent Stripe (ancienne méthode, conservée pour compatibilité)
 *
 * @param amount - Montant en euros
 * @param currency - Devise (optionnel, par défaut: 'eur')
 * @returns Client secret pour Stripe Elements
 */
export const createPaymentIntent = async (
  amount: number,
  currency: string = 'eur'
): Promise<PaymentIntentResponse> => {
  try {
    const response = await paymentApi.post('/payments/create-payment-intent', {
      amount,
      currency,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Failed to create payment intent');
  }
};

/**
 * Crée une Checkout Session Stripe et retourne l'URL de redirection
 *
 * @param amount - Montant en euros
 * @param currency - Devise (optionnel, par défaut: 'eur')
 * @returns URL de checkout Stripe
 * @throws Error si la création échoue
 */
export const createCheckoutSession = async (
  amount: number,
  currency: string = 'eur'
): Promise<string> => {
  try {
    const response = await paymentApi.post('/payments/create-checkout-session', {
      amount,
      currency,
    });

    const data = response.data;

    if (!data.success) {
      throw new Error(data.error || 'Erreur lors de la création de la session de paiement');
    }

    if (!data.message) {
      throw new Error('URL de checkout non disponible');
    }

    return data.message; // Retourne directement l'URL de checkout
  } catch (error: any) {
    console.error('Error creating checkout session:', error);

    // Gestion des erreurs axios
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }

    throw new Error(error.message || 'Erreur lors de la création de la session de paiement');
  }
};

export const getStripeBalance = async (): Promise<StripeBalance> => {
  try {
    const response = await paymentApi.get('/payments/balance');

    if (!response.data.success) {
      throw new Error(response.data.error || 'Erreur lors de la récupération du solde');
    }

    return response.data.data;
  } catch (error: any) {
    console.error('Error fetching Stripe balance:', error);

    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }

    throw new Error(error.message || 'Erreur lors de la récupération du solde');
  }
};
