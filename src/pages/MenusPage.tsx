import React from 'react';

/**
 * Interface pour un plat individuel
 */
interface Dish {
  name: string;
  description: string;
}

/**
 * Interface pour un menu
 */
interface Menu {
  title: string;
  entree?: Dish;
  platPrincipal?: Dish;
  dessert?: Dish;
}

/**
 * Page des menus du mariage
 */
const MenusPage: React.FC = () => {
  // Données des menus
  const menuMariage: Menu = {
    title: 'Menu du Mariage',
    entree: {
      name: 'Entrée',
      description: 'Lorem ipsum dolor sit amet ou Lorem ipsum dolor sit amet',
    },
    platPrincipal: {
      name: 'Plat principal',
      description: 'Lorem ipsum dolor sit amet ou Lorem ipsum dolor sit amet',
    },
    dessert: {
      name: 'Desserts',
      description: 'Lorem ipsum dolor sit amet ou Lorem ipsum dolor sit amet',
    },
  };

  const menuVendredi: Menu = {
    title: 'Menu du Vendredi',
    entree: {
      name: 'Entrée',
      description: 'Lorem ipsum dolor sit amet',
    },
    platPrincipal: {
      name: 'Plat principal',
      description: 'Lorem ipsum dolor sit amet',
    },
    dessert: {
      name: 'Dessert',
      description: 'Lorem ipsum dolor sit amet',
    },
  };

  const menuDimanche: Menu = {
    title: 'Menu du dimanche',
    entree: {
      name: 'Entrée',
      description: 'Lorem ipsum dolor sit amet',
    },
    platPrincipal: {
      name: 'Plat principal',
      description: 'Lorem ipsum dolor sit amet',
    },
    dessert: {
      name: 'Dessert',
      description: 'Lorem ipsum dolor sit amet',
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f5e6] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-script text-gray-800 mb-2">Mariage de Coralie et Ralph</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-script text-gray-700 italic">Les menus</h2>
        </div>

        {/* Menu principal du mariage */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 relative">
          {/* Décorations SVG aux coins */}
          <div className="absolute top-4 left-4">
            <img
              src="/images/Group 12.svg"
              alt="Décoration florale"
              className="w-16 h-16 opacity-60"
            />
          </div>
          <div className="absolute top-4 right-4">
            <img
              src="/images/Group 12.svg"
              alt="Décoration florale"
              className="w-16 h-16 opacity-60 transform scale-x-[-1]"
            />
          </div>

          <h3 className="text-3xl font-script text-center text-gray-800 mb-8 underline">
            {menuMariage.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Entrée */}
            <div className="text-center">
              <h4 className="text-xl font-script text-gray-700 mb-3 underline italic">
                {menuMariage.entree?.name}
              </h4>
              <p className="text-gray-600 mb-4">{menuMariage.entree?.description}</p>
              {/* Images de plats (placeholder) */}
              <div className="flex justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Plat principal */}
            <div className="text-center">
              <h4 className="text-xl font-script text-gray-700 mb-3 underline italic">
                {menuMariage.platPrincipal?.name}
              </h4>
              <p className="text-gray-600 mb-4">{menuMariage.platPrincipal?.description}</p>
              {/* Images de plats (placeholder) */}
              <div className="flex justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Desserts - centré */}
          <div className="text-center mt-8">
            <h4 className="text-xl font-script text-gray-700 mb-3 underline italic">
              {menuMariage.dessert?.name}
            </h4>
            <p className="text-gray-600 mb-4">{menuMariage.dessert?.description}</p>
            {/* Images de desserts (placeholder) */}
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Décorations SVG aux coins inférieurs */}
          <div className="absolute bottom-4 left-4">
            <img
              src="/images/Group 12.svg"
              alt="Décoration florale"
              className="w-16 h-16 opacity-60 transform rotate-180"
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <img
              src="/images/Group 12.svg"
              alt="Décoration florale"
              className="w-16 h-16 opacity-60 transform rotate-180 scale-x-[-1]"
            />
          </div>
        </div>

        {/* Menus vendredi et dimanche */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Menu du Vendredi */}
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <h3 className="text-2xl font-script text-center text-gray-800 mb-6 underline">
              {menuVendredi.title}
            </h3>

            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-script text-gray-700 mb-2 underline italic">
                  {menuVendredi.entree?.name}
                </h4>
                <p className="text-gray-600 text-sm">{menuVendredi.entree?.description}</p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-script text-gray-700 mb-2 underline italic">
                  {menuVendredi.platPrincipal?.name}
                </h4>
                <p className="text-gray-600 text-sm">{menuVendredi.platPrincipal?.description}</p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-script text-gray-700 mb-2 underline italic">
                  {menuVendredi.dessert?.name}
                </h4>
                <p className="text-gray-600 text-sm">{menuVendredi.dessert?.description}</p>
              </div>
            </div>

            {/* Décoration en bas */}
            <div className="flex justify-center mt-6">
              <img src="/images/Group 14.svg" alt="Décoration" className="w-24 h-6 opacity-60" />
            </div>
          </div>

          {/* Menu du Dimanche */}
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <h3 className="text-2xl font-script text-center text-gray-800 mb-6 underline">
              {menuDimanche.title}
            </h3>

            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-lg font-script text-gray-700 mb-2 underline italic">
                  {menuDimanche.entree?.name}
                </h4>
                <p className="text-gray-600 text-sm">{menuDimanche.entree?.description}</p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-script text-gray-700 mb-2 underline italic">
                  {menuDimanche.platPrincipal?.name}
                </h4>
                <p className="text-gray-600 text-sm">{menuDimanche.platPrincipal?.description}</p>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-script text-gray-700 mb-2 underline italic">
                  {menuDimanche.dessert?.name}
                </h4>
                <p className="text-gray-600 text-sm">{menuDimanche.dessert?.description}</p>
              </div>
            </div>

            {/* Décoration en bas */}
            <div className="flex justify-center mt-6">
              <img src="/images/Group 14.svg" alt="Décoration" className="w-24 h-6 opacity-60" />
            </div>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenusPage;
