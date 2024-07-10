import './App.css';


import React from 'react';

import Header from './components/HeaderComponent/Header';
import NewStudentDetailsPage from './components/NewStudentDetailsPage/NewStudentDetailsPage';
import Footer from './components/FooterComponent/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <NewStudentDetailsPage />
        <Footer />
    </div>
  );
}

export default App;
