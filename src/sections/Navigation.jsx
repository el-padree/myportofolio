import { useState } from 'react';
import { IoHome, IoPerson, IoRocket, IoConstruct, IoBriefcase } from 'react-icons/io5';
import MenuBtn from '../components/MenuBtn';
const Navigation = ({ language, onLanguageChange }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className="nav fade-in-item">
                <div className="brand">
                    Portofolio
                </div>
                <div className="list-menu">
                    <a href="#home" className="menu"><IoHome /> {language === 'id' ? 'Beranda' : 'Home'}</a>
                    <a href="#about" className="menu"><IoPerson /> {language === 'id' ? 'Tentang' : 'About'}</a>
                    <a href="#projects" className="menu"><IoRocket /> {language === 'id' ? 'Proyek' : 'Projects'}</a>
                    <a href="#experience" className="menu"><IoBriefcase /> {language === 'id' ? 'Pengalaman' : 'Experience'}</a>
                    <button
                        type="button"
                        className="language-toggle"
                        onClick={() => onLanguageChange(language === 'en' ? 'id' : 'en')}
                        aria-label={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
                        aria-pressed={language === 'id'}
                    >
                        <span className="language-switch-track">
                            <span className="language-switch-thumb">
                                <img
                                    src={language === 'en' ? 'https://flagcdn.com/w40/id.png' : 'https://flagcdn.com/w40/gb.png'}
                                    alt={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
                                />
                            </span>
                        </span>
                    </button>
                </div>
                <button
                    type="button"
                    className="language-toggle mobile-language-toggle"
                    onClick={() => onLanguageChange(language === 'en' ? 'id' : 'en')}
                    aria-label={language === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
                    aria-pressed={language === 'id'}
                >
                    <span className="language-switch-track">
                        <span className="language-switch-thumb">
                            <img
                                src={language === 'en' ? 'https://flagcdn.com/w40/id.png' : 'https://flagcdn.com/w40/gb.png'}
                                alt={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
                            />
                        </span>
                    </span>
                </button>
                <MenuBtn isOpen={menuOpen} onClick={() => setMenuOpen(open => !open)} />
                {menuOpen && <div className="mobile-backdrop" onClick={closeMenu} />}
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <a href="#home" className="menu mobile-menu-link" onClick={closeMenu}><IoHome /> {language === 'id' ? 'Beranda' : 'Home'}</a>
                    <a href="#about" className="menu mobile-menu-link" onClick={closeMenu}><IoPerson /> {language === 'id' ? 'Tentang' : 'About'}</a>
                    <a href="#projects" className="menu mobile-menu-link" onClick={closeMenu}><IoRocket /> {language === 'id' ? 'Proyek' : 'Projects'}</a>
                    <a href="#experience" className="menu mobile-menu-link" onClick={closeMenu}><IoBriefcase /> {language === 'id' ? 'Pengalaman' : 'Experience'}</a>
                </div>
            </nav>
            <div className="progress" />
        </>
    )
}
export default Navigation;
