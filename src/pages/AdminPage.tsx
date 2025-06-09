import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getGuests, deleteGuest } from '../services/guestService';
import type { Guest } from '../types/guest';
import ViewGuestModal from '../components/admin/ViewGuestModal';
import EditGuestModal from '../components/admin/EditGuestModal';

// Je vais créer ces composants de modal dans une prochaine étape
// import EditGuestModal from './EditGuestModal';

const AdminPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const {
    data: guests,
    isLoading,
    isError,
  } = useQuery<Guest[]>({
    queryKey: ['guests'],
    queryFn: getGuests,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteGuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guests'] });
    },
  });

  const handleView = (guest: Guest) => {
    setSelectedGuest(guest);
    setViewModalOpen(true);
  };

  const handleEdit = (guest: Guest) => {
    setSelectedGuest(guest);
    setEditModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette réponse ?')) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) {
    return <div className="p-4">Chargement des réponses...</div>;
  }

  if (isError) {
    return <div className="p-4 text-red-500">Erreur lors du chargement des données.</div>;
  }

  // S'assurer que les données sont bien un tableau avant de les afficher
  const guestList = Array.isArray(guests) ? guests : [];

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Réponses des Invités</h1>

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Nom
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Présence
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Nb. Invités
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Email
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {guestList.map((guest) => (
              <tr key={guest._id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{`${guest.firstName} ${guest.lastName}`}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {guest.isAttending ? (
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      Oui
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                      Non
                    </span>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {guest.guestCount}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{guest.email}</td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button
                    onClick={() => handleView(guest)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Voir
                  </button>
                  <button
                    onClick={() => handleEdit(guest)}
                    className="ml-4 text-yellow-600 hover:text-yellow-900"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(guest._id)}
                    className="ml-4 text-red-600 hover:text-red-900"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isViewModalOpen && selectedGuest && (
        <ViewGuestModal guest={selectedGuest} onClose={() => setViewModalOpen(false)} />
      )}

      {isEditModalOpen && selectedGuest && (
        <EditGuestModal guest={selectedGuest} onClose={() => setEditModalOpen(false)} />
      )}
    </div>
  );
};

export default AdminPage;
