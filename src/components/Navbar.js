
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [informacoesOpen, setInformacoesOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenus = () => {
        setMenuOpen(false);
        setInformacoesOpen(false);
    }

    return (
        <header className="andante">
            <div className="top-bar">
                <div></div>
                <Link to="/cadastro"><button className="participar" aria-label="Botão para participar do projeto">
                    Receber atualizações 🔔
                </button></Link>
            </div>

            <nav aria-label="Navegação principal">
                <div className="logo">
                    <Link to="/"><img src="/imagem/imagem.logoelasporelas.png" alt="Logo Elas por Elas - Projeto de Extensão IFPR" /></Link>
                </div>
                <ul className="menu">
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/eventos" className={({ isActive }) => isActive ? "active" : ""}>Eventos</NavLink></li>
                    <li><NavLink to="/comunidade" className={({ isActive }) => isActive ? "active" : ""}>Comunidade</NavLink></li>
                    <li><NavLink to="/pesquisas" className={({ isActive }) => isActive ? "active" : ""}>Pesquisas</NavLink></li>
                    <li className="dropdown">
                        <NavLink to="/informacoes" className={({ isActive }) => isActive ? "active dropbtn" : "dropbtn"}>Informações</NavLink>
                        <div className="dropdown-content">
                            <Link to="/informacoes#direitos">Direitos das Mulheres</Link>
                            <Link to="/informacoes#saude">Saúde Reprodutiva</Link>
                            <Link to="/informacoes#higiene">Higiene e Autocuidado</Link>
                            <Link to="/informacoes#rededeapoio">Rede de Apoio</Link>
                            <Link to="/informacoes#projetos">Projetos de ajuda e apoio</Link>
                        </div>
                    </li>
                    <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink></li>
                </ul>
                <div className="hamburger" aria-label="Menu de navegação" role="button" onClick={handleMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
                    <li><Link to="/" onClick={closeMenus}>Home</Link></li>
                    <li><Link to="/eventos" onClick={closeMenus}>Eventos</Link></li>
                    <li><Link to="/comunidade" onClick={closeMenus}>Comunidade</Link></li>
                    <li><Link to="/pesquisas" onClick={closeMenus}>Pesquisas</Link></li>
                    <li className={`dropdown ${informacoesOpen ? 'active' : ''}`}>
                        <a href="#!" className="dropbtn" onClick={(e) => { e.preventDefault(); setInformacoesOpen(!informacoesOpen); }}>Informações <span className="arrow-icon"></span></a>
                        <div className="dropdown-content">
                            <Link to="/informacoes#direitos" onClick={closeMenus}>Direitos das Mulheres</Link>
                            <Link to="/informacoes#saude" onClick={closeMenus}>Saúde Reprodutiva</Link>
                            <Link to="/informacoes#higiene" onClick={closeMenus}>Higiene e Autocuidado</Link>
                            <Link to="/informacoes#rededeapoio" onClick={closeMenus}>Rede de Apoio</Link>
                            <Link to="/informacoes#projetos" onClick={closeMenus}>Projetos de ajuda e apoio</Link>
                        </div>
                    </li>
                    <li><Link to="/sobre" onClick={closeMenus}>Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
