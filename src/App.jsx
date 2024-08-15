import './App.css';
import React from 'react';

import { SCHEDULE } from './app/shared/SCHEDULE';

import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';

import SchedulePage from './pages/SchedulePage/SchedulePage';
import NewStudentDetailsPage from './pages/NewStudentDetailsPage/NewStudentDetailsPage';

function App() {
  return (
    <div className="App">
        <Header />
        <SchedulePage schedule={SCHEDULE} />
        <NewStudentDetailsPage />
        <Footer />
    </div>
  );
}

export default App;
