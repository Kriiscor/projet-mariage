import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Guest } from '../../types/guest';
import { updateGuest } from '../../services/guestService';

interface EditGuestModalProps {
  guest: Guest;
  onClose: () => void;
}

const Input = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input ref={ref} {...props} className="w-full rounded border border-gray-300 p-2" />
));

const Textarea = React.forwardRef<HTMLTextAreaElement, any>((props, ref) => (
  <textarea ref={ref} {...props} rows={3} className="w-full rounded border border-gray-300 p-2" />
));

const Select = React.forwardRef<HTMLSelectElement, any>((props, ref) => (
  <select ref={ref} {...props} className="w-full rounded border border-gray-300 p-2" />
));

const Checkbox = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input
    type="checkbox"
    ref={ref}
    {...props}
    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
  />
));

const EditGuestModal: React.FC<EditGuestModalProps> = ({ guest, onClose }) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Guest>({
    defaultValues: guest,
  });

  const updateMutation = useMutation({
    mutationFn: updateGuest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guests'] });
      onClose();
    },
    onError: (error) => {
      alert('Erreur lors de la mise à jour : ' + error.message);
    },
  });

  const onSubmit = (data: Guest) => {
    // S'assurer que l'ID est présent
    if (!guest._id) {
      alert('Erreur : ID de l\'invité manquant');
      return;
    }

    // Convertir les valeurs numériques et s'assurer que l'ID est inclus
    const formData = {
      ...data,
      _id: guest._id,
      guestCount: Number(data.guestCount),
    };
    
    console.log('Données envoyées pour mise à jour:', formData);
    updateMutation.mutate(formData);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-lg bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="mb-6 text-2xl font-bold">
          Modifier la réponse de {guest.firstName} {guest.lastName}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-h-[70vh] space-y-4 overflow-y-auto pr-4"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label>Prénom</label>
              <Input {...register('firstName', { required: 'Le prénom est requis' })} />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>
            <div>
              <label>Nom</label>
              <Input {...register('lastName', { required: 'Le nom est requis' })} />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label>Email</label>
            <Input
              {...register('email', {
                required: "L'email est requis",
                pattern: { value: /^\S+@\S+$/i, message: 'Email invalide' },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label>Sera présent</label>
              <Controller
                name="isAttending"
                control={control}
                render={({ field }) => <Checkbox {...field} checked={field.value} />}
              />
            </div>
            <div>
              <label>Nombre d'invités</label>
              <Input
                type="number"
                {...register('guestCount', {
                  required: 'Champ requis',
                  min: { value: 0, message: 'Valeur positive requise' },
                })}
              />
              {errors.guestCount && <p className="text-red-500">{errors.guestCount.message}</p>}
            </div>
          </div>

          <fieldset className="rounded border p-4">
            <legend className="px-2 font-semibold">Repas</legend>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label>Participe au dîner</label>
                <Controller
                  name="dinnerParticipation"
                  control={control}
                  render={({ field }) => <Checkbox {...field} checked={field.value} />}
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Participe au brunch</label>
                <Controller
                  name="brunchParticipation"
                  control={control}
                  render={({ field }) => <Checkbox {...field} checked={field.value} />}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label>Choix plat</label>
                <Select {...register('dinnerChoice')}>
                  <option value="">-- Choisir un plat --</option>
                  <option value="raclette">Raclette</option>
                  <option value="pierreChaudde">Pierre Chaude</option>
                </Select>
              </div>
              <div>
                <label>Choix dessert</label>
                <Select {...register('dessertChoice')}>
                  <option value="">-- Choisir un dessert --</option>
                  <option value="sorbet">Sorbet</option>
                  <option value="tarteMyrille">Tarte aux Myrtilles</option>
                </Select>
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded border p-4">
            <legend className="px-2 font-semibold">Logement</legend>
            <div className="flex items-center gap-2">
              <label>Besoin d'un logement</label>
              <Controller
                name="needsAccommodation"
                control={control}
                render={({ field }) => <Checkbox {...field} checked={field.value} />}
              />
            </div>
            <div className="mt-4">
              <label>Dates</label>
              <Input {...register('accommodationDates')} />
            </div>
          </fieldset>

          <div>
            <label>Commentaires</label>
            <Textarea {...register('comments')} />
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-300 px-4 py-2 font-bold hover:bg-gray-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="rounded bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? 'Sauvegarde...' : 'Sauvegarder'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGuestModal;
