import React from "react";
import "./home.css";
import videoBackground from "./video_home.mp4";
import brocolis01 from "./brocolis_01.png";
import brocolis_home from "./brocolis_home.png"
import Footer from "../../footer/footer";


export function Home() {
    return (
        <>
            {/* Hero Section com vídeo de fundo */}
            <section id="hero" className="hero">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>O frescor que você deseja, a</h1>
                    <h1>praticidade que você precisa.</h1>
                    <img className="brocolis-bg" src={brocolis_home} alt="Brócolis frescos" />
                    <p>Alimentos congelados saborosos, práticos e de qualidade. Delicie-se!</p>
                    <a href="#produtos" className="cta-button">Conheça</a>
                </div>
            </section>

            {/* Seções genéricas */}
            <section className="section light">
                <div className="section-content">
                    <div className="titulo01">
                        <h2>Alimentos Congelados
                            <span> Nutriz:</span> Sabor e frescor
                            na sua mesa
                        </h2>
                        <p className="descricao01">Estamos presentes em todo o território brasileiro, adotando uma abordagem inovadora e utilizando equipamentos modernos para garantir qualidade em todas as etapas da nossa produção, desde a escolha da semente até a entrega ao cliente.

                            Nossos produtos são ecologicamente corretos, mantendo as características nutricionais, sabor e textura dos alimentos.

                            Somos referência no setor de congelados e nos destacamos pelo comprometimento e seriedade.</p>
                        <button className="btn-sb">Saiba mais</button>
                    </div>
                    <img className="brocolis01" src={brocolis01} alt="brocolis aqui" />
                </div>
            </section>

            <section className="section">
                <div className="section-content">
                    <div className="diferenciais">
                        <img src=""></img>
                        <h2>Conheça os principais diferenciais dos alimentos Nutriz:</h2>
                        <div className="cards">
                        <div className="card-diferenciais-1">
                            <span>Alimentos 100% naturais, livres de aditivos e conservantes</span>

                            <h2>Selecionados, limpos, descascados, cortados e congelados individualmente. Sem corantes ou conservantes, preservando a autenticidade e qualidade.</h2>
                        </div>
                        <div className="card-diferenciais-2">
                            <span>Praticidade e economia</span>

                            <h2>Sem a necessidade de descongelar antes do preparo e com a possibilidade de retornar o restante da embalagem ao freezer, evitando desperdícios!</h2>
                        </div>
                        <div className="card-diferenciais-3">
                            <span>Preparo rápido e com qualidade garantida</span>

                            <h2>Nossos alimentos oferecem um rápido preparo, garantindo qualidade nutricional e microbiológica.</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="produtos" className="section light">
                <div className="section-content">
                    <div className="imagem-horizontal"></div>
                </div>
            </section>

            <section className="section-receita">
                <div className="section-content">
                    <h2>Receitas</h2>
                    <p>Inspire-se com
                        receitas deliciosas para preparar com os seus alimentos Nutriz!</p>
                </div>
            </section>

            <section className="section light">
                <div className="section-content">
                    <h2>Contato</h2>
                    <p>Entre em contato conosco para mais informações.</p>
                    <button className="cta-button">Fale conosco</button>
                </div>
            </section>

          <Footer/>
        </>
    );
}

export default Home;