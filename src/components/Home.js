import React, { useEffect } from 'react';
import '../css/styles_menu.css';
import '../css/styles.css';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

function Home() {
    // Replicate script.js functionality for hamburger menu and fade-in
    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuItems = document.querySelectorAll('.menu li a');
        const mobileMenuItems = document.querySelectorAll('.mobile-menu li a');
        const fadeElements = document.querySelectorAll('.fade-in');

        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileMenu.setAttribute('aria-hidden', mobileMenu.classList.contains('active') ? 'false' : 'true');
        };

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', toggleMenu);
        }

        const handleMenuItemClick = (event) => {
            // Remove active class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));
            mobileMenuItems.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked item
            event.target.classList.add('active');
            // If it's the mobile menu, close it
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

        // Fade-in effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Optional: remove class if element scrolls out of view
                    // entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        fadeElements.forEach(el => observer.observe(el));

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
            fadeElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div>
            <header>
                <div className="top-bar">
                    <div className="social-icons">
                        {/* Social icons can be added here if needed */}
                    </div>
                    <button className="participar" aria-label="Botão para participar do projeto">
                        <Link to="/cadastro">Quero participar</Link> {/* Updated link */}
                    </button>
                </div>

                <nav aria-label="Navegação principal">
                    <div className="logo">
                        {/* Use process.env.PUBLIC_URL for images in public folder */}
                        <img src={`${process.env.PUBLIC_URL}/imagem/imagem.logoelasporelas.png`} alt="Logo Elas por Elas - Projeto de Extensão IFPR" />
                    </div>
                    <ul className="menu">
                        <li><Link to="/" className="active">Home</Link></li>
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

                <section className="inicio">
                    <div className="logo-inicio">
                        {/* Assuming logo is same as nav logo, adjust if different */}
                        <img src={`${process.env.PUBLIC_URL}/imagem/imagem.logoelasporelas.png`} alt="Logo principal Elas por Elas" />
                    </div>
                    <div className="text fade-in">
                        <h2>Quem somos nós?</h2>
                        <p>Projeto de extensão do IFPR (Instituto Federal do Paraná) com intuito de ser um espaço acolhedor feminino, não apenas ouvindo mulheres, mas também organizando discussões a respeito do papel das mesmas na sociedade, assim contribuindo para essa causa.</p>
                        <h3>Respeito, Autonomia e Empoderamento da Mulher na escola e na comunidade.</h3>
                        <button className="saiba-mais" aria-label="Saiba mais sobre o projeto">
                            <Link to="/sobre">Saiba mais</Link>
                        </button>
                    </div>
                </section>
            </header>

            <main>
                <section className="objetivos">
                    <h1>NOSSOS OBJETIVOS</h1>
                    <div className="cards">
                        <div className="card fade-in">
                            {/* Placeholder image - replace with actual image path if available in assets */}
                            <img src="https://alfredonegreirosadvocacia.adv.br/wp-content/uploads/2023/12/Direito-de-Imagem-do-Jogador-de-Futebol.jpg" alt="Equidade de gênero" />
                            <div className="card-content">
                                <h3>Promover a equidade de gênero</h3>
                                <p>Impulsionar a Equidade de Gênero: Trabalhamos ativamente para desconstruir desigualdades e fomentar um ambiente onde todas as pessoas, independentemente do gênero, tenham as mesmas oportunidades e respeito.</p>
                            </div>
                        </div>
                        
                        <div className="card fade-in">
                            <img src="https://alfredonegreirosadvocacia.adv.br/wp-content/uploads/2023/12/Direito-de-Imagem-do-Jogador-de-Futebol.jpg" alt="Espaço de acolhimento" />
                            <div className="card-content">
                                <h3>Promover um espaço de acolhimento às mulheres</h3>
                                <p>Nosso compromisso é promover um espaço de acolhimento genuíno às mulheres, dentro e fora do Campus. Queremos que cada mulher se sinta segura, ouvida, respeitada e parte de uma comunidade que a apoia.</p>
                            </div>
                        </div>
                        
                        <div className="card fade-in">
                            <img src="https://alfredonegreirosadvocacia.adv.br/wp-content/uploads/2023/12/Direito-de-Imagem-do-Jogador-de-Futebol.jpg" alt="Conscientização" />
                            <div className="card-content">
                                <h3>Conscientizar sobre a luta feminina</h3>
                                <p>Buscamos conscientizar sobre a profundidade e a importância da luta feminina, compartilhando histórias, educando sobre nossos direitos e mobilizando para que as conquistas avancem e não haja retrocessos.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>Sobre Nós</h3>
                        <p>O Coletivo de Mulheres "Elas por Elas" é dedicado a promover a união, o empoderamento e a saúde mental feminina em Assis Chateaubriand e região.</p>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contato</h3>
                        {/* Assuming FontAwesome is not set up, using text placeholders */}
                        <p>📍 Assis Chateaubriand, PR - Brasil</p>
                        <p>✉️ coletivodemulheresifpr@gmail.com</p>
                        <p>📞 (44) 9XXXX-XXXX</p>
                    </div>
                    <div className="footer-section social">
                        <h3>Siga-nos</h3>
                        <div className="social-links">
                            <a href="https://www.instagram.com/elasporelas_ifpr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram {/* Add icon here if FontAwesome is configured */}</a>
                            <a href="https://www.facebook.com/profile.php?id=100093049331240" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook {/* Add icon here if FontAwesome is configured */}</a>
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

export default Home;

