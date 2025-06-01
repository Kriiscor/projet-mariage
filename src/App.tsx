import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import RsvpPage from './pages/RsvpPage';
import Navigation from './components/Navigation';
import './App.css';

// Composant Layout qui enveloppe la navigation et la page
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div className="main-content">{children}</div>
    </>
  );
};

// Styles globaux ajoutés dans le fichier App.css

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/logement"
          element={
            <Layout>
              <Logement />
            </Layout>
          }
        />
        <Route
          path="/formulaire"
          element={
            <Layout>
              <RsvpPage />
            </Layout>
          }
        />
        {/* Ajoutez d'autres routes ici de la même manière */}
      </Routes>
    </Router>
  );
}

export default App;
