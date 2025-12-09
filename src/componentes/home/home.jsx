import React from "react";
import "./home.css";

export function Home() {
  return (
    <>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Alimentos Nutriz</h1>
          <p>Saúde, qualidade e sabor em cada produto.</p>
          <a href="#produtos" className="cta-button">Conheça nossos produtos</a>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="section light">
        <div className="container">
          <h2>Quem Somos</h2>
          <p>
            A Nutriz é referência em alimentos saudáveis, oferecendo soluções
            inovadoras para quem busca bem-estar e qualidade de vida.
          </p>
        </div>
      </section>

      {/* Certificações */}
      <section id="certificacoes" className="section">
        <div className="container">
          <h2>Certificações</h2>
          <p>
            Garantimos excelência com certificações nacionais e internacionais
            que comprovam nosso compromisso com a qualidade.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="section light">
        <div className="container">
          <h2>Produtos</h2>
          <div className="grid">
            <div className="card">
              <h3>Produto 1</h3>
              <p>Descrição breve e profissional.</p>
            </div>
            <div className="card">
              <h3>Produto 2</h3>
              <p>Descrição breve e profissional.</p>
            </div>
            <div className="card">
              <h3>Produto 3</h3>
              <p>Descrição breve e profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Receitas */}
      <section id="receitas" className="section">
        <div className="container">
          <h2>Receitas</h2>
          <p>
            Inspire-se com receitas criadas para valorizar nossos produtos e
            transformar sua alimentação.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section light contato">
        <div className="container">
          <h2>Contato</h2>
          <p>Fale com nossa equipe e descubra como podemos ajudar você.</p>
          <button className="cta-button">Entre em contato</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Nutriz Alimentos. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;