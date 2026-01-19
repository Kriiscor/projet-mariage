import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8 pb-24 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-yellow-500 text-6xl mb-4">⚠</div>
        <h1 className="text-3xl font-playfair mb-4">Paiement annulé</h1>
        <p className="text-gray-700 mb-8">
          Votre paiement a été annulé. Aucun montant n'a été débité.
        </p>
        <button
          onClick={() => navigate('/cagnotte')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
};

export default PaymentCancel;
