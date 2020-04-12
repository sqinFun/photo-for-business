import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/home/';
import AboutUsPage from './pages/aboutUs';
import ContactsPage from './pages/contacts';
import ObjectShootingPage from './pages/objectShooting';
import CatalogShootingPage from './pages/catalogShooting';
import TrainingPage from './pages/training';
import CalculationPage from './pages/calculation'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="page-content">
        <div className="container container_size_m">
          <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/about-us' component={AboutUsPage}></Route>
            <Route path='/contacts' component={ContactsPage}></Route>
            <Route path='/object-shooting' component={ObjectShootingPage}></Route>
            <Route path='/catalog-shooting' component={CatalogShootingPage}></Route>
            <Route path='/training' component={TrainingPage}></Route>
            <Route path='/calculation' component={CalculationPage}></Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
