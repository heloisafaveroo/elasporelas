import React, { useEffect } from 'react';
import '../css/style_sobre.css';
import '../css/styles_menu.css';
import { Link } from 'react-router-dom';

function Sobre() {
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
        const currentPath = '/sobre'; // Hardcoded for this component
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

    // Placeholder for script_sobre.js logic if needed
    // useEffect(() => {
    //     // Add logic from script_sobre.js here
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
                        <li><Link to="/curiosidades">Curiosidades</Link></li>
                        <li><Link to="/comunidade">Comunidade</Link></li>
                        <li><Link to="/sobre" className="active">Sobre</Link></li>
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
                <section className="noistodas">
                    <section className="sobre-projeto">
                        <h2>Sobre o Projeto</h2>
                        {/* Placeholder image - replace with actual image path if available */}
                        <img src="https://folhanoroeste.com.br/storage/2023/01/cute-interracial-young-adult-women-casual-clothes-chatting-among-themselves-beige-background.jpg" alt="Mulheres unidas no projeto Elas Por Elas" />
                        <p className="sobreproj">
                            O Projeto Elas Por Elas nasceu com o objetivo de promover o empoderamento feminino e criar uma rede de apoio sólida entre mulheres de todas as idades e backgrounds. Acreditamos no poder da união e do apoio mútuo entre mulheres para transformar realidades, quebrar barreiras e construir um futuro mais equitativo e inclusivo.
                        </p>
                        <p>
                            Nosso trabalho se desenvolve através de pesquisas aprofundadas sobre questões femininas, organização de eventos educativos e de networking, compartilhamento de informações relevantes sobre direitos e oportunidades, e criação de uma comunidade online ativa onde mulheres podem se conectar, trocar experiências e se apoiar mutuamente.
                        </p>
                        <p>
                            Desde nossa fundação, já impactamos centenas de mulheres através de nossos programas, workshops e iniciativas. Nosso compromisso é continuar crescendo e expandindo nosso alcance para que mais mulheres possam se beneficiar desta rede de apoio e empoderamento.
                        </p>
                    </section>
                </section>

                <section className="noistodas">
                    <section className="coordenadoras">
                        <h2>Coordenadoras</h2>
                        <div className="membros">
                            <div className="membro">
                                {/* Placeholder image */}
                                <img src="https://forbes.com.br/wp-content/uploads/2023/12/mulher-lidiane-jones-bumble.jpg" alt="Foto da Coordenadora Ana Silva" />
                                <h3>Ana Silva</h3>
                                <p className="carreira">Doutora em Sociologia • Especialista em Gênero e Sociedade</p>
                                <p>Com mais de 15 anos de experiência em pesquisa sobre questões de gênero, Ana é responsável pela coordenação geral do projeto e pelo desenvolvimento das pesquisas científicas. Professora universitária e autora de diversos artigos sobre empoderamento feminino, ela traz uma visão acadêmica sólida para nossas iniciativas.</p>
                            </div>
                            <div className="membro">
                                <img src="/api/placeholder/120/120" alt="Foto da Coordenadora Maria Santos" />
                                <h3>Maria Santos</h3>
                                <p className="carreira">MBA em Gestão de Projetos • Empreendedora Social</p>
                                <p>Maria é responsável pela gestão operacional do projeto e coordenação dos eventos. Com background em administração de empresas e vasta experiência em projetos sociais, ela garante que nossas ações sejam executadas com eficiência e alcancem o máximo impacto possível na comunidade.</p>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="noistodas">
                    <section className="integrantes">
                        <h2>Integrantes do Projeto</h2>
                        <div className="membros">
                            <div className="membro">
                                <img src="https://proxis.com.br/wp-content/uploads/2019/02/mulher-sorrindo-no-parque.jpg" alt="Foto da Integrante Carla Oliveira" />
                                <h3>Carla Oliveira</h3>
                                <p className="carreira">Psicóloga • Especialista em Desenvolvimento Pessoal</p>
                                <p>Carla conduz os workshops de empoderamento pessoal e oferece suporte psicológico às participantes. Sua expertise em psicologia positiva contribui para o desenvolvimento de programas que fortalecem a autoestima e confiança das mulheres.</p>
                            </div>
                            <div className="membro">
                                <img src="/api/placeholder/120/120" alt="Foto da Integrante Julia Costa" />
                                <h3>Julia Costa</h3>
                                <p className="carreira">Jornalista • Especialista em Comunicação Digital</p>
                                <p>Julia é responsável pela criação de conteúdo e gestão das redes sociais do projeto. Com formação em jornalismo e especialização em marketing digital, ela garante que nossa mensagem chegue ao maior número possível de mulheres através dos canais digitais.</p>
                            </div>
                            <div className="membro">
                                <img src="/api/placeholder/120/120" alt="Foto da Integrante Fernanda Alves" />
                                <h3>Fernanda Alves</h3>
                                <p className="carreira">Advogada • Especialista em Direitos da Mulher</p>
                                <p>Fernanda oferece orientação jurídica gratuita às participantes e desenvolve materiais informativos sobre direitos femininos. Sua atuação é fundamental para esclarecer questões legais e empoderar mulheres através do conhecimento de seus direitos.</p>
                            </div>
                        </div>
                    </section>
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

export default Sobre;

