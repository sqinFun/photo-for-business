import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Route, Switch } from 'react-router-dom';

//pages
import HomePage from './pages/home/';
import AboutUsPage from './pages/aboutUs';
import ContactsPage from './pages/contacts';
import ObjectShootingPage from './pages/objectShooting';
import CatalogShootingPage from './pages/catalogShooting';
import TrainingPage from './pages/training';
import CalculationPage from './pages/calculation';
import Courses from './pages/courses';
import AdminPages from './pages/admin';
import LoginPage from './pages/login';



function App() {

  return (
    <div className="app">
      <Header />
      <div className="page-content">
        <div className="video-bg">
          <video src="/video/bg.mp4" className="video-bg__video" autoPlay loop></video>
        </div>
        <div className="container-custom container-custom_size_m">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about-us' component={AboutUsPage} />
            <Route path='/contacts' component={ContactsPage} />
            <Route path='/object-shooting' component={ObjectShootingPage} />
            <Route path='/catalog-shooting' component={CatalogShootingPage} />
            <Route path='/training' component={TrainingPage} />
            <Route path='/calculation' component={CalculationPage} />
            <Route path='/courses' component={Courses} />
            <Route path='/admin' component={AdminPages} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
