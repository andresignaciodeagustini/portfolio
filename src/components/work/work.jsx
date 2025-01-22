import { useContext } from 'react';
import { LanguageContext } from '../../context/languagecontext';
import card1Image from '../../assets/img/card1.png';
import card2Image from '../../assets/img/card2.png';
import card3Image from '../../assets/img/card3.png';
import './work.css';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaDatabase,
    FaChartBar  
} from 'react-icons/fa';
import { 
    SiDjango, 
    SiPandas, 
    SiMysql, 
    SiMongodb, 
    SiThreedotjs, 
    SiJest
} from 'react-icons/si';

const Work = () => {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];

    const technologies = [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <FaPython />, name: 'Python' },
        { icon: <SiDjango />, name: 'Django' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <FaDatabase />, name: 'SQL' },
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiThreedotjs />, name: 'Three.js' },
        { icon: <SiJest />, name: 'Jest' },
        { icon: <FaChartBar />, name: 'Data Visualization' }
    ];

    const projects = [
        {
            ...t.projects.project1,
            image: card1Image,
            link: "https://frontend-ricci-2.onrender.com/"
        },
        {
            ...t.projects.project2,
            image: card2Image,
            link: "https://sushi2f.onrender.com"
        },
        {
            ...t.projects.project3,
            image: card3Image,
            link: "https://github.com/andresignaciodeagustini/ETL-Python"
        }
    ];

    return (
        <section id="work" className="work-section">
            <div className="tech-slider">
                <div className="slider-track">
                    {technologies.map((tech, index) => (
                        <div className="slide" key={index}>
                            <div className="tech-icon">
                                {tech.icon}
                            </div>
                        </div>
                    ))}
                    
                    {technologies.map((tech, index) => (
                        <div className="slide" key={`duplicate-${index}`}>
                            <div className="tech-icon">
                                {tech.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="work-container">
                {projects.map((project, index) => (
                    <div className="case-study-card" key={index}>
                        <div className="case-text-container">
                            <h1 className="overline">{project.overline}</h1>
                            <h2 className="title-large">{project.title}</h2>
                            <p className="body-medium-regular">
                                {project.description}
                            </p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="case-arrow"
                            />
                        </div>
                        <div className="case-image-container">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="case-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;