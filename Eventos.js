import React, { useState, useEffect } from 'react';
import '../css/styles_evento.css';
import '../css/styles_menu.css';
import { Link } from 'react-router-dom';
import imagem1 from '../imagem/FOTO1-mês das mulheres.jpg';
import imagem2 from '../imagem/FOTO2-mês das mulhes.png';
import imagem3 from '../imagem/FOTO3-mês das mulhes.png';
import imagem4 from '../imagem/FOTO4-mês das mulhes.png';
import imagem5 from "../imagem/FOTO5-mês das mulhes.png";
import imagem6 from "../imagem/FOTO6-mês das mulhes.png";
import imagem7 from "../imagem/FOTO7-mês das mulhes.png";
import imagem8 from "../imagem/FOTO8-mês das mulhes.png";
import imagem9 from "../imagem/FOTO9-mês das mulhes.jpg";
import imagem10 from "../imagem/FOTO10-mês das mulhes.png";
import imagem11 from "../imagem/FOTO11-mês das mulhes.png";
import imagem12 from "../imagem/FOTO12-mês das mulhes.png";


export default function Eventos() { // O 'export default' foi movido para a declaração da função.
    // State for carousels - using an array to manage multiple carousels
    const [slideIndexes, setSlideIndexes] = useState([1, 1, 1, 1, 1, 1]); // Initialize for 6 carousels

    // Function to change slides
    const plusSlides = (n, carouselIndex) => {
        setSlideIndexes(prevIndexes => {
            const newIndexes = [...prevIndexes];
            // Chamar showSlides com o novo slideIndex calculado antes de atualizar o estado
            showSlides(newIndexes[carouselIndex] + n, carouselIndex);
            return newIndexes; // O retorno é apenas para satisfazer o map, a atualização de estado é assíncrona
        });
    };

    // Function to set current slide
    const currentSlide = (n, carouselIndex) => {
        setSlideIndexes(prevIndexes => {
            const newIndexes = [...prevIndexes];
            // Chamar showSlides com o slide 'n' antes de atualizar o estado
            showSlides(n, carouselIndex);
            return newIndexes; // O retorno é apenas para satisfazer o map, a atualização de estado é assíncrona
        });
    };

    // Function to display slides
    const showSlides = (n, carouselIndex) => {
        let i;
        const carousels = document.querySelectorAll('.carousel-container');
        if (carouselIndex >= carousels.length) return; // Index out of bounds

        const currentCarousel = carousels[carouselIndex];
        // Adicionada verificação para currentCarousel antes de tentar querySelectorAll
        if (!currentCarousel) return;

        const slides = currentCarousel.querySelectorAll('.carousel-slide img');
        const dots = currentCarousel.querySelectorAll('.carousel-controls .dot');

        if (!slides || slides.length === 0 || !dots || dots.length === 0) return; // Elements not found

        let slideIndex = n;
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            slides[i].classList.remove('active');
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active');

        // Update state for the specific carousel
        setSlideIndexes(prevIndexes => {
            const newIndexes = [...prevIndexes];
            newIndexes[carouselIndex] = slideIndex;
            return newIndexes;
        });
    };

    // Effect for initializing carousels and hamburger menu
    useEffect(() => {
        // Initialize all carousels on mount
        slideIndexes.forEach((_, index) => {
            showSlides(slideIndexes[index], index);
        });

        // Hamburger menu logic
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
        const currentPath = '/eventos'; // Hardcoded for this component
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
    // Rerun effect if slideIndexes change externally, though unlikely here
    }, []); // Run once on mount

    // Effect to re-run showSlides when slideIndexes state changes
    useEffect(() => {
        slideIndexes.forEach((index, carouselIdx) => {
            // Note: This useEffect might cause multiple renders if showSlides updates state again.
            // Consider refactoring showSlides to not update state directly if called from here,
            // or ensure it's idempotent. For now, it keeps your original logic.
            showSlides(index, carouselIdx);
        });
    }, [slideIndexes]); // Depende de slideIndexes para re-executar

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
                        <li><Link to="/eventos" className="active">Eventos</Link></li>
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
                <section className="eventos">
                    <h1>Nossos Eventos</h1>

                    {/* Evento 1 */}
                    <div className="item-evento" data-aos="fade-up">
                        <div className="info-evento">
                            <h2>Dia das Mulheres: Elas por Elas - 1º Edição</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>26 e 27 de Março, 2025</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>IFPR - Campus Assis Chateaubriand</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                Em parceria com a Secretaria da Assistência Social e da Mulher, promoveu um evento especial para as mulheres acompanhadas pelo CRAS.💜
                                O encontro celebrou as conquistas femininas e criou um espaço acolhedor para trocas de histórias e reflexões.
                                A abertura, conduzida pela Profa.Yohana Saheli, trouxe palavras inspiradoras como força, guerreiras e acolhimento.
                                O projeto IF'Arte emocionou a todos com música ao vivo.🎶
                                As estudantes Camila, Fabíola e Heloisa contextualizaram o Dia das Mulheres,
                                e a Profª Michelli Galli apresentou o histórico do Coletivo Elaspor Elas📖💬.
                                O evento contou ainda com poesias, cordéis, partilhas emocionantes e debates sobre desafios femininos em carreiras predominantemente masculinas.
                                No encerramento, a dinâmica das fotos trouxe momentos de auto conexão e empoderamento, onde cada mulher pôde resgatar sua essência e fortalecer sua voz.📷✨
                                O Dia das Mulheres 'Elas por Elas' nasceu para dar voz às mulheres e quebrar silêncios históricos. Que esse seja apenas o começo! 💪🏻💜
                            </p>
                        </div>
                        <div className="doiscontainer">
                            {/* Carousel 0 */}
                            <div className="carousel-container">
                                <button className="arrow prev" onClick={() => plusSlides(-1, 0)}>❮</button>
                                <div className="carousel-slide">
                                    <img src={imagem1}/>
                                    <img src={imagem2} />
                                    <img src={imagem3} />
                                    <img src={imagem4} />
                                </div>
                                <button className="arrow next" onClick={() => plusSlides(1, 0)}>❯</button>
                                <div className="carousel-controls">
                                    <span className="dot" onClick={() => currentSlide(1, 0)}></span>
                                    <span className="dot" onClick={() => currentSlide(2, 0)}></span>
                                    <span className="dot" onClick={() => currentSlide(3, 0)}></span>
                                    <span className="dot" onClick={() => currentSlide(4, 0)}></span>
                                </div>
                            </div>
                            {/* Carousel 1 */}
                            <div className="carousel-container">
                                <button className="arrow prev" onClick={() => plusSlides(-1, 1)}>❮</button>
                                <div className="carousel-slide">
                                    <img src={imagem5} />
                                    <img src={imagem6}/>
                                    <img src={imagem7} />
                                    <img src={imagem8}/>
                                </div>
                                <button className="arrow next" onClick={() => plusSlides(1, 1)}>❯</button>
                                <div className="carousel-controls">
                                    <span className="dot" onClick={() => currentSlide(1, 1)}></span>
                                    <span className="dot" onClick={() => currentSlide(2, 1)}></span>
                                    <span className="dot" onClick={() => currentSlide(3, 1)}></span>
                                    <span className="dot" onClick={() => currentSlide(4, 1)}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Evento 2 */}
                    <div className="item-evento" data-aos="fade-up">
                        <div className="info-evento">
                            <h2>Eventos de Setembro</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>10 e 20 de de Setembro, 2024</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>Auditório - Prefeitura de Assis</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                Sendo então no dia 10/09 realizado duas sessões para alunos e servidores,
                                uma breve apresentação que contextualizou o que o Coletivo é e como ele
                                atua dentro e fora da comunidade escolar.
                                <br/>Por fim os integrantes do Coletivo apresentaram no dia 20/09 em um evento realizado pelo IFPR -
                                Câmpus Cascavel "V Scientif" no qual Gabrielle Aurélio, Rafaela Ramos e João Medeiros apresentaram
                                o trabalho entitulado: "MULHERES NA AGRICULTURA: DESAFIOS PARA A PROFISSIONALIZAÇÃO E A RELAÇÃO COM A
                                TERRA." E os integrantes Guilherme Coppo, Ana dos Santos e Gabrielly da Rosa apresentaram o trabalho
                                entitulado: "A DESCONSTRUÇÃO DE CONCEITOS E DE ESTEREÓTIPOS SOBRE A MULHER NAS CIÊNCIAS EXATAS: UMA
                                REFLEXÃO SOBRE A MULHER NO CURSO TÉCNICO EM ELETROMECÂNICA INTEGRADO AO ENSINO MÉDIO."
                            </p>
                        </div>
                        <div className="unicaimagem">
                            <img src={`${process.env.PUBLIC_URL}/imagem/FOTO40-mês das mulhes.png`} alt="Eventos de Setembro" className="single-image" />
                        </div>
                    </div>

                    {/* Evento 3 */}
                    <div className="item-evento" data-aos="fade-up">
                        <div className="info-evento">
                            <h2>Atividades de Março</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>Mês de Março, 2024</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>IFPR - Campus Assis Chateaubriand</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                Coletivo de Mulheres Elas por Elas, no mês de março em alusão ao dia internacional
                                da mulher e por ser um mês voltado há várias lutas femininas, realizou e participou
                                de algumas atividades, confira abaixo 👇
                                <br/>• Realizou juntamente com o Grêmio Estudantil IFormação a entrega de lembrança para as
                                servidoras do IFPR;
                                <br/>• Realizou o Dia Internacional da Mulher: Intervalo Cultural no IFPR;
                                <br/>• Participou do III Encontro "Mulher Empoderada", promovido pela Secretaria da Mulher
                                de Assis Chateaubriand;
                                <br/>• Participou da palestra sobre o tema “Cidadania Feminina” promovido pela APP-Sindicato.
                            </p>
                        </div>
                        {/* Carousel 2 */}
                        <div className="carousel-container">
                            <button className="arrow prev" onClick={() => plusSlides(-1, 2)}>❮</button>
                            <div className="carousel-slide">
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO37-mês das mulhes.png`} alt="eventos de março 1" />
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO38-mês das mulhes.png`} alt="eventos de março 6" />
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO39-mês das mulhes.png`} alt="eventos de março 7" />
                            </div>
                            <button className="arrow next" onClick={() => plusSlides(1, 2)}>❯</button>
                            <div className="carousel-controls">
                                <span className="dot" onClick={() => currentSlide(1, 2)}></span>
                                <span className="dot" onClick={() => currentSlide(2, 2)}></span>
                                <span className="dot" onClick={() => currentSlide(3, 2)}></span>
                            </div>
                        </div>
                    </div>

                    {/* Evento 4 */}
                    <div className="item-evento" data-aos="fade-up">
                        <div className="info-evento">
                            <h2>X FEPIAC: Feira de Ensino, Extensão, Pesquisa e Inovação</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>24 á 26 de outubro, 2023</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>IFPR - Campus Assis Chateaubriand</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                Nessa semana aconteceu a IX FEPIAC Feira de Ensino,
                                Extensão, Pesquisa e Inovação do IFPR Assis Chateaubriand e o IV SEPE Seminário
                                de Pesquisa e Extensão no qual o Coletivo de Mulheres 'Elas por Elas' participou.
                                Sendo no IV SEPE foi apresentado pelas coordenadoras Celina Gomes e Michelli Galli
                                o projeto "Coletivo de Mulheres 'Elas por Elas': respeito, autonomia e empoderamento
                                da mulher na escola e na comunidade" e na IX FEPIAC os integrantes do projeto Gabrielle
                                Aurélio, Gabrielly da Rosa, Guilherme Coppo e João Victor Medeiros apresentaram na feira
                                abordando temas como "Mulheres do setor agropecuário: enfrentando desafios, quebrando
                                estereótipos e alcançando vitórias profissionais" e "Quebrando barreiras: a mulher na
                                área de eletromecânica e no mercado de trabalho".
                                Todos as apresentações/pesquisas foram integradas ao Elas por Elas, e contaram com o
                                auxílio das coordenadoras para a submissão dos trabalhos.
                            </p>
                        </div>
                        {/* Carousel 3 */}
                        <div className="carousel-container">
                            <button className="arrow prev" onClick={() => plusSlides(-1, 3)}>❮</button>
                            <div className="carousel-slide">
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO30-mês das mulhes.png`} alt="IX FEPIAC 1" />
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO31-mês das mulhes.png`} alt="IX FEPIAC 2" />
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO32-mês das mulhes.png`} alt="IX FEPIAC 3" />
                            </div>
                            <button className="arrow next" onClick={() => plusSlides(1, 3)}>❯</button>
                            <div className="carousel-controls">
                                <span className="dot" onClick={() => currentSlide(1, 3)}></span>
                                <span className="dot" onClick={() => currentSlide(2, 3)}></span>
                                <span className="dot" onClick={() => currentSlide(3, 3)}></span>
                            </div>
                        </div>
                    </div>

                    {/* Evento 5 */}
                    <div className="item-evento" data-aos="fade-up">
                        <div className="info-evento">
                            <h2>FIciências 2023: XII Feira de Inovação das Ciências e Engenharias</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>16 á 20 de outubro, 2023</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>Foz do Iguaçu</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                o Coletivo de Mulheres participou do Ficiências que aconteceu na cidade de Foz do Iguaçu no Paraná.
                                O Elas por Elas foi representado pelos integrantes Gabrielle Aurélio e João Victor Medeiros e acompanhados
                                pela coordenadora Michelli Galli, foram três dias de apresentações, cujo contou com um estande em que os
                                integrantes decoraram, e aos visitantes foram entregues adesivos do Coletivo, sendo um meio de divulgação
                                do projeto, além das redes sociais. Este evento contou com avaliadores de universidades e da Itaipu Binacional,
                                a apresentação do projeto por meio dos integrantes foi prestigiada com diversos elogios e sugestões para a
                                participação e ações do Coletivo em eventos dentro e fora do IFPR - Campus Assis Chateaubriand.
                            </p>
                        </div>
                        {/* Carousel 4 */}
                        <div className="carousel-container">
                            <button className="arrow prev" onClick={() => plusSlides(-1, 4)}>❮</button>
                            <div className="carousel-slide">
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO28-mês das mulhes.png`} alt="FIciências 2023 1" />
                                <img src={`${process.env.PUBLIC_URL}/imagem/FOTO29-mês das mulhes.png`} alt="FIciências 2023 2" />
                            </div>
                            <button className="arrow next" onClick={() => plusSlides(1, 4)}>❯</button>
                            <div className="carousel-controls">
                                <span className="dot" onClick={() => currentSlide(1, 4)}></span>
                                <span className="dot" onClick={() => currentSlide(2, 4)}></span>
                            </div>
                        </div>
                    </div>

                    {/* Add remaining events similarly */}
                    {/* Evento 6 (Maio Furta-cor) - Needs structure */}
                    <div className="item-evento" data-aos="fade-up">
                        <div className="info-evento">
                            <h2>Maio Furta-cor: Saúde Mental Materna</h2>
                            <div className="evento-meta">
                                <div className="meta-item">
                                    <span>📅</span>
                                    <span>Mês de Maio, 2023</span>
                                </div>
                                <div className="meta-item">
                                    <span>📍</span>
                                    <span>IFPR - Campus Assis Chateaubriand</span>
                                </div>
                            </div>
                            <p className="descricao-evento">
                                No mês de maio, o Coletivo de Mulheres "Elas por Elas" realizou uma ação em alusão ao Maio Furta-cor,
                                mês dedicado à conscientização sobre a saúde mental materna. Foram distribuídos materiais informativos
                                e promovidas rodas de conversa para discutir a importância do apoio às mães e desmistificar questões
                                relacionadas à maternidade e saúde mental.
                            </p>
                        </div>
                        <div className="unicaimagem">
                            {/* Assuming FOTO9 is the correct image based on original HTML structure near this section */}
                            <img src={`${process.env.PUBLIC_URL}/imagem/FOTO9-mês das mulhes.jpg`} alt="Maio Furta-cor" className="single-image" />
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