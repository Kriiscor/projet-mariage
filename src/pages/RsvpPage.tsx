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
