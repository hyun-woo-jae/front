import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Footer from './components/Footer';
import CustomAppBar from './components/Appbar';

const App = () => {
  return (
    <Router>
      <CustomAppBar />
      <Homepage />
      <Footer />
    </Router>
  );
};

export default App;
