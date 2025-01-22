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
            getInTouch: "Get in touch",
            menu: "Menu",
            work: "Work",
            expertise: "Expertise",
            contact: "Contact",
            letsTalk: "Let's talk",
            
            loading: "Loading...",
            developer: "Developer",
            slidingText: "ANDRES DEAGUSTINI DEVELOPER",
            menuDescription: "Andres is a developer with extensive experience, passionate about creating innovative digital solutions and dedicated to building efficient, scalable, and user-friendly applications that make a difference. With a background in media analysis and marketing, he brings a unique perspective to development, combining technical expertise with strategic thinking. Currently focused on AI implementation and exploring ways to integrate artificial intelligence solutions into modern web applications.",
            knowMoreBtn: "Get to know me better",
            
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

            projects: {
                project1: {
                    overline: "Full-Stack E-commerce",
                    title: "Valentino Ricci",
                    description: "E-commerce solution featuring seamless MercadoPago integration for secure transactions. Built with a modern tech stack including React, Vite, Node.js, and MongoDB. Highlights include: robust user authentication system with role-based access control, interactive product carousel using React Slick, responsive design with Ant Design components, secure payment processing through MercadoPago API, and comprehensive admin dashboard for inventory and user management. Enhanced with features like image upload capabilities, form validation using React Hook Form, and real-time stock management. Implemented with best practices including ESLint for code quality and JWT for secure authentication."
                },
                project2: {
                    overline: "Chatbot",
                    title: "Sushi Zen",
                    description: "Sushi delivery platform featuring an AI-powered chatbot for seamless ordering. Built with React and Vite for the frontend, Node.js and Express for the backend, and MongoDB for data persistence. The system includes comprehensive order tracking, product analytics, and customer behavior insights through DialogFlow integration. Key features include user authentication, real-time order status updates, and data-driven marketing analytics dashboard. Implemented with modern development practices including Jest testing and ESLint code quality tools."
                },
                project3: {
                    overline: "Data Analytics ETL",
                    title: "ETL Alkemy",
                    description: "ETL (Extract, Transform, Load) pipeline analyzing Argentina's cultural infrastructure. Built with Python and modern data science tools, the system processes data from multiple government sources including museums, cinemas, and public libraries. Key features include: automated data extraction from public APIs, comprehensive data normalization using Pandas, geospatial analysis of cultural institutions, statistical processing for cultural density metrics, and automated report generation. Technologies include Python, Django for web interface, Pandas for data manipulation, SQLAlchemy for database operations, and Matplotlib for data visualization. The system provides valuable insights for cultural policy planning and resource allocation."
                }
            },
          
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
            getInTouch: "Contacto",
            menu: "Menú",
            work: "Trabajos",
            expertise: "Experiencia",
            contact: "Contacto",
            letsTalk: "Hablemos",
            
            loading: "Cargando...",
            developer: "Desarrollador",
            slidingText: "ANDRES DEAGUSTINI DESARROLLADOR",
            menuDescription: "Andrés es un desarrollador con amplia experiencia, apasionado por crear soluciones digitales innovadoras y dedicado a construir aplicaciones eficientes, escalables y fáciles de usar que marcan la diferencia. Con experiencia en análisis de medios y marketing, aporta una perspectiva única al desarrollo, combinando experiencia técnica con pensamiento estratégico. Actualmente enfocado en la implementación de IA y explorando formas de integrar soluciones de inteligencia artificial en aplicaciones web modernas.",
            knowMoreBtn: "Conóceme mejor",
           
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

            projects: {
                project1: {
                    overline: "E-commerce Full-Stack",
                    title: "Valentino Ricci",
                    description: "Solución de comercio electrónico con integración perfecta de MercadoPago para transacciones seguras. Construido con un stack tecnológico moderno que incluye React, Vite, Node.js y MongoDB. Características destacadas: sistema robusto de autenticación de usuarios con control de acceso basado en roles, carrusel interactivo de productos usando React Slick, diseño responsivo con componentes de Ant Design, procesamiento seguro de pagos a través de la API de MercadoPago y panel de administración completo para gestión de inventario y usuarios. Mejorado con funcionalidades como capacidad de carga de imágenes, validación de formularios usando React Hook Form y gestión de stock en tiempo real. Implementado con mejores prácticas incluyendo ESLint para calidad de código y JWT para autenticación segura."
                },
                project2: {
                    overline: "Chatbot",
                    title: "Sushi Zen",
                    description: "Plataforma de entrega de sushi con un chatbot impulsado por IA para pedidos sin problemas. Construido con React y Vite para el frontend, Node.js y Express para el backend, y MongoDB para la persistencia de datos. El sistema incluye seguimiento completo de pedidos, análisis de productos y perspectivas del comportamiento del cliente a través de la integración de DialogFlow. Las características principales incluyen autenticación de usuarios, actualizaciones de estado de pedidos en tiempo real y panel de análisis de marketing basado en datos. Implementado con prácticas modernas de desarrollo incluyendo pruebas Jest y herramientas de calidad de código ESLint."
                },
                project3: {
                    overline: "ETL Análisis de Datos",
                    title: "ETL Alkemy",
                    description: "Pipeline ETL (Extraer, Transformar, Cargar) que analiza la infraestructura cultural de Argentina. Construido con Python y herramientas modernas de ciencia de datos, el sistema procesa datos de múltiples fuentes gubernamentales incluyendo museos, cines y bibliotecas públicas. Características principales: extracción automatizada de datos de APIs públicas, normalización integral de datos usando Pandas, análisis geoespacial de instituciones culturales, procesamiento estadístico para métricas de densidad cultural y generación automatizada de informes. Las tecnologías incluyen Python, Django para interfaz web, Pandas para manipulación de datos, SQLAlchemy para operaciones de base de datos y Matplotlib para visualización de datos. El sistema proporciona información valiosa para la planificación de políticas culturales y asignación de recursos."
                }
            },
         
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