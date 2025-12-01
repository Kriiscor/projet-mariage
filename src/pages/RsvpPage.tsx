import React, { useState } from 'react';
import RsvpForm, { RsvpFormData } from '../components/RsvpForm';
import { submitRsvpForm } from '../services/rsvpService';
import '../App.css';
import '../styles/RsvpPage.css';

/**
 * Page de RSVP pour le mariage
 */
const RsvpPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [pendingFormData, setPendingFormData] = useState<RsvpFormData | null>(null);

  const handleSubmit = async (formData: RsvpFormData) => {
    // Stocker les données et afficher la modale de consentement
    setPendingFormData(formData);
    setShowConsentModal(true);
  };

  const handleConfirmSubmit = async () => {
    if (!pendingFormData) return;

    setShowConsentModal(false);
    setLoading(true);
    setNotification({ type: null, message: '' });

    try {
      const result = await submitRsvpForm(pendingFormData);

      if (result.success) {
        setNotification({
          type: 'success',
          message: result.message,
        });
        setPendingFormData(null);
      } else {
        setNotification({
          type: 'error',
          message: result.message,
        });
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire RSVP:', error);
      setNotification({
        type: 'error',
        message: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelSubmit = () => {
    setShowConsentModal(false);
    setPendingFormData(null);
  };

  return (
    <div className="py-6 bg-gradient-to-b from-white via-[#f8f5e6] to-[#e8e2c7] relative overflow-x-hidden">
      {/* En-tête avec image de fond et logo */}
      <div className="relative mb-8 rounded-lg overflow-hidden max-w-7xl mx-auto">
        <div id="rsvp-header-image" className="absolute top-4 left-4 z-10">
          <div className="flex items-center">
            <div className="bg-black bg-opacity-70 p-2 rounded-full">
              <img
                src="/tryt-01.svg"
                alt="Logo"
                className="w-12 h-12"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="ml-2 text-white font-script text-xl">Coralie and Ralph</span>
          </div>
        </div>

        <div className="rsvp-header">
          <div className="rsvp-header-content">
            <h1 className="rsvp-header-title text-3xl">Confirmez votre venue</h1>
            <p className="rsvp-header-text text-sm max-w-md">
              Nous espérons que vous pourrez vous joindre à nous !<br />
              Remplissez le formulaire ci-dessous
            </p>
          </div>
        </div>
      </div>
      <div className="container bg-[#f8f5e6] p-10 max-w-7xl relative px-4">
        {notification.type && (
          <div
            className={`mb-6 p-4 rounded-md ${
              notification.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {notification.message}
          </div>
        )}

        <div className="bg-[#f8f5e6] border border-gray-200 rounded-lg p-6 shadow-sm relative">
          <RsvpForm onSubmit={handleSubmit} />
        </div>

        {/* Modale de consentement RGPD */}
        {showConsentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Protection de vos données
                  </h3>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p className="text-sm leading-relaxed">
                    Avant de valider votre réponse, nous souhaitons vous informer de l'utilisation
                    de vos données personnelles dans le cadre de notre mariage.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">📋 Données collectées</h4>
                    <ul className="text-sm space-y-1 ml-4 list-disc">
                      <li>Nom, prénom et adresse email</li>
                      <li>Confirmation de présence et nombre d'invités</li>
                      <li>Préférences alimentaires et choix de repas</li>
                      <li>Besoins d'hébergement et commentaires</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">✅ Utilisation des données</h4>
                    <ul className="text-sm space-y-1 ml-4 list-disc">
                      <li>Organisation et planification du mariage (traiteur, hébergement)</li>
                      <li>Communication des informations pratiques de l'événement</li>
                      <li>Gestion de la liste des invités</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">🔒 Protection et droits</h4>
                    <ul className="text-sm space-y-1 ml-4 list-disc">
                      <li>Vos données sont stockées de manière sécurisée</li>
                      <li>Elles ne seront ni vendues ni partagées avec des tiers</li>
                      <li>Elles seront supprimées après l'événement</li>
                      <li>Vous pouvez demander leur modification ou suppression à tout moment</li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-600 italic bg-gray-50 p-3 rounded">
                    En validant, vous consentez au traitement de vos données personnelles
                    conformément au RGPD (Règlement Général sur la Protection des Données).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={handleConfirmSubmit}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    J'accepte et je confirme
                  </button>
                  <button
                    onClick={handleCancelSubmit}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-4 text-center text-gray-700">Envoi en cours...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RsvpPage;
