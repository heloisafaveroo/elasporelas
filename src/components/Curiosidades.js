import React, { useEffect } from 'react';
import '../css/style_curiosidades.css';
import '../css/styles_menu.css';
import { Link } from 'react-router-dom';

function Curiosidades() {
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
        const currentPath = '/curiosidades'; // Hardcoded for this component
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

    // Placeholder for script_curiosidade.js logic if needed
    // useEffect(() => {
    //     // Add logic from script_curiosidade.js here
    // }, []);

    return (
        <div>
            <header>
                <div className="top-bar">
                    <div className="social-icons"></div>
                    <button className="participar">
                        <Link to="/cadastro">Quero participar</Link>
                    </button>
                </div>
                <nav>
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_URL}/imagem/imagem.logoelasporelas.png`} alt="Logo Elas por Elas" />
                    </div>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pesquisas">Pesquisas</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/informacoes">Informações</Link></li>
                        <li><Link to="/curiosidades" className="active">Curiosidades</Link></li>
                        <li><Link to="/comunidade">Comunidade</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                    <div className="hamburger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="mobile-menu" id="mobileMenu" aria-hidden="true">
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
                <section className="curiosidades">
                    <h1>Curiosidades</h1>
                    
                    <div className="item-curiosidade">
                        {/* Placeholder image - replace with actual image path if available */}
                        <img src="/api/placeholder/280/200" alt="Mulheres na História" className="imagem-curiosidade" />
                        <div className="conteudo-curiosidade">
                            <h2>Pioneiras que Mudaram o Mundo</h2>
                            <p>Descubra histórias inspiradoras de mulheres que quebraram barreiras e abriram caminhos em diversas áreas do conhecimento. Desde Marie Curie, primeira mulher a ganhar um Prêmio Nobel, até Katherine Johnson, matemática que foi fundamental para o sucesso das missões espaciais da NASA. Estas mulheres não apenas desafiaram as normas de sua época, mas também deixaram um legado duradouro que continua a inspirar gerações.</p>
                            {/* Replace # with actual link if available */}
                            <a href="#" className="saiba-mais"><span>Saiba mais</span></a>
                        </div>
                    </div>

                    <div className="item-curiosidade">
                        <img src="/api/placeholder/280/200" alt="Inovações Femininas" className="imagem-curiosidade" />
                        <div className="conteudo-curiosidade">
                            <h2>Invenções que Você Não Sabia que Foram Criadas por Mulheres</h2>
                            <p>O WiFi que você usa para navegar na internet foi co-inventado por Hedy Lamarr, uma atriz de Hollywood nos anos 40. Os limpadores de para-brisa foram inventados por Mary Anderson em 1903. Stephanie Kwolek desenvolveu o Kevlar, material usado em coletes à prova de balas. Conheça essas e outras invenções revolucionárias criadas por mentes femininas brilhantes que transformaram nosso cotidiano.</p>
                            <a href="#" className="saiba-mais"><span>Saiba mais</span></a>
                        </div>
                    </div>

                    <div className="item-curiosidade">
                        <img src="/api/placeholder/280/200" alt="Liderança Feminina" className="imagem-curiosidade" />
                        <div className="conteudo-curiosidade">
                            <h2>O Poder da Liderança Feminina nos Negócios</h2>
                            <p>Estudos mostram que empresas com maior diversidade de gênero em cargos de liderança têm 21% mais chances de ter lucros acima da média. Países liderados por mulheres durante a pandemia obtiveram melhores resultados no controle da COVID-19. Descubra como a perspectiva feminina está revolucionando o mundo dos negócios e da política, trazendo abordagens mais colaborativas, empáticas e inovadoras para a tomada de decisões.</p>
                            <a href="#" className="saiba-mais"><span>Saiba mais</span></a>
                        </div>
                    </div>
                </section>
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

export default Curiosidades;

