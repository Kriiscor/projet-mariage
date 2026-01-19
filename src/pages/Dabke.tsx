import React from 'react';
import Seo from '../components/SEO';

const Dabke: React.FC = () => {
  return (
    <>
      <Seo
        title="La Dabké - Danse Traditionnelle Libanaise"
        description="Découvrez la dabké, cette danse traditionnelle libanaise qui unit les cœurs et célèbre la joie de vivre méditerranéenne lors de notre mariage."
      />
      <div className="min-h-screen pb-24 bg-gradient-to-b from-white via-[#f8f5e6] to-[#e8e2c7] text-gray-800">
        {/* Header */}
        <div className="">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
              <h1 className="mb-4 font-script text-5xl font-bold italic text-shadow">La Dabké</h1>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-black ">
                Découvrez la magie de la dabké, cette danse traditionnelle libanaise qui unit les
                cœurs et célèbre la joie de vivre méditerranéenne
              </p>
            </div>

            {/* Video Section */}
            <div className="mb-12 overflow-hidden rounded-lg border border-white/20 bg-black/30 shadow-xl backdrop-blur-sm">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/n7tix0znEH4"
                  title="Dabké - Danse Traditionnelle Libanaise"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Information Grid */}
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-lg border bg-white  sm:p-6  shadow-s p-6 text-center shadow-lg backdrop-blur-sm">
                <h3 className="mb-3 font-script text-2xl font-semibold">Esprit Communautaire</h3>
                <p className="text-black">
                  La dabké rassemble les générations dans une chaîne humaine, symbole d'unité et de
                  solidarité.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg border bg-white  sm:p-6  shadow-s p-6 text-center shadow-lg backdrop-blur-sm">
                <h3 className="mb-3 font-script text-2xl font-semibold">Rythmes Ancestraux</h3>
                <p className="text-black">
                  Chaque pas suit le battement du tambourin et de la flûte, transmettant l'âme du
                  Liban.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg border bg-white  sm:p-6  shadow-s p-6 text-center shadow-lg backdrop-blur-sm">
                <h3 className="mb-3 font-script text-2xl font-semibold">Célébration de Vie</h3>
                <p className="text-black">
                  Exprimant la joie des mariages et des fêtes, elle transforme chaque moment en
                  célébration.
                </p>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-12 rounded-lg border bg-white p-4 sm:p-6  shadow-s">
              <h2 className="mb-6 font-script text-3xl font-semibold italic text-shadow">
                L'Art de la Dabké
              </h2>
              <div className="prose prose-lg max-w-none text-black">
                <p className="mb-4">
                  La dabké (دبكة) est bien plus qu'une simple danse : c'est l'expression vivante de
                  l'identité libanaise et levantine. Cette danse folk traditionnelle, dont les
                  origines remontent à des siècles, unit les danseurs dans une chaîne humaine
                  rythmée qui symbolise la solidarité et l'appartenance communautaire.
                </p>
                <p className="mb-4">
                  Traditionnellement exécutée lors des mariages, des festivals et des célébrations,
                  la dabké varie selon les régions du Liban, chacune apportant ses propres pas et
                  mélodies. Le leader de la chaîne, appelé "ras" (tête), guide le groupe avec sa
                  créativité et son énergie, tandis que les autres danseurs suivent en harmonie.
                </p>
                <p>
                  À l'Hôtel L'Eterlou, nous célébrons cette richesse culturelle et vous invitons à
                  découvrir la beauté de cette tradition lors de vos séjours, créant des ponts entre
                  les cultures alpine et méditerranéenne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dabke;
