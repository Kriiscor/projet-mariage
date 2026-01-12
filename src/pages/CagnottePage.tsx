import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createCheckoutSession } from '../services/paymentService';
import BalanceDisplay from '../components/BalanceDisplay';
import Seo from '../components/SEO';
import Footer from '../components/Footer';

interface IFormInput {
  name: string;
  amount: number;
}

const CagnottePage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const checkoutUrl = await createCheckoutSession(data.amount);
      globalThis.window.location.href = checkoutUrl;
    } catch (err: any) {
      setError(err.message || 'Erreur lors de la création du paiement');
      setLoading(false);
    }
  };

  const presetAmounts = [20, 50, 100, 200];

  return (
    <>
      <Seo
        title="Cagnotte de Mariage - Coralie et Ralph"
        description="Votre présence est le plus beau des cadeaux. Si vous souhaitez participer à notre lune de miel, voici notre cagnotte de mariage. Paiement sécurisé par Stripe."
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8f5e6] to-[#e8e2c7] py-12 px-4 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-6xl">💝</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair text-gray-800 mb-4 drop-shadow-lg">
            Notre Cagnotte de Mariage
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed italic">
            Votre présence est le plus beau des cadeaux. Si vous souhaitez néanmoins participer à
            notre lune de miel, voici notre cagnotte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <BalanceDisplay />
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300"></div>

            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-200 rounded-full blur-2xl"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold mb-3 ml-1"
                >
                  <span className="text-pink-500 mr-2">✨</span> Votre nom
                </label>
                <input
                  id="name"
                  {...register('name', { required: 'Le nom est requis' })}
                  className="w-full py-3 px-4 bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="Entrez votre nom"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 ml-1 flex items-center">
                    <span className="mr-1">⚠️</span> {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="amount"
                  className="block text-gray-700 text-sm font-semibold mb-3 ml-1"
                >
                  <span className="text-pink-500 mr-2">💎</span> Montant (€)
                </label>
                <input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0.50"
                  {...register('amount', {
                    required: 'Le montant est requis',
                    valueAsNumber: true,
                    min: { value: 0.5, message: 'Le montant minimum est de 0.50€' },
                  })}
                  className="w-full py-3 px-4 bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="0.00"
                />
                <div className="flex flex-wrap gap-3 mt-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setValue('amount', amount)}
                      className="flex-1 min-w-[80px] bg-gradient-to-br from-pink-100 to-rose-50 hover:from-pink-200 hover:to-rose-100 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-pink-200 hover:border-pink-300"
                    >
                      {amount}€
                    </button>
                  ))}
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-2 ml-1 flex items-center">
                    <span className="mr-1">⚠️</span> {errors.amount.message}
                  </p>
                )}
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 text-red-700 rounded-xl flex items-center">
                  <span className="text-xl mr-2">❌</span> <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 hover:from-pink-600 hover:via-rose-500 hover:to-amber-500 disabled:from-gray-400 disabled:via-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Redirection vers le paiement...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">💝</span> Faire un don
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-600 text-sm">
          <p className="flex items-center justify-center">
            <span className="mr-2">🔒</span> Paiement sécurisé par Stripe
          </p>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default CagnottePage;
