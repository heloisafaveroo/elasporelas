import React, { useEffect } from 'react';
import '../css/style_informacoes.css';
import '../css/styles_menu.css';
import { Link } from 'react-router-dom';

function Informacoes() {
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
        const currentPath = '/informacoes'; // Hardcoded for this component
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

    // Placeholder for script_informacoes.js logic if needed
    // useEffect(() => {
    //     // Add logic from script_informacoes.js here
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
                        <li><Link to="/informacoes" className="active">Informações</Link></li>
                        <li><Link to="/curiosidades">Curiosidades</Link></li>
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
                <section className="hero-info">
                    <h1>Informações Essenciais</h1>
                    <p>Conhecimento é poder. Aqui você encontra informações fundamentais sobre direitos, saúde, recursos e apoio para mulheres.</p>
                </section>

                {/* Direitos das Mulheres */}
                <section className="total">
                    <section className="info-section">
                        <div className="section-header">
                            <h2>⚖️ Direitos das Mulheres</h2>
                        </div>
                        <div className="content-grid">
                            <div className="info-card">
                                <h3>Direitos Fundamentais</h3>
                                <ul>
                                    <li><strong>Direito à igualdade:</strong> Igualdade de tratamento perante a lei e na sociedade</li>
                                    <li><strong>Direito ao trabalho:</strong> Acesso igual ao mercado de trabalho e salários justos</li>
                                    <li><strong>Direito à educação:</strong> Acesso pleno à educação em todos os níveis</li>
                                    <li><strong>Direito à participação política:</strong> Votar, ser votada e participar da vida pública</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Lei Maria da Penha</h3>
                                <p>A Lei 11.340/2006 protege mulheres contra violência doméstica e familiar. Garante:</p>
                                <ul>
                                    <li>Medidas protetivas de urgência</li>
                                    <li>Atendimento especializado</li>
                                    <li>Criminalização da violência doméstica</li>
                                    <li>Central de Atendimento: <strong>180</strong></li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Direitos Trabalhistas</h3>
                                <ul>
                                    <li>Licença-maternidade de 120 dias</li>
                                    <li>Estabilidade durante gravidez</li>
                                    <li>Intervalos para amamentação</li>
                                    <li>Proibição de discriminação por gênero</li>
                                    <li>Igualdade salarial para funções equivalentes</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Políticas Públicas */}
                <section className="total">
                    <section className="info-section">
                        <div className="section-header">
                            <h2>🏛️ Políticas Públicas</h2>
                        </div>
                        <div className="content-grid">
                            <div className="info-card">
                                <h3>Programas Sociais</h3>
                                <ul>
                                    <li><strong>Auxílio Brasil:</strong> Prioridade para famílias chefiadas por mulheres</li>
                                    <li><strong>Programa Mulher Empreendedora:</strong> Microcrédito e capacitação</li>
                                    <li><strong>Casa da Mulher Brasileira:</strong> Atendimento integrado</li>
                                    <li><strong>Patrulha Maria da Penha:</strong> Acompanhamento especializado</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Saúde Pública</h3>
                                <ul>
                                    <li>Programa de Prevenção do Câncer de Mama e Colo do Útero</li>
                                    <li>Planejamento familiar no SUS</li>
                                    <li>Pré-natal e parto humanizado</li>
                                    <li>Atenção à saúde da mulher climatérica</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Educação e Qualificação</h3>
                                <ul>
                                    <li>Programa Mulheres Mil (capacitação profissional)</li>
                                    <li>Cotas em universidades públicas</li>
                                    <li>Programa Nacional de Acesso ao Ensino Técnico</li>
                                    <li>Incentivos para mulheres em STEM</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Saúde Reprodutiva */}
                 <section className="total">
                    <section className="info-section">
                        <div className="section-header">
                            <h2>🩺 Saúde Reprodutiva</h2>
                        </div>
                        <div className="content-grid">
                            <div className="info-card">
                                <h3>Planejamento Familiar</h3>
                                <ul>
                                    <li><strong>Métodos contraceptivos:</strong> Pílula, DIU, implante, preservativos</li>
                                    <li><strong>Consulta ginecológica:</strong> Anual ou conforme orientação médica</li>
                                    <li><strong>Exames preventivos:</strong> Papanicolau, mamografia</li>
                                    <li><strong>Acesso gratuito pelo SUS</strong></li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Gravidez e Parto</h3>
                                <ul>
                                    <li>Pré-natal: mínimo 6 consultas</li>
                                    <li>Exames obrigatórios gratuitos</li>
                                    <li>Direito a acompanhante no parto</li>
                                    <li>Parto humanizado</li>
                                    <li>Licença-maternidade de 120 dias</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Prevenção e Cuidados</h3>
                                <ul>
                                    <li><strong>HPV:</strong> Vacina gratuita para meninas de 9-14 anos</li>
                                    <li><strong>ISTs:</strong> Testagem e tratamento gratuitos</li>
                                    <li><strong>Câncer de mama:</strong> Mamografia anual após 50 anos</li>
                                    <li><strong>Violência obstétrica:</strong> Denuncie pelo 136</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Higiene e Autocuidado */}
                 <section className="total">
                    <section className="info-section">
                        <div className="section-header">
                            <h2>🧼 Higiene e Autocuidado</h2>
                        </div>
                        <div className="content-grid">
                            <div className="info-card">
                                <h3>Higiene Íntima</h3>
                                <ul>
                                    <li>Use apenas água e sabonete neutro na vulva</li>
                                    <li>Evite duchas vaginais internas</li>
                                    <li>Troque absorventes a cada 4 horas</li>
                                    <li>Use roupas íntimas de algodão</li>
                                    <li>Seque bem a região após o banho</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Cuidados Menstruais</h3>
                                <ul>
                                    <li><strong>Absorventes:</strong> Trocar a cada 4 horas</li>
                                    <li><strong>Coletor menstrual:</strong> Esterilizar entre ciclos</li>
                                    <li><strong>Calcinha absorvente:</strong> Lavar após cada uso</li>
                                    <li>Higienize as mãos antes e depois da troca</li>
                                    <li>Descarte adequadamente os produtos</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Autocuidado Geral</h3>
                                <ul>
                                    <li>Autoexame das mamas mensalmente</li>
                                    <li>Hidratação adequada (2L de água/dia)</li>
                                    <li>Alimentação equilibrada</li>
                                    <li>Exercícios físicos regulares</li>
                                    <li>Cuidados com a saúde mental</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Rede de Apoio */}
                 <section className="total">
                    <section className="info-section">
                        <div className="section-header">
                            <h2>🤝 Rede de Apoio</h2>
                        </div>
                        <div className="content-grid">
                            <div className="info-card emergency">
                                <h3>Emergência</h3>
                                <div className="emergency-numbers">
                                    <div className="number-item">
                                        <span className="number">190</span>
                                        <span className="desc">Polícia Militar</span>
                                    </div>
                                    <div className="number-item">
                                        <span className="number">180</span>
                                        <span className="desc">Central de Atendimento à Mulher</span>
                                    </div>
                                    <div className="number-item">
                                        <span className="number">192</span>
                                        <span className="desc">SAMU</span>
                                    </div>
                                    <div className="number-item">
                                        <span className="number">100</span>
                                        <span className="desc">Direitos Humanos</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-card">
                                <h3>Centros de Referência</h3>
                                <ul>
                                    <li><strong>CRAM:</strong> Centro de Referência da Mulher</li>
                                    <li><strong>DEAM:</strong> Delegacia Especializada</li>
                                    <li><strong>Casa Abrigo:</strong> Proteção para mulheres em risco</li>
                                    <li><strong>CREAS:</strong> Centro de Referência Especializado</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h3>Apoio Psicológico</h3>
                                <ul>
                                    <li><strong>CVV:</strong> 188 (Centro de Valorização da Vida)</li>
                                    <li><strong>CAPS:</strong> Centro de Atenção Psicossocial</li>
                                    <li>Terapia online gratuita (projetos sociais)</li>
                                    <li>Grupos de apoio locais</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Links Úteis */}
                 <section className="total">
                    <section className="info-section">
                        <div className="section-header">
                            <h2>🔗 ONGs e Projetos de Apoio</h2>
                        </div>
                        <div className="links-grid">
                            {/* Replace # with actual links if available */}
                            <div className="link-card">
                                <h4>Instituto Maria da Penha</h4>
                                <p>Organização que luta pelos direitos das mulheres e combate à violência doméstica.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                            <div className="link-card">
                                <h4>Think Olga</h4>
                                <p>ONG que promove empoderamento feminino através de educação e informação.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                            <div className="link-card">
                                <h4>Mapa do Acolhimento</h4>
                                <p>Rede de psicólogas voluntárias que oferecem atendimento gratuito para mulheres.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                             <div className="link-card">
                                <h4>Instituto Avon</h4>
                                <p>Focado no combate à violência contra a mulher e na promoção da saúde feminina.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                            <div className="link-card">
                                <h4>Artemis</h4>
                                <p>ONG dedicada aos direitos humanos das mulheres e enfrentamento da violência de gênero.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                            <div className="link-card">
                                <h4>Casa do Zezinho</h4>
                                <p>Projeto que oferece programas socioeducativos para meninas e mulheres em situação de vulnerabilidade.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                            <div className="link-card">
                                <h4>PlanBrasil</h4>
                                <p>Organização internacional que promove direitos das crianças e igualdade para as meninas.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                            <div className="link-card">
                                <h4>Instituto Patrícia Galvão</h4>
                                <p>Trabalha pela ampliação dos direitos das mulheres através de comunicação e advocacy.</p>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">Acessar Site</a>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="cta-section">
                    <h2>Precisa de Ajuda Imediata?</h2>
                    <p>Em situação de emergência, não hesite em buscar ajuda. Você não está sozinha.</p>
                    <div className="cta-buttons">
                        <a href="tel:180" className="cta-button emergency">Ligar 180</a>
                        <a href="tel:190" className="cta-button emergency">Ligar 190</a>
                        {/* Replace # with actual link if available */}
                        <a href="#" className="cta-button">Encontrar Ajuda Local</a>
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

export default Informacoes;

