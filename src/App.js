import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Garden from './components/Garden';
import Plants from './components/Plants';
import NotFound from './components/NotFound';
import { plants } from './assets/plants';
import { ReactComponent as Logo } from './assets/logo.svg';

function App() {
  const [garden, setGarden] = React.useState(JSON.parse(localStorage.getItem('garden')) || []);
  const [availablePlants, setAvailablePlants] = React.useState(JSON.parse(localStorage.getItem('availablePlants')) || plants);

  // add a plant to the garden
  function addPlant(added) {
    let newPlant = plants.find(plant => plant.id === added);
    // set the last watered date to today
    newPlant.lastWatered = new Date();
    setGarden([...garden, newPlant]);
    setAvailablePlants([...availablePlants.filter(plant => plant.id !== added)]);
  }

  // remove a plant from the garden
  function removePlant(removed) {
    let removedPlant = plants.find(plant => plant.id === removed);
    // reset the last watered date
    removedPlant.lastWatered = null;
    setAvailablePlants([...availablePlants, removedPlant]);
    setGarden([...garden.filter(plant => plant.id !== removed)]);
  }

  // water plant
  function waterPlant(watered) {
    setGarden(garden.map(plant => {
      if (plant.id === watered) {
        plant.lastWatered = new Date();
        return plant;
      } else {
        return plant;
      }
    }));
  }

  React.useEffect(() => {
    // keep the lists up to date in local storage
    localStorage.setItem('garden', JSON.stringify(garden));
    localStorage.setItem('availablePlants', JSON.stringify(availablePlants));
  }, [garden, availablePlants]);

  return (
    <div className="container">
      <Router>
        <header>
          <div className="header">
            <Link to="/"><Logo /></Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Garden garden={garden} availablePlants={availablePlants} addPlant={addPlant} removePlant={removePlant} waterPlant={waterPlant} />
            </Route>
            <Route path="/plants/:id">
              <Plants />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Router>
      <footer>
        <div className="footer">
          <p>Built by <a href="https://joannahosking.com/" target="_blank" rel="noreferrer">Joanna Hosking</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
