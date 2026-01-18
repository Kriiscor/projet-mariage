import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import RsvpPage from './pages/RsvpPage';
import LocationTransportPage from './pages/LocationTransportPage';
import Logement from './pages/Logement';
import MenusPage from './pages/MenusPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Dabke from './pages/Dabke';
import CagnottePage from './pages/CagnottePage';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancel from './pages/PaymentCancel';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalMentions from './pages/LegalMentions';

import './App.css';
import Timeline from './components/Timeline';

const queryClient = new QueryClient();

const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Elements stripe={stripePromise}>
            <AuthProvider>
              <div className="App">
                <Toaster position="top-right" />
                <Navigation />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/formulaire" element={<RsvpPage />} />
                    <Route path="/transport" element={<LocationTransportPage />} />
                    <Route path="/programme" element={<Timeline />} />
                    <Route path="/logement" element={<Logement />} />
                    <Route path="/menus" element={<MenusPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dabke" element={<Dabke />} />
                    <Route path="/cagnotte" element={<CagnottePage />} />
                    <Route path="/payment/success" element={<PaymentSuccess />} />
                    <Route path="/payment/cancel" element={<PaymentCancel />} />
                    <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
                    <Route path="/mentions-legales" element={<LegalMentions />} />

                    {/* Route Admin Protégée */}
                    <Route path="/admin" element={<ProtectedRoute />}>
                      <Route index element={<AdminPage />} />
                    </Route>
                  </Routes>
                </main>
              </div>
            </AuthProvider>
          </Elements>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
