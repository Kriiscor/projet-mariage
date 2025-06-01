import React, { useState } from 'react';
import RsvpForm, { RsvpFormData } from '../components/RsvpForm';
import '../App.css';

/**
 * Page de RSVP pour le mariage
 */
const RsvpPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Version simplifiée du service RSVP
  const submitRsvpForm = async (formData: RsvpFormData) => {
    return new Promise<{ success: boolean; message: string }>((resolve) => {
      setTimeout(() => {
        console.log('Données du formulaire:', formData);
        resolve({
          success: true,
          message: 'Votre réponse a été enregistrée avec succès !',
        });
      }, 1000);
    });
  };

  const handleSubmit = async (formData: RsvpFormData) => {
    setLoading(true);
    setNotification({ type: null, message: '' });

    try {
      const result = await submitRsvpForm(formData);

      if (result.success) {
        setNotification({
          type: 'success',
          message: result.message,
        });
      } else {
        setNotification({
          type: 'error',
          message: result.message,
        });
      }
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-6 bg-[#f8f5e6] relative overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-3xl relative">
        {/* En-tête avec image de fond et logo */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <div className="absolute top-4 left-4 z-10">
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

          <div className="w-full h-[200px] bg-gray-500"></div>

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl font-script text-white mb-4">Confirmez votre venue</h1>
            <p className="text-white text-sm max-w-md">
              Nous espérons que vous pourrez vous joindre à nous !<br />
              Remplissez le formulaire ci-dessous
            </p>
          </div>
        </div>

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
