import { useState, useEffect } from 'react';
import "./navegacao.css";
import logo from './logo_nutriz.png';

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`hero-container ${scrolled ? 'scrolled' : ''}`}>
                
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo nutriz" />
                </div>

                {/* --- DESKTOP NAV --- */}
                <div className="hero-nav desktop-nav">
                    <a className="direcionais" href="#inicio">INÍCIO</a>
                    <a className="direcionais" href="#quem-somos">QUEM SOMOS</a>
                    <a className="direcionais" href="#certificacoes">CERTIFICAÇÕES</a>
                    <a className="direcionais" href="#produtos">PRODUTOS</a>
                    <a className="direcionais" href="#receitas">RECEITAS</a>

                    <a href="#contato">
                     
<button class="button">Contato</button>

                    </a>
                </div>

                {/* --- HAMBURGER ICON (MOBILE) --- */}
                <div 
                    className="hamburger" 
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </div>
            </div>


            {/* --- MOBILE MENU OVERLAY --- */}
            {menuOpen && (
                <div className="mobile-overlay" onClick={() => setMenuOpen(false)}>
                    <div 
                        className="mobile-menu" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="close-btn" onClick={() => setMenuOpen(false)}>✕</div>

                        <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
                        <a href="#quem-somos" onClick={() => setMenuOpen(false)}>Sobre</a>
                        <a href="#certificacoes" onClick={() => setMenuOpen(false)}>Serviços</a>
                        <a href="#produtos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
                        <a href="#receitas" onClick={() => setMenuOpen(false)}>Contato</a>

                        <a href="#contato"><button className="mobile-cta">Contato</button></a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;