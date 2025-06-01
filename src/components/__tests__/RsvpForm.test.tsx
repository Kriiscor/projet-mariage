import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RsvpForm from '../RsvpForm';

describe('RsvpForm', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('renders the form correctly', () => {
    render(<RsvpForm onSubmit={mockOnSubmit} />);
    
    // Vérifier que les éléments essentiels sont présents
    expect(screen.getByLabelText(/Nom de famille/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Prénom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Adresse Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Serez-vous présent\(e\) \?/i)).toBeInTheDocument();
    expect(screen.getByText(/Combien êtes vous \?/i)).toBeInTheDocument();
    expect(screen.getByText(/Voulez vous participez au repas du vendredi soir \?/i)).toBeInTheDocument();
    expect(screen.getByText(/Veuillez choisir le menu du repas du Samedi/i)).toBeInTheDocument();
    expect(screen.getByText(/Pareillement pour le dessert du Samedi/i)).toBeInTheDocument();
    expect(screen.getByText(/Les mariés vous invite à un brunch le dimanche midi/i)).toBeInTheDocument();
    expect(screen.getByText(/Avez-vous besoin d'un logement \?/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Commentaires ou Questions/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Soumettre le Formulaire/i })).toBeInTheDocument();
  });

  test('submits the form with correct data', async () => {
    render(<RsvpForm onSubmit={mockOnSubmit} />);
    
    // Remplir le formulaire
    userEvent.type(screen.getByLabelText(/Nom de famille/i), 'Dupont');
    userEvent.type(screen.getByLabelText(/Prénom/i), 'Jean');
    userEvent.type(screen.getByLabelText(/Adresse Email/i), 'jean.dupont@example.com');
    
    // Sélectionner les options
    fireEvent.click(screen.getByLabelText(/Oui/i, { selector: 'input[name="isAttending"]' }));
    
    const guestCountSelect = screen.getByRole('combobox');
    userEvent.selectOptions(guestCountSelect, '2');
    
    fireEvent.click(screen.getByLabelText(/Oui/i, { selector: 'input[name="dinnerParticipation"]' }));
    fireEvent.click(screen.getByLabelText(/Raclette/i));
    fireEvent.click(screen.getByLabelText(/Sorbet/i));
    fireEvent.click(screen.getByLabelText(/Oui/i, { selector: 'input[name="brunchParticipation"]' }));
    fireEvent.click(screen.getByLabelText(/Non/i, { selector: 'input[name="needsAccommodation"]' }));
    
    userEvent.type(screen.getByLabelText(/Commentaires ou Questions/i), 'Je suis impatient de vous voir !');
    
    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Soumettre le Formulaire/i }));
    
    // Vérifier que onSubmit a été appelé avec les bonnes données
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        lastName: 'Dupont',
        firstName: 'Jean',
        email: 'jean.dupont@example.com',
        isAttending: true,
        guestCount: 2,
        dinnerParticipation: true,
        dinnerChoice: 'raclette',
        dessertChoice: 'sorbet',
        brunchParticipation: true,
        needsAccommodation: false,
        accommodationDates: [],
        comments: 'Je suis impatient de vous voir !'
      });
    });
  });

  test('renders accommodation dates select when accommodation is needed', () => {
    render(<RsvpForm onSubmit={mockOnSubmit} />);
    
    // Initialement, le sélecteur de dates d'hébergement ne devrait pas être affiché
    expect(screen.queryByText(/Si besoin d'un logement quelles seraient vos dates \?/i)).not.toBeInTheDocument();
    
    // Cliquer sur "Oui" pour l'hébergement
    fireEvent.click(screen.getByLabelText(/Oui/i, { selector: 'input[name="needsAccommodation"]' }));
    
    // Maintenant, le sélecteur de dates d'hébergement devrait être affiché
    expect(screen.getByText(/Si besoin d'un logement quelles seraient vos dates \?/i)).toBeInTheDocument();
  });
}); 