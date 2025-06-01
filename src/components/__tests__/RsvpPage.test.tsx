import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RsvpPage from '../../pages/RsvpPage';
import { submitRsvpForm } from '../../services/rsvpService';

// Mock du service RSVP
jest.mock('../services/rsvpService');
const mockSubmitRsvpForm = submitRsvpForm as jest.MockedFunction<typeof submitRsvpForm>;

describe('RsvpPage', () => {
  beforeEach(() => {
    mockSubmitRsvpForm.mockClear();
  });

  test('renders the RSVP page correctly', () => {
    render(<RsvpPage />);
    
    // Vérifier que les éléments de la page sont présents
    expect(screen.getByText(/Notre Mariage/i)).toBeInTheDocument();
    expect(screen.getByText(/Marie & Jean/i)).toBeInTheDocument();
    expect(screen.getByText(/Nous serions ravis de votre présence/i)).toBeInTheDocument();
    
    // Vérifier que le formulaire est présent
    expect(screen.getByLabelText(/Nom de famille/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Prénom/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Soumettre le Formulaire/i })).toBeInTheDocument();
  });

  test('shows success notification on successful form submission', async () => {
    // Configuration du mock pour simuler une soumission réussie
    mockSubmitRsvpForm.mockResolvedValueOnce({
      success: true,
      message: 'Votre réponse a été enregistrée avec succès !',
    });

    render(<RsvpPage />);
    
    // Remplir le formulaire avec les données minimales requises
    fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: 'Dupont' } });
    fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: 'Jean' } });
    fireEvent.change(screen.getByLabelText(/Adresse Email/i), { target: { value: 'jean.dupont@example.com' } });
    
    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Soumettre le Formulaire/i }));
    
    // Vérifier que le service a été appelé
    await waitFor(() => {
      expect(mockSubmitRsvpForm).toHaveBeenCalledTimes(1);
    });
    
    // Vérifier que la notification de succès est affichée
    expect(screen.getByText('Votre réponse a été enregistrée avec succès !')).toBeInTheDocument();
  });

  test('shows error notification on failed form submission', async () => {
    // Configuration du mock pour simuler une soumission échouée
    mockSubmitRsvpForm.mockResolvedValueOnce({
      success: false,
      message: 'Une erreur est survenue lors de la soumission du formulaire.',
    });

    render(<RsvpPage />);
    
    // Remplir le formulaire avec les données minimales requises
    fireEvent.change(screen.getByLabelText(/Nom de famille/i), { target: { value: 'Dupont' } });
    fireEvent.change(screen.getByLabelText(/Prénom/i), { target: { value: 'Jean' } });
    fireEvent.change(screen.getByLabelText(/Adresse Email/i), { target: { value: 'jean.dupont@example.com' } });
    
    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Soumettre le Formulaire/i }));
    
    // Vérifier que le service a été appelé
    await waitFor(() => {
      expect(mockSubmitRsvpForm).toHaveBeenCalledTimes(1);
    });
    
    // Vérifier que la notification d'erreur est affichée
    expect(screen.getByText('Une erreur est survenue lors de la soumission du formulaire.')).toBeInTheDocument();
  });
}); 