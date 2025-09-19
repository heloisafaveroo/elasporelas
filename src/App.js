import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Eventos from './pages/Eventos';
import Comunidade from './pages/Comunidade';
import Pesquisas from './pages/Pesquisas';
import Informacoes from './pages/Informacoes';
import Cadastro from './pages/Cadastro';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/pesquisas" element={<Pesquisas />} />
          <Route path="/informacoes" element={<Informacoes />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;