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


            <div className='navegacao'>
                <div className={`hero-container ${scrolled ? 'scrolled' : ''}`}>

                    <div className="logo-container">
                        <img className="logo" src={logo} alt="logo nutriz" />
                    </div>

                    {/* --- DESKTOP NAV --- */}
                    <div className="hero-nav desktop-nav">
                        <div className='referencias'>
                            <a className="direcionais" href="#inicio">Início</a>
                            <a className="direcionais" href="#quem-somos">Quem somos</a>
                            <a className="direcionais" href="#certificacoes">Certificações</a>
                            <a className="direcionais" href="#produtos">Produtos</a>
                            <a className="direcionais" href="#receitas">Receitas</a>
                        </div>
                        
                    </div>
                    <div className='botoes'>
                                <button className="botao-contato">Contato</button>
                        </div>
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