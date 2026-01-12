import type { Guest } from '@/types/guest';
import axios from 'axios';
// Interface pour typer la réponse de l'API
interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
  error?: string;
}

// Avec une application créée via Create React App, les variables d'environnement
// doivent commencer par REACT_APP_
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const guestApi = axios.create({
  baseURL: `${API_URL}/guests`,
});

/**
 * Fetches all guests from the API.
 */
export const getGuests = async (): Promise<Guest[]> => {
  const response = await guestApi.get<ApiResponse<Guest[]>>('/');
  return response.data.data;
};

/**
 * Updates a specific guest.
 * @param guest - The guest data to update.
 */
export const updateGuest = async (guest: Partial<Guest> & { _id: string }): Promise<Guest> => {
  // On sépare l'_id du reste des données de l'invité
  const { _id, ...updateData } = guest;

  // On envoie la requête PUT avec l'id dans l'URL, et uniquement les données à modifier dans le corps
  const response = await guestApi.put<ApiResponse<Guest>>(`/${_id}`, updateData);

  return response.data.data;
};

/**
 * Deletes a guest by their ID.
 * @param id - The ID of the guest to delete.
 */
export const deleteGuest = async (id: string): Promise<void> => {
  await guestApi.delete(`/${id}`);
};
