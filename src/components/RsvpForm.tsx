import React, { useState, useRef } from 'react';

/**
 * Interface des propriétés pour le composant RsvpForm
 */
interface RsvpFormProps {
  onSubmit: (formData: RsvpFormData) => void;
}

/**
 * Interface des données du formulaire RSVP
 */
export interface RsvpFormData {
  lastName: string;
  firstName: string;
  email: string;
  isAttending: boolean | null;
  guestCount: number;
  dinnerParticipation: boolean | null;
  dinnerChoice: 'raclette' | 'pierreChaudde' | null;
  dessertChoice: 'sorbet' | 'tarteMyrille' | null;
  brunchParticipation: boolean | null;
  needsAccommodation: boolean | null;
  accommodationDates: string;
  comments: string;
}

/**
 * Composant de formulaire RSVP pour le mariage
 */
const RsvpForm: React.FC<RsvpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RsvpFormData>({
    lastName: '',
    firstName: '',
    email: '',
    isAttending: null,
    guestCount: 1,
    dinnerParticipation: null,
    dinnerChoice: null,
    dessertChoice: null,
    brunchParticipation: null,
    needsAccommodation: null,
    accommodationDates: '',
    comments: '',
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'guestCount') {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 w-full ">
      {/* Nom et prénom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1 underline"
          >
            Nom de famille
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleTextChange}
            required
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
        <div className="text-center">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1 underline"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleTextChange}
            required
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Email */}
      <div className="text-center">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 underline">
          Adresse Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleTextChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {/* Présence et Nombre de personnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-1 underline">
            Serez-vous présent(e) ?
          </p>
          <div className="flex justify-center space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isAttending"
                checked={formData.isAttending === true}
                onChange={() => handleRadioChange('isAttending', true)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Oui</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isAttending"
                checked={formData.isAttending === false}
                onChange={() => handleRadioChange('isAttending', false)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Non</span>
            </label>
          </div>
        </div>
        <div className="text-center">
          <label
            htmlFor="guestCount"
            className="block text-sm font-medium text-gray-700 mb-1 underline"
          >
            Combien êtes vous ?
          </label>
          <div className="relative inline-block w-40">
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleSelectChange}
              className="w-full appearance-none px-3 py-2 bg-white border border-gray-300 rounded-md pr-8 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="1">Je viens seul</option>
              <option value="2">2 personnes</option>
              <option value="3">3 personnes</option>
              <option value="4">4 personnes</option>
              <option value="5">5 personnes</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Participation au dîner */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700 mb-1 underline">
          Voulez vous participez au repas du vendredi soir ? (à votre charge, 25€ par personne)
        </p>
        {/* <p className="text-sm text-blue-600 mb-2 cursor-pointer hover:underline">
          Pour voir les différents menus cliquez{' '}
          <a href="#" className="text-blue-600 font-medium">
            ici
          </a>
        </p> */}
        <div className="flex justify-center space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dinnerParticipation"
              checked={formData.dinnerParticipation === true}
              onChange={() => handleRadioChange('dinnerParticipation', true)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm">Oui</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="dinnerParticipation"
              checked={formData.dinnerParticipation === false}
              onChange={() => handleRadioChange('dinnerParticipation', false)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm">Non</span>
          </label>
        </div>
      </div>

      {/* Choix du menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-1 underline">
            Veuillez choisir le menu du repas du Samedi
          </p>
          <div className="flex flex-col items-center space-y-4">
            <label className="inline-flex items-start text-left cursor-pointer">
              <input
                type="radio"
                name="dinnerChoice"
                checked={formData.dinnerChoice === 'raclette'}
                onChange={() => handleRadioChange('dinnerChoice', 'raclette')}
                className="h-4 w-4 mt-1 flex-shrink-0 text-primary-600 focus:ring-primary-500"
              />
              <div className="ml-2 text-sm">
                <strong className="font-semibold">Mix Raclette / Fondue</strong>
                <p className="text-xs text-gray-600">
                  Fondue aux 3 fromages, Raclette au lait cru, Planche de charcuterie, Salade verte
                  et Pommes de terre.
                </p>
              </div>
            </label>
            <label className="inline-flex items-start text-left cursor-pointer">
              <input
                type="radio"
                name="dinnerChoice"
                checked={formData.dinnerChoice === 'pierreChaudde'}
                onChange={() => handleRadioChange('dinnerChoice', 'pierreChaudde')}
                className="h-4 w-4 mt-1 flex-shrink-0 text-primary-600 focus:ring-primary-500"
              />
              <div className="ml-2 text-sm">
                <strong className="font-semibold">Pierre Chaude aux 3 viandes</strong>
                <p className="text-xs text-gray-600">
                  (Boeuf, Volaille, Canard) avec sauces, frites maison, salade verte et légumes.
                </p>
              </div>
            </label>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-1 underline">
            Pareillement pour le dessert du Samedi
          </p>
          <div className="flex flex-col items-center space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="dessertChoice"
                checked={formData.dessertChoice === 'tarteMyrille'}
                onChange={() => handleRadioChange('dessertChoice', 'tarteMyrille')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <strong className="ml-2 text-sm">Tarte aux Myrtilles</strong>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="dessertChoice"
                checked={formData.dessertChoice === 'sorbet'}
                onChange={() => handleRadioChange('dessertChoice', 'sorbet')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <strong className="ml-2 text-sm">Sorbet Arrosé</strong>
            </label>
          </div>
        </div>
      </div>

      {/* Brunch */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700 mb-1 underline">
          Les mariés vous invite à un brunch le dimanche midi, serez vous présent ? (Brunch
          Barbecue)
        </p>
        <div className="flex justify-center space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="brunchParticipation"
              checked={formData.brunchParticipation === true}
              onChange={() => handleRadioChange('brunchParticipation', true)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm">Oui</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="brunchParticipation"
              checked={formData.brunchParticipation === false}
              onChange={() => handleRadioChange('brunchParticipation', false)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm">Non</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="brunchParticipation"
              checked={formData.brunchParticipation === null}
              onChange={() => handleRadioChange('brunchParticipation', null)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm">À confirmer</span>
          </label>
        </div>
      </div>

      {/* Hébergement et dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-1 underline">
            Avez-vous besoin d'un logement ?
          </p>
          <div className="flex justify-center space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="needsAccommodation"
                checked={formData.needsAccommodation === true}
                onChange={() => handleRadioChange('needsAccommodation', true)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Oui</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="needsAccommodation"
                checked={formData.needsAccommodation === false}
                onChange={() => handleRadioChange('needsAccommodation', false)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">Non</span>
            </label>
          </div>
        </div>
        {formData.needsAccommodation && (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700 mb-1 underline">
              Si besoin d'un logement quelles seraient vos dates ?
            </p>
            <div className="relative">
              <input
                type="text"
                name="accommodationDates"
                value={formData.accommodationDates}
                onChange={handleTextChange}
                placeholder="Exemple: du vendredi au dimanche"
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Commentaires */}
      <div className="text-center">
        <label
          htmlFor="comments"
          className="block text-sm font-medium text-gray-700 mb-1 underline"
        >
          Commentaires, Questions, Allergies, etc.
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          value={formData.comments}
          onChange={handleTextChange}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
        ></textarea>
      </div>

      {/* Bouton de soumission */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-6 py-2 border border-gray-400 rounded-md bg-[#f8f5e6] hover:bg-gray-100 text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          Soumettre le Formulaire
        </button>
      </div>
    </form>
  );
};

export default RsvpForm;
