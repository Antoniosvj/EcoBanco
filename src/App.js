import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CadastroPage from './pages/CadastroPage/CadastroPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Router>      
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
      <Footer />
    </Router>    
  );
};

export default App;
