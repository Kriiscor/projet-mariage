import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <div className="App">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rsvp" element={<RsvpPage />} />
                <Route path="/location" element={<LocationTransportPage />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="/menus" element={<MenusPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Route Admin Protégée */}
                <Route path="/admin" element={<ProtectedRoute />}>
                  <Route index element={<AdminPage />} />
                </Route>
              </Routes>
            </main>
          </div>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
