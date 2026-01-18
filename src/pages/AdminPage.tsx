import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getGuests, deleteGuest } from '../services/guestService';
import type { Guest } from '../types/guest';
import ViewGuestModal from '../components/admin/ViewGuestModal';
import EditGuestModal from '../components/admin/EditGuestModal';
import ChatBot from '../components/ChatBot';

// Composant pour une carte de statistique
const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({
  title,
  value,
  icon,
}) => (
  <div className="flex items-center rounded-lg bg-white p-4 shadow">
    <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-500">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

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
      toast.success('Invité supprimé avec succès !');
    },
    onError: (error) => {
      toast.error(`Erreur lors de la suppression : ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
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

  const guestList = Array.isArray(guests) ? guests : [];
  const attendingGuests = guestList.filter((g) => g.isAttending);

  // Calcul des statistiques
  const totalResponses = guestList.length;
  const totalAttending = attendingGuests.length;
  const totalGuestCount = attendingGuests.reduce((sum, g) => sum + g.guestCount, 0);
  const brunchParticipants = attendingGuests.filter((g) => g.brunchParticipation).length;
  const dinnerParticipants = attendingGuests.filter((g) => g.dinnerParticipation).length;

  const dinnerChoices = attendingGuests.reduce((acc, guest) => {
    if (guest.dinnerChoice) {
      acc[guest.dinnerChoice] = (acc[guest.dinnerChoice] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container mx-auto p-4 font-sans md:p-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Tableau de Bord</h1>

      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Section des statistiques */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Réponses Totales" value={totalResponses} icon={<span>📊</span>} />
            <StatCard
              title="Participants (Total)"
              value={`${totalAttending} (${totalGuestCount} pers.)`}
              icon={<span>👥</span>}
            />
            <StatCard
              title="Participants au Brunch"
              value={brunchParticipants}
              icon={<span>🥐</span>}
            />
            <StatCard
              title="Participants au Dîner"
              value={dinnerParticipants}
              icon={<span>🍽️</span>}
            />
            {Object.entries(dinnerChoices).map(([choice, count]) => (
              <StatCard
                key={choice}
                title={`Menu: ${choice}`}
                value={count}
                icon={<span>🍽️</span>}
              />
            ))}
          </div>

          <h2 className="mb-8 text-2xl font-bold text-gray-800">Liste des Invités</h2>

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
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {guest.email}
                    </td>
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
        </div>

        <div className="lg:col-span-1">
          <ChatBot />
        </div>
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
