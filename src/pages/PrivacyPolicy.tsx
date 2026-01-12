import React from 'react';
import Seo from '../components/SEO';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Seo
        title="Politique de Confidentialité - Mariage de Coralie et Ralph"
        description="Politique de confidentialité et traitement des données personnelles. Informations sur les données collectées, leur utilisation et vos droits."
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f8f5e6] to-[#e8e2c7] py-12 px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-script text-gray-800 mb-8 text-center">
              Politique de Confidentialité et Traitement des Données Personnelles
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  1. Introduction
                </h2>
                <p>
                  La présente politique de confidentialité a pour objet d'informer les utilisateurs
                  du site web du mariage de Coralie et Ralph sur la manière dont nous collectons,
                  utilisons, conservons et protégeons les données personnelles qui nous sont
                  communiquées.
                </p>
                <p>
                  En utilisant ce site et en remplissant le formulaire RSVP, vous acceptez la
                  collecte et l'utilisation de vos données personnelles conformément à la présente
                  politique.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  2. Types de Données Collectées
                </h2>
                <p>
                  Dans le cadre de la gestion de notre mariage, nous collectons les données
                  suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Données d'identification :</strong> Nom, prénom, adresse email
                  </li>
                  <li>
                    <strong>Données de participation :</strong> Confirmation de présence, nombre
                    d'invités accompagnants
                  </li>
                  <li>
                    <strong>Données de préférences :</strong> Préférences alimentaires, choix de
                    repas, restrictions alimentaires
                  </li>
                  <li>
                    <strong>Données d'hébergement :</strong> Besoins d'hébergement, dates de séjour
                  </li>
                  <li>
                    <strong>Données de communication :</strong> Commentaires et messages
                    personnalisés
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  3. Finalité du Traitement
                </h2>
                <p>
                  Les données personnelles collectées sont utilisées exclusivement pour les
                  finalités suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Gestion des réponses aux invitations :</strong> Traitement et suivi des
                    confirmations de présence
                  </li>
                  <li>
                    <strong>Organisation de l'événement :</strong> Planification des repas,
                    organisation de l'hébergement, gestion de la liste des invités
                  </li>
                  <li>
                    <strong>Communication :</strong> Envoi d'informations pratiques concernant le
                    mariage (horaires, localisation, programme)
                  </li>
                  <li>
                    <strong>Coordination logistique :</strong> Organisation avec les prestataires
                    (traiteur, hôtel, transport)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  4. Base Légale du Traitement
                </h2>
                <p>
                  Le traitement de vos données personnelles est fondé sur votre consentement
                  explicite, donné lors de la soumission du formulaire RSVP. Vous pouvez retirer
                  votre consentement à tout moment en nous contactant.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  5. Durée de Conservation
                </h2>
                <p>
                  Vos données personnelles sont conservées jusqu'à la fin de l'année suivant le
                  mariage (fin d'année 2026). Passé ce délai, toutes les données personnelles sont
                  supprimées de manière définitive et sécurisée.
                </p>
                <p className="mt-4">
                  Cette durée de conservation nous permet de finaliser l'organisation de l'événement
                  et de gérer d'éventuelles questions post-événement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  6. Partage des Données
                </h2>
                <p>
                  Vos données personnelles ne sont en aucun cas vendues, louées ou partagées avec
                  des tiers à des fins commerciales.
                </p>
                <p className="mt-4">
                  Elles peuvent être communiquées uniquement aux prestataires directement impliqués
                  dans l'organisation du mariage (traiteur, hôtel, transport) dans la mesure
                  strictement nécessaire à la bonne exécution de leurs prestations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  7. Sécurité des Données
                </h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                  pour protéger vos données personnelles contre tout accès non autorisé, perte,
                  destruction ou altération.
                </p>
                <p className="mt-4">
                  Les données sont stockées sur des serveurs sécurisés et l'accès est restreint aux
                  personnes autorisées uniquement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  8. Vos Droits
                </h2>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                  disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Droit d'accès :</strong> Vous pouvez obtenir une copie de vos données
                    personnelles que nous détenons
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> Vous pouvez demander la correction de
                    données inexactes ou incomplètes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de
                    vos données personnelles
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de
                    vos données personnelles
                  </li>
                  <li>
                    <strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos
                    données dans un format structuré
                  </li>
                  <li>
                    <strong>Droit de retrait du consentement :</strong> Vous pouvez retirer votre
                    consentement à tout moment
                  </li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante :{' '}
                  <a
                    href="mailto:NEPASENVOYERDEMAIL@GMAIL.COM"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    NEPASENVOYERDEMAIL@GMAIL.COM
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  9. Cookies
                </h2>
                <p>
                  Ce site utilise des cookies techniques nécessaires au fonctionnement du site. Ces
                  cookies ne collectent pas de données personnelles identifiables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  10. Modifications de la Politique
                </h2>
                <p>
                  Nous nous réservons le droit de modifier la présente politique de confidentialité
                  à tout moment. Toute modification sera publiée sur cette page avec une date de
                  mise à jour.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-8">
                  11. Contact
                </h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou le traitement
                  de vos données personnelles, vous pouvez nous contacter à :
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

export default PrivacyPolicy;
