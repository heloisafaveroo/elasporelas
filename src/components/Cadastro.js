import React, { useEffect } from 'react';
import '../css/styles_menu.css'; // Assuming shared menu styles
// Add specific CSS import if cadastro.html had one, e.g., import '../css/style_cadastro.css';
import { Link } from 'react-router-dom';

function Cadastro() {
    // Replicate script.js functionality for hamburger menu
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuItems = document.querySelectorAll('.menu li a');
        const mobileMenuItems = document.querySelectorAll('.mobile-menu li a');

        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.setAttribute('aria-hidden', mobileMenu.classList.contains('active') ? 'false' : 'true');
        };

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', toggleMenu);
        }

        const handleMenuItemClick = (event) => {
            menuItems.forEach(item => item.classList.remove('active'));
            mobileMenuItems.forEach(item => item.classList.remove('active'));
            let targetLink = event.target.tagName === 'A' ? event.target : event.target.closest('a');
            if (targetLink) {
                 // Find the corresponding li and add active class if needed, or handle based on route
            }
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        };

        menuItems.forEach(item => {
            item.addEventListener('click', handleMenuItemClick);
        });

        mobileMenuItems.forEach(item => {
            item.addEventListener('click', handleMenuItemClick);
        });

        // Set active class for the current page link (if applicable)
        // const currentPath = '/cadastro';
        // ... logic to set active class ...

        // Cleanup function
        return () => {
            if (hamburger && mobileMenu) {
                hamburger.removeEventListener('click', toggleMenu);
            }
             menuItems.forEach(item => {
                item.removeEventListener('click', handleMenuItemClick);
            });
            mobileMenuItems.forEach(item => {
                item.removeEventListener('click', handleMenuItemClick);
            });
        };
    }, []);

    return (
        <div>
            <header>
                <div className="top-bar">
                    <div className="social-icons"></div>
                    {/* Link to cadastro itself might not make sense here, adjust as needed */}
                    <button className="participar" aria-label="Botão para participar do projeto">
                        <Link to="/cadastro">Quero participar</Link>
                    </button>
                </div>
                <nav aria-label="Navegação principal">
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_URL}/imagem/imagem.logoelasporelas.png`} alt="Logo Elas por Elas - Projeto de Extensão IFPR" />
                    </div>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pesquisas">Pesquisas</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/informacoes">Informações</Link></li>
                        <li><Link to="/curiosidades">Curiosidades</Link></li>
                        <li><Link to="/comunidade">Comunidade</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                    <div className="hamburger" aria-label="Menu de navegação" role="button">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="mobile-menu" aria-hidden="true">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pesquisas">Pesquisas</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/informacoes">Informações</Link></li>
                        <li><Link to="/curiosidades">Curiosidades</Link></li>
                        <li><Link to="/comunidade">Comunidade</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* Content for Cadastro page goes here */}
                {/* Since cadastro.html was empty, adding a placeholder */}
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Página de Cadastro</h1>
                    <p>Esta página está em construção ou aguarda conteúdo.</p>
                    {/* Add form or relevant content here */}
                </div>
            </main>
            <footer>
                 <div className="footer-content">
                    <div className="footer-section about">
                        <h3>Sobre Nós</h3>
                        <p>O Coletivo de Mulheres "Elas por Elas" é dedicado a promover a união, o empoderamento e a saúde mental feminina em Assis Chateaubriand e região.</p>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contato</h3>
                        <p>📍 Assis Chateaubriand, PR - Brasil</p>
                        <p>✉️ coletivodemulheresifpr@gmail.com</p>
                        <p>📞 (44) 9XXXX-XXXX</p>
                    </div>
                    <div className="footer-section social">
                        <h3>Siga-nos</h3>
                        <div className="social-links">
                            <a href="https://www.instagram.com/elasporelas_ifpr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                            <a href="https://www.facebook.com/profile.php?id=100093049331240" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 Elas por Elas. Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
}

export default Cadastro;

