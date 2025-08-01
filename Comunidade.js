import React, { useEffect } from 'react';
import '../css/style_comunidade.css';
import '../css/styles_menu.css';
import { Link } from 'react-router-dom';

function Comunidade() {
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
        };;;

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', toggleMenu);
        }

        const handleMenuItemClick = (event) => {
            menuItems.forEach(item => item.classList.remove('active'));
            mobileMenuItems.forEach(item => item.classList.remove('active'));
            let targetLink = event.target.tagName === 'A' ? event.target : event.target.closest('a');
            if (targetLink) {
                 targetLink.classList.add('active');
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

        // Set active class for the current page link
        const currentPath = '/comunidade'; // Hardcoded for this component
        menuItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
         mobileMenuItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

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
                        <li><Link to="/comunidade" className="active">Comunidade</Link></li>
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
                <div className="container">
                    <h1>Junte-se à nossa Comunidade!</h1>
                    <p>Clique no botão abaixo para entrar em nosso grupo de boas-vindas e saber mais sobre nossa comunidade.</p>
                    {/* Assuming whatsapp-icon.png is in public/imagem or similar */}
                    <a href="https://chat.whatsapp.com/BRhRjx3hNzg7KqNSHx94JO" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/imagem/whatsapp-icon.png`} alt="Ícone do WhatsApp" className="whatsapp-icon" onError={(e) => { e.target.style.display = 'none'; /* Hide if image fails */ }} />
                        Participar da Comunidade
                    </a>
                </div>
            </main>
            {/* Assuming a shared Footer component or replicate footer HTML here */}
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

export default Comunidade;

