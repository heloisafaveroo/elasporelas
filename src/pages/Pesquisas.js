
import React from 'react';


const Pesquisas = () => {
    return (
        <main>
            <section className="estudo">
                <section className="metodologia">
                    <h2>Artigos do projeto</h2>
                    <p>Com pesquisa levantadas sobre estudos de gênero, empoderamento feminino e metodologias participativas.
                        Abaixo você encontra nosso artigo "CRIAÇÃO DE UM SITE PARA AUMENTAR A VISIBILIDADE ONLINE DO COLETIVO DE MULHERES “ELAS POR ELAS”,
                        que apresenta uma grande tragetória até os dias de hoje e a metodologia do desenvolvimento do site (melhorar...deixar menor) </p>
                    <div className="link-item">
                        <h5><a href="#">CRIAÇÃO DE UM SITE PARA AUMENTAR A VISIBILIDADE ONLINE DO COLETIVO DE MULHERES “ELAS POR ELAS</a></h5>
                        <div className="author">Camila Bezerra, Fabiola Dutra, Heloisa Favero; 2025</div>
                        <div className="description">O artigo traça a evolução do feminismo desde o século XIX, destacando sua luta pela igualdade
                            de gênero e as conquistas globais, nacionais (Brasil) e regionais (Paraná), como o sufrágio e leis contra a violência.
                            Ele também aborda o desafio de aumentar a visibilidade do projeto de pesquisa e extenção: coletivo de mulheres "Elas por Elas" do IFPR em Assis Chateaubriand,
                            e descrevendo a iniciativa de criar um site e fortalecer sua presença digital. O objetivo é ampliar o alcance e o impacto das ações
                            de empoderamento feminino desse grupo.</div>
                    </div>
                </section>
            </section>
            <section className="estudo">
                <section className="materiais">
                    <h2>Artigos, Estudos e Materiais de Apoio</h2>
                    <p>Nossa base teórica fundamenta-se em pesquisas sobre estudos de gênero, empoderamento feminino e metodologias participativas. Abaixo, você encontra os principais materiais que embasam nosso trabalho
                        e livros relacionado ao tema.
                    </p>

                    <h3>📚 Artigos Científicos, sites confiáveis e livros</h3><strong>lembrete:</strong>( separar artigos e livros e colocar em ordem que um corresponda o outro e terminar de colocar os que faltam)
                    
                    <div className="link-item">
                        <h5><a href="https://www.nexojornal.com.br/explicado/2020/03/07/feminismo-origens-conquistas-e-desafios-no-seculo-21" target="_blank" rel="noopener noreferrer">Feminismo: origens, conquistas e desafios no século 21</a></h5>
                        <div className="author">NEXO JORNAL. Feminismo: origens, conquistas e desafios no século 21. Juliana Domingos; 7 mar. 2020.</div>
                        <div className="description">O feminismo, um movimento histórico e contínuo pela igualdade entre mulheres e homens,
                            evoluiu de lutas pelo sufrágio e acesso à educação para abordar temas como raça, sexualidade
                            e interseccionalidade. Atualmente, ele se manifesta em mobilizações digitais e globais contra
                            a violência e pela representatividade, enfatizando que a vigilância pelos direitos femininos
                            é constante.</div>
                    </div>

                    <div className="link-item">
                        <h5><a href="/pdf/admin,+Livres+-+Mulheres+e+espaço+público+-+245+260.pdf" target="_blank" rel="noopener noreferrer">Mulheres espaço público: invisibilidade social feminina e o direito ao voto no Brasil</a></h5>
                        <div className="author">Mosaico – v. 10, n. 17. Paula Falcão; 10 dez. 2019.</div>
                        <div className="description">Discute a histórica invisibilidade social das mulheres, que foram relegadas ao espaço doméstico,
                            enquanto os homens dominavam a esfera pública. A conquista do voto feminino no Brasil em 1932, resultado de uma longa luta liderada
                            por ativistas como Bertha Lutz, é analisada como um marco parcial para a participação política feminina. O texto conclui que, apesar
                            dos avanços, a representatividade das mulheres em cargos políticos ainda é baixa, destacando a importância do feminismo como agente
                            decisivo para a atuação feminina na cena pública.
                        </div>
                    </div>
                    
                </section>
            </section>
        </main>
    );
};

export default Pesquisas;
