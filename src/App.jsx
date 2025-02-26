import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profil from './components/profil/Profil.jsx';
import Card from './components/card/Card.jsx';
import Work from '../public/icon-work.svg';
import Play from '../public/icon-play.svg';
import Study from '../public/icon-study.svg';
import Exercice from '../public/icon-exercise.svg';
import Social from '../public/icon-social.svg';
import SelfCare from '../public/icon-self-care.svg';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [periode, setPeriode] = useState('weekly');
  const images = [Work, Play, Study, Exercice, Social, SelfCare];

  useEffect(() => {
    fetch('src/assets/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function getTextePeriode() {
    switch (periode) {
      case 'daily':
        return 'Hier';
      case 'weekly':
        return 'La semaine passée';
      case 'monthly':
        return 'Le mois passé';
      default:
        return '';
    }
  }

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center text-white">
      <div className="row w-100" style={{ maxWidth: '1000px' }}>
        
        {/* Profil sur la gauche */}
        <div className="col-md-4 col-lg-3 mb-3">
          <Profil setPeriode={setPeriode} />
        </div>

        {/* Cartes sur la droite */}
        <div className="col-md-8 col-lg-9">
          <div className="row g-3">
            {data.map((activité, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <Card
                  imagesCard={images[i]}
                  titre={activité.title}
                  current={activité.timeframes[periode].current}
                  previous={activité.timeframes[periode].previous}
                  textePeriode={getTextePeriode()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
