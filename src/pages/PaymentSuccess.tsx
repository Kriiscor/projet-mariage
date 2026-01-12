import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Vous pouvez vérifier le statut du paiement ici si nécessaire
    if (sessionId) {
      console.log('Session ID:', sessionId);
      // TODO: Optionnel - Vérifier le statut du paiement via votre API
    }
  }, [sessionId]);

  return (
    <div className="container mx-auto p-8 pb-24 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-playfair mb-4">Paiement réussi !</h1>
        <p className="text-gray-700 mb-8">
          Merci pour votre contribution à notre cagnotte de mariage !
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Retour à l'accueil
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
