import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

// Import your page components
import Home from './components/Home';
import Pesquisas from './components/Pesquisas';
import Eventos from './components/Eventos';
import Informacoes from './components/Informacoes';
import Curiosidades from './components/Curiosidades';
import Comunidade from './components/Comunidade';
import Sobre from './components/Sobre';
import Cadastro from './components/Cadastro'; // Assuming you have this component

// Import global CSS if needed, or handled within components
// import './App.css'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pesquisas" element={<Pesquisas />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/informacoes" element={<Informacoes />} />
                <Route path="/curiosidades" element={<Curiosidades />} />
                <Route path="/comunidade" element={<Comunidade />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastro" element={<Cadastro />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );;;
}

export default App;

