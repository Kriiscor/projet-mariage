import React from 'react';
import '../styles/Timeline.css';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2 className="timeline-title">Programme du Weekend</h2>
        <p className="timeline-subtitle">5 - 7 Septembre</p>
      </div>

      <div className="timeline-content">
        {/* Vendredi */}
        <div className="timeline-day">
          <h3 className="day-title">Vendredi 5 Septembre</h3>
          <div className="timeline-event">
            <div className="event-time">Après-midi</div>
            <div className="event-description">Accueil des premiers invités</div>
          </div>
          <div className="timeline-event">
            <div className="event-time">20h00</div>
            <div className="event-description">Dîner à l'hôtel</div>
          </div>
        </div>

        {/* Samedi */}
        <div className="timeline-day">
          <h3 className="day-title">Samedi 6 Septembre</h3>
          <div className="timeline-event">
            <div className="event-time">16h00</div>
            <div className="event-description">
              Cérémonie religieuse
              <span className="event-location">Église St Martin des Allues</span>
            </div>
          </div>
          <div className="timeline-event">
            <div className="event-time">18h00</div>
            <div className="event-description">
              Vin d'honneur
              <span className="event-location">Face au Mont Vallon - L'Eterlou</span>
            </div>
          </div>
          <div className="timeline-event">
            <div className="event-time">20h00</div>
            <div className="event-description">
              Dîner
              <span className="event-location">Salle du restaurant - L'Eterlou</span>
            </div>
          </div>
          <div className="timeline-event">
            <div className="event-time">23h00</div>
            <div className="event-description">
              Première Danse & Soirée
              <span className="event-location">L'Eterlou</span>
            </div>
          </div>
        </div>

        {/* Dimanche */}
        <div className="timeline-day">
          <h3 className="day-title">Dimanche 7 Septembre</h3>
          <div className="timeline-event">
            <div className="event-time">12h00</div>
            <div className="event-description">
              Barbecue
              <span className="event-location">Au bord de la piscine</span>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-footer">
        <p className="timeline-note">Plus de détails à venir</p>
      </div>
    </div>
  );
};

export default Timeline;
