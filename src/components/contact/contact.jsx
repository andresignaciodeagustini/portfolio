import { useContext } from 'react';
import { LanguageContext } from '../../context/languagecontext';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <footer id="contact" className="footer">
            {/* Marquee de texto */}
            <div className="section-marquee">
                {[...Array(15)].map((_, index) => (
                    <h3 key={index} className="marquee-heading-medium">
                        {t.getInTouchMarquee}
                    </h3>
                ))}
            </div>

            <div className="footer-container">
                <div className="footer-content">
                    <div className="socials-container">
                        <ul className="social-links-container">
                            <li className="list-item">
                                <div className="social-link-hover-container">
                                    <a 
                                        href="https://www.instagram.com/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-link"
                                        aria-label={t.socialLinks.instagram}
                                    >
                                        <FaInstagram className="social-icon" />
                                    </a>
                                    <div className="social-link-border"></div>
                                </div>
                                <div className="social-link-hover-container">
                                    <a 
                                        href="https://www.linkedin.com/in/andres-deagustini-698223226/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-link"
                                        aria-label={t.socialLinks.linkedin}
                                    >
                                        <FaLinkedinIn className="social-icon" />
                                    </a>
                                    <div className="social-link-border"></div>
                                </div>
                                <div className="social-link-hover-container">
                                    <a 
                                        href="https://github.com/andresignaciodeagustini/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="social-link"
                                        aria-label={t.socialLinks.github}
                                    >
                                        <FaGithub className="social-icon" />
                                    </a>
                                    <div className="social-link-border"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a 
                        href="mailto:andresignaciodeagustini@gmail.com" 
                        className="button-primary footer-button"
                    >
                        {t.letsTalkButton}
                    </a>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">{t.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;