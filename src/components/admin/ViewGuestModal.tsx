import React from 'react';
import type { Guest } from '@/types/guest';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ViewGuestModalProps {
  guest: Guest;
  onClose: () => void;
}

const DetailItem: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div>
    <span className="font-semibold text-gray-600">{label} :</span>
    <span className="ml-2 text-gray-800">{value}</span>
  </div>
);

const ViewGuestModal: React.FC<ViewGuestModalProps> = ({ guest, onClose }) => {
  // Empêche la propagation du clic pour ne pas fermer la modale en cliquant dessus
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd MMMM yyyy 'à' HH:mm", { locale: fr });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Ferme la modale si on clique sur le fond
    >
      <div
        className="relative w-full max-w-2xl rounded-lg bg-white p-8 shadow-xl"
        onClick={handleModalContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl leading-none text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Détails de {guest.firstName} {guest.lastName}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Section Informations Générales */}
          <div className="space-y-3 rounded-lg border p-4">
            <h3 className="mb-2 border-b pb-1 font-bold text-lg text-indigo-600">Général</h3>
            <DetailItem label="Email" value={guest.email} />
            <DetailItem label="Présence" value={guest.isAttending ? '✅ Oui' : '❌ Non'} />
            {guest.isAttending && <DetailItem label="Nombre d'invités" value={guest.guestCount} />}
          </div>

          {/* Section Repas */}
          {guest.isAttending && (
            <div className="space-y-3 rounded-lg border p-4">
              <h3 className="mb-2 border-b pb-1 font-bold text-lg text-indigo-600">Repas</h3>
              <DetailItem
                label="Participation Dîner"
                value={guest.dinnerParticipation ? '✅ Oui' : '❌ Non'}
              />
              {guest.dinnerParticipation && (
                <>
                  <DetailItem label="Choix Plat" value={guest.dinnerChoice || 'Non spécifié'} />
                  <DetailItem label="Choix Dessert" value={guest.dessertChoice || 'Non spécifié'} />
                </>
              )}
              <DetailItem
                label="Participation Brunch"
                value={guest.brunchParticipation ? '✅ Oui' : '❌ Non'}
              />
            </div>
          )}

          {/* Section Logement */}
          {guest.isAttending && (
            <div className="space-y-3 rounded-lg border p-4">
              <h3 className="mb-2 border-b pb-1 font-bold text-lg text-indigo-600">Logement</h3>
              <DetailItem
                label="Besoin d'un logement"
                value={guest.needsAccommodation ? '✅ Oui' : '❌ Non'}
              />
              {guest.needsAccommodation && (
                <DetailItem label="Dates" value={guest.accommodationDates || 'Non spécifié'} />
              )}
            </div>
          )}

          {/* Section Commentaires */}
          <div className="space-y-3 rounded-lg border p-4 md:col-span-2">
            <h3 className="mb-2 border-b pb-1 font-bold text-lg text-indigo-600">Commentaires</h3>
            <p className="text-gray-700">{guest.comments || 'Aucun commentaire.'}</p>
          </div>
        </div>

        <p className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
          Réponse soumise le : {formatDate(guest.createdAt)}
        </p>

        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewGuestModal;
