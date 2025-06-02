import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import RsvpPage from './pages/RsvpPage';
import MenusPage from './pages/MenusPage';
import Navigation from './components/Navigation';
import './App.css';
import Timeline from './components/Timeline';

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
        <Route
          path="/menus"
          element={
            <Layout>
              <MenusPage />
            </Layout>
          }
        />

        <Route
          path="/programme"
          element={
            <Layout>
              <Timeline />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
