import React, { useEffect } from 'react';
import '../css/style_pesquisa.css';
import '../css/styles_menu.css';
import { Link } from 'react-router-dom';

function Pesquisas() {
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
            // Remove active class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));
            mobileMenuItems.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked item
            // Check if the target is the link itself or an element inside it
            let targetLink = event.target.tagName === 'A' ? event.target : event.target.closest('a');
            if (targetLink) {
                 targetLink.classList.add('active');
            }
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

        // Set active class for the current page link
        const currentPath = window.location.pathname;
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
                        <li><Link to="/pesquisas" className="active">Pesquisas</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/informacoes">Informações</Link></li>
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
                <section className="estudo">
                    <section className="metodologia">
                        <h2>Metodologia do Projeto</h2>
                        <p>Nossa metodologia combina abordagens quantitativas e qualitativas para obter uma compreensão abrangente das experiências femininas. Utilizamos técnicas estatísticas avançadas e análises temáticas profundas para garantir a validade e confiabilidade dos resultados.</p>
                        <div className="link-item">
                            {/* Placeholder link, update if actual link exists */}
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Empowerment Theory and Women's Leadership in Brazil</a></h5>
                            <div className="author">Silva, M. A.; Santos, L. P. (2023)</div>
                            <div className="description">Este estudo investiga os fatores que contribuem para o empoderamento feminino no contexto brasileiro, analisando lideranças em diferentes setores da sociedade.</div>
                        </div>
                    </section>
                </section>
                <section className="estudo">
                    <section className="materiais">
                        <h2>Artigos, Estudos e Materiais de Apoio</h2>
                        <p>Nossa base teórica fundamenta-se em pesquisas reconhecidas nacional e internacionalmente sobre estudos de gênero, empoderamento feminino e metodologias participativas. Abaixo, você encontra os principais materiais que embasam nosso trabalho.</p>

                        <h3>📚 Artigos Científicos</h3>
                        <div className="link-item">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Empowerment Theory and Women's Leadership in Brazil</a></h5>
                            <div className="author">Silva, M. A.; Santos, L. P. (2023)</div>
                            <div className="description">Este estudo investiga os fatores que contribuem para o empoderamento feminino no contexto brasileiro, analisando lideranças em diferentes setores da sociedade.</div>
                        </div>
                        
                        <div className="link-item">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Gender Inequality in the Workplace: A Meta-Analysis</a></h5>
                            <div className="author">Johnson, R.; Rodriguez, C.; Thompson, K. (2023)</div>
                            <div className="description">Meta-análise que examina disparidades de gênero no ambiente de trabalho, incluindo diferenças salariais, oportunidades de promoção e representação em cargos de liderança.</div>
                        </div>

                        <div className="link-item">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Metodologias Participativas em Pesquisas de Gênero</a></h5>
                            <div className="author">Oliveira, J. C.; Costa, F. R. (2022)</div>
                            <div className="description">Revisão sistemática sobre o uso de metodologias participativas em pesquisas sobre questões de gênero, destacando benefícios e desafios.</div>
                        </div>

                        <h3>📊 Estudos e Relatórios</h3>
                        <div className="link-item">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Relatório Global sobre Igualdade de Gênero 2023</a></h5>
                            <div className="author">Fórum Econômico Mundial (2023)</div>
                            <div className="description">Análise abrangente do progresso global em igualdade de gênero, incluindo dados econômicos, educacionais, de saúde e representação política.</div>
                        </div>

                        <div className="link-item">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Mulheres no Mercado de Trabalho Brasileiro</a></h5>
                            <div className="author">Instituto Brasileiro de Geografia e Estatística - IBGE (2023)</div>
                            <div className="description">Estudo detalhado sobre a participação feminina no mercado de trabalho brasileiro, incluindo tendências, desafios e oportunidades.</div>
                        </div>

                        <h3>📖 Livros de Referência</h3>
                        <div className="link-item">
                            <h5>"Feminist Research Methods in Social Sciences"</h5>
                            <div className="author">Reinharz, S.; Davidman, L. (Oxford University Press, 2022)</div>
                            <div className="description">Guia abrangente sobre métodos de pesquisa feminista nas ciências sociais, incluindo abordagens inovadoras e considerações éticas.</div>
                        </div>    

                        <div className="link-item">
                            <h5>"O Segundo Sexo: Fatos e Mitos"</h5>
                            <div className="author">Beauvoir, S. (Nova Fronteira, 2019)</div>
                            <div className="description">Obra clássica fundamental para compreender as bases teóricas dos estudos de gênero e feminismo moderno.</div>
                        </div>

                        <h3>🎥 Recursos Multimídia</h3>
                        <div className="link-item video">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Documentário: "Vozes Femininas na Ciência"</a></h5>
                            <div className="author">Produção Nacional (2023)</div>
                            <div className="description">Documentário que retrata a trajetória de mulheres cientistas brasileiras, seus desafios e contribuições para o avanço científico nacional.</div>
                        </div>

                        <div className="link-item video">
                            <h5><a href="#" target="_blank" rel="noopener noreferrer">Webinar: "Metodologias Inovadoras em Pesquisas de Gênero"</a></h5>
                            <div className="author">Universidade Federal do Rio de Janeiro (2023)</div>
                            <div className="description">Apresentação sobre novas abordagens metodológicas em pesquisas sobre gênero, incluindo o uso de tecnologias digitais e big data.</div>
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

export default Pesquisas;

