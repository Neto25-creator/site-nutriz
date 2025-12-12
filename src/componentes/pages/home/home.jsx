import React from "react";
import "./home.css";
import videoBackground from "./video_home.mp4";
import brocolis01 from "./brocolis_01.png";


export function Home() {
    return (
        <>
            {/* Hero Section com vídeo de fundo */}
            <section id="hero" className="hero">
                <video autoPlay muted loop playsInline className="hero-video">
                    <source src={videoBackground} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>

                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>O frescor que você deseja, a</h1>
                    <h1>praticidade que você precisa.</h1>
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
                    </div>
                    <img className="brocolis01" src={brocolis01} alt="brocolis aqui" />
                </div>
            </section>

            <section className="section">
                <div className="section-content">
                    <h2>Certificações</h2>
                    <p>Detalhes sobre qualidade e reconhecimento.</p>
                </div>
            </section>

            <section id="produtos" className="section light">
                <div className="section-content">
                    <h2>Produtos</h2>
                    <p>Lista de produtos oferecidos pela Nutriz.</p>
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

            <footer className="footer">
                <p>© 2025 Nutriz Alimentos. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

export default Home;