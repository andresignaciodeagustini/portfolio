// src/context/languageprovider.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './languagecontext';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const translations = {
        en: {
            // Header
            getInTouch: "Get in touch",
            menu: "Menu",
            work: "Work",
            expertise: "Expertise",
            contact: "Contact",
            letsTalk: "Let's talk",
            
            // Menu Section
            loading: "Loading...",
            developer: "Developer",
            slidingText: "ANDRES DEAGUSTINI DEVELOPER",
            menuDescription: "Andres is a developer with extensive experience, passionate about creating innovative digital solutions and dedicated to building efficient, scalable, and user-friendly applications that make a difference. With a background in media analysis and marketing, he brings a unique perspective to development, combining technical expertise with strategic thinking. Currently focused on AI implementation and exploring ways to integrate artificial intelligence solutions into modern web applications.",
            knowMoreBtn: "Get to know me better",

            // Expertise Section
            expertiseTitle: "Get to know me better",
            expertiseDescription: "I currently work as a full stack engineer on projects that use technologies such as React, Node.js, HTML, CSS, and Python. I am focused on continuing my professional growth and am particularly interested in learning from shared experiences and diverse knowledge. My experience includes data analysis using Python, Pandas, and Matplotlib for ETL processes.",
            experienceTitle: "Experience",
            educationTitle: "Education",
            
            roles: {
                fullStack: "Full Stack Engineer",
                mediaAnalyst: "Media Analyst",
                dataAnalysis: "Data Analysis Engineer",
                programmingTutor: "Programming Tutor",
                teacher: "Teacher"
            },
            
            companies: {
                dataEngineering: "Data Engineering Consultant"
            },
            
            education: {
                fullStackEng: "Full Stack Engineer",
                fullStackDev: "Full Stack Development",
                fullStackAP: "Full Stack Developer",
                dataAnalysis: "Data Analysis with Python",
                humanities: "Profesorado en Humanidades"
            },

            // Contact Section
            getInTouchMarquee: "Get in touch —",
            socialLinks: {
                instagram: "Instagram",
                linkedin: "LinkedIn",
                github: "GitHub"
            },
            letsTalkButton: "Let's talk",
            copyright: "© 2024. No rights reserved."
        },
        es: {
            // Header
            getInTouch: "Contacto",
            menu: "Menú",
            work: "Trabajos",
            expertise: "Experiencia",
            contact: "Contacto",
            letsTalk: "Hablemos",
            
            // Menu Section
            loading: "Cargando...",
            developer: "Desarrollador",
            slidingText: "ANDRES DEAGUSTINI DESARROLLADOR",
            menuDescription: "Andrés es un desarrollador con amplia experiencia, apasionado por crear soluciones digitales innovadoras y dedicado a construir aplicaciones eficientes, escalables y fáciles de usar que marcan la diferencia. Con experiencia en análisis de medios y marketing, aporta una perspectiva única al desarrollo, combinando experiencia técnica con pensamiento estratégico. Actualmente enfocado en la implementación de IA y explorando formas de integrar soluciones de inteligencia artificial en aplicaciones web modernas.",
            knowMoreBtn: "Conóceme mejor",

            // Expertise Section
            expertiseTitle: "Conóceme mejor",
            expertiseDescription: "Actualmente trabajo como ingeniero full stack en proyectos que utilizan tecnologías como React, Node.js, HTML, CSS y Python. Estoy enfocado en continuar mi crecimiento profesional y estoy particularmente interesado en aprender de experiencias compartidas y conocimientos diversos. Mi experiencia incluye análisis de datos usando Python, Pandas y Matplotlib para procesos ETL.",
            experienceTitle: "Experiencia",
            educationTitle: "Educación",
            
            roles: {
                fullStack: "Ingeniero Full Stack",
                mediaAnalyst: "Analista de Medios",
                dataAnalysis: "Ingeniero de Análisis de Datos",
                programmingTutor: "Tutor de Programación",
                teacher: "Profesor"
            },
            
            companies: {
                dataEngineering: "Consultor de Ingeniería de Datos"
            },
            
            education: {
                fullStackEng: "Ingeniero Full Stack",
                fullStackDev: "Desarrollo Full Stack",
                fullStackAP: "Desarrollador Full Stack",
                dataAnalysis: "Análisis de Datos con Python",
                humanities: "Profesorado en Humanidades"
            },

            // Contact Section
            getInTouchMarquee: "Contactame —",
            socialLinks: {
                instagram: "Instagram",
                linkedin: "LinkedIn",
                github: "GitHub"
            },
            letsTalkButton: "Hablemos",
            copyright: "© 2024 Tu Nombre. Todos los derechos reservados."
        }
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default LanguageProvider;