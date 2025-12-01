import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStripeBalance } from '../services/paymentService';

const BalanceDisplay = () => {
  const {
    data: balance,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['stripeBalance'],
    queryFn: getStripeBalance,
    refetchInterval: 30000,
  });

  if (isLoading) {
    return (
      <div className="text-center p-4">
        <p>Chargement du solde...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        <p>Erreur : {error instanceof Error ? error.message : 'Erreur inconnue'}</p>
        <button onClick={() => refetch()} className="mt-2 underline">
          Réessayer
        </button>
      </div>
    );
  }

  if (!balance) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 h-full">
      <h2 className="text-2xl font-playfair mb-4 text-center">Solde de la Cagnotte</h2>

      <div className="space-y-4">
        <div className="border-b pb-3">
          <p className="text-gray-600 text-sm mb-1">Disponible</p>
          <p className="text-3xl font-bold text-green-600">{balance.totalAvailable.toFixed(2)} €</p>
        </div>

        <div className="border-b pb-3">
          <p className="text-gray-600 text-sm mb-1">En attente</p>
          <p className="text-2xl font-semibold text-yellow-600">
            {balance.totalPending.toFixed(2)} €
          </p>
        </div>

        <div className="pt-3">
          <p className="text-gray-600 text-sm mb-1">Total</p>
          <p className="text-2xl font-bold text-blue-600">
            {(balance.totalAvailable + balance.totalPending).toFixed(2)} €
          </p>
        </div>
        <div className="flex justify-center">Merci de votre participation !</div>
      </div>
    </div>
  );
};

export default BalanceDisplay;
