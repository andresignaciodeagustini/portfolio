import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/languagecontext';
import logo from '../../assets/img/logo.png';
import './header.css';

// Componente para el icono de menú hamburguesa
const MenuIcon = () => (
    <svg 
        width="18" 
        height="12" 
        viewBox="0 0 18 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <line y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1"/>
        <line y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1"/>
        <line y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1"/>
    </svg>
);

// Componente para el icono X
const CloseIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <line 
            x1="1" 
            y1="1" 
            x2="17" 
            y2="17" 
            stroke="currentColor" 
            strokeWidth="1"
            strokeLinecap="round"
        />
        <line 
            x1="1" 
            y1="17" 
            x2="17" 
            y2="1" 
            stroke="currentColor" 
            strokeWidth="1"
            strokeLinecap="round"
        />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOnDarkSection, setIsOnDarkSection] = useState(false);
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const t = translations[language];

    useEffect(() => {
        const checkSection = () => {
            const expertise = document.getElementById('expertise');
            const contact = document.getElementById('contact');
            
            if (expertise && contact) {
                const expertiseRect = expertise.getBoundingClientRect();
                const contactRect = contact.getBoundingClientRect();
                
                const isExpertiseVisible = expertiseRect.top <= 100 && expertiseRect.bottom >= 100;
                const isContactVisible = contactRect.top <= 100 && contactRect.bottom >= 100;
                
                setIsOnDarkSection(isExpertiseVisible || isContactVisible);
            }
        };

        window.addEventListener('scroll', checkSection);
        checkSection();

        return () => window.removeEventListener('scroll', checkSection);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            setIsMenuOpen(false);
        }
    };

    const handleLetsTalkClick = () => {
        window.location.href = 'mailto:andresignaciodeagustini@gmail.com';
        setIsMenuOpen(false);
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <header className={`header ${isOnDarkSection ? 'on-dark' : ''}`}>
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="header-right-container">
                    <div className={`header-buttons ${isOnDarkSection ? 'on-dark' : ''}`}>
                        <button 
                            className={`get-in-touch-btn ${isOnDarkSection ? 'on-dark' : ''}`}
                            onClick={handleLetsTalkClick}
                        >
                            {t.getInTouch}
                        </button>
                        
                        <button 
                            className={`menu-btn ${isOnDarkSection ? 'on-dark' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                <div className={`language-buttons ${isOnDarkSection ? 'on-dark' : ''}`}>
                    <button 
                        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                        onClick={() => handleLanguageChange('en')}
                    >
                        EN
                    </button>
                    <button 
                        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                        onClick={() => handleLanguageChange('es')}
                    >
                        ES
                    </button>
                </div>
            </div>

            <div 
                className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                <button 
                    className="close-menu-btn"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <CloseIcon />
                </button>
                <nav>
                    <h2 className="menu-title">{t.menu}</h2>
                    <ul>
                        <li onClick={() => scrollToSection('work')}>{t.work}</li>
                        <li onClick={() => scrollToSection('expertise')}>{t.expertise}</li>
                        <li onClick={() => scrollToSection('contact')}>{t.contact}</li>
                    </ul>
                    <button 
                        className="lets-talk-btn"
                        onClick={handleLetsTalkClick}
                    >
                        {t.letsTalk}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;