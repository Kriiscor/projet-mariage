import React from 'react';
import Seo from '../components/SEO';
import Footer from '../components/Footer';

const LegalMentions: React.FC = () => {
  return (
    <>
      <Seo
        title="Mentions Légales - Mariage de Coralie et Ralph"
        description="Mentions légales du site web du mariage de Coralie et Ralph. Éditeur, hébergeur, directeur de la publication et droit applicable."
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8f5e6] to-[#e8e2c7] py-12 px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-script text-gray-800 mb-8 text-center">
              Mentions Légales
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  1. Éditeur du site
                </h2>
                <p>Le présent site est édité par :</p>
                <p className="mt-4">
                  <strong>Dubail Corentin</strong>
                  <br />
                  4 allée de l'impératrice eugénie
                  <br />
                  91300 Massy
                  <br />
                  <strong>Email :</strong>{' '}
                  <a
                    href="mailto:NEPASENVOYERDEMAIL@GMAIL.COM"
                    className="text-blue-600 hover:underline"
                  >
                    NEPASENVOYERDEMAIL@GMAIL.COM
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  2. Hébergeur
                </h2>
                <p>Ce site est hébergé par :</p>
                <p className="mt-4">
                  <strong>Render Services, Inc.</strong>
                  <br />
                  525 Brannan Street, Suite 300
                  <br />
                  San Francisco, California 94107
                  <br />
                  États-Unis
                  <br />
                  <a
                    href="https://render.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    render.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  3. Directeur de la publication
                </h2>
                <p>
                  Le directeur de la publication du site est : <strong>Coralie et Ralph</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  4. Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
                  est protégé par les dispositions du Code de la propriété intellectuelle. Toute
                  reproduction, représentation, modification ou exploitation, totale ou partielle,
                  sans autorisation préalable écrite des titulaires des droits, est interdite et
                  constitue une contrefaçon.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  5. Limitation de responsabilité
                </h2>
                <p>
                  Les informations diffusées sur ce site sont fournies à titre indicatif. L'éditeur
                  s'efforce d'assurer l'exactitude et la mise à jour des informations, mais ne peut
                  garantir l'absence d'erreur, d'omission ou de défaut de mise à jour.
                </p>
                <p className="mt-4">
                  L'éditeur ne pourra être tenu responsable des dommages directs ou indirects
                  résultant de l'accès ou de l'utilisation de ce site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  6. Liens hypertextes
                </h2>
                <p>
                  Ce site peut contenir des liens vers d'autres sites. L'éditeur n'exerce aucun
                  contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La
                  création de liens hypertextes vers le présent site est soumise à l'accord
                  préalable de l'éditeur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  7. Données personnelles et cookies
                </h2>
                <p>
                  Les informations relatives au traitement des données personnelles et à
                  l'utilisation des cookies sont détaillées dans notre{' '}
                  <a href="/politique-confidentialite" className="text-blue-600 hover:underline">
                    Politique de confidentialité
                  </a>
                  {'.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  8. Droit applicable et juridiction compétente
                </h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de
                  litige, et à défaut d'accord amiable, les tribunaux français seront seuls
                  compétents pour connaître de ce litige.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  9. Contact
                </h2>
                <p>
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous
                  contacter à l'adresse suivante :
                </p>
                <p className="mt-4">
                  <strong>Email :</strong>{' '}
                  <a
                    href="mailto:NEPASENVOYERDEMAIL@GMAIL.COM"
                    className="text-blue-600 hover:underline"
                  >
                    NEPASENVOYERDEMAIL@GMAIL.COM
                  </a>
                </p>
              </section>

              <section className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  <strong>Dernière mise à jour :</strong> Décembre 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LegalMentions;
