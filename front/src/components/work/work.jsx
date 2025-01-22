import cardImage from '../../assets/img/card.jpg';
import './work.css';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaDatabase,
    FaChartBar  // Agregado para reemplazar Matplotlib
} from 'react-icons/fa';
import { 
    SiDjango, 
    SiPandas, 
    SiMysql, 
    SiMongodb, 
    SiThreedotjs, // Corregido de SiThreejs
    SiJest
} from 'react-icons/si';

const Work = () => {
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
            overline: "Full-Stack E-commerce",
            title: "Valentino Ricci",
            description: "Premium e-commerce solution featuring seamless MercadoPago integration for secure transactions. Built with a modern tech stack including React, Vite, Node.js, and MongoDB. Highlights include: robust user authentication system with role-based access control, interactive product carousel using React Slick, responsive design with Ant Design components, secure payment processing through MercadoPago API, and comprehensive admin dashboard for inventory and user management. Enhanced with features like image upload capabilities, form validation using React Hook Form, and real-time stock management. Implemented with best practices including ESLint for code quality and JWT for secure authentication.",
            image: cardImage
        },
        {
            overline: "Chatbot",
            title: "Sushi Zen",
            description: "Sushi delivery platform featuring an AI-powered chatbot for seamless ordering. Built with React and Vite for the frontend, Node.js and Express for the backend, and MongoDB for data persistence. The system includes comprehensive order tracking, product analytics, and customer behavior insights through DialogFlow integration. Key features include user authentication, real-time order status updates, and data-driven marketing analytics dashboard. Implemented with modern development practices including Jest testing and ESLint code quality tools.",
            image: cardImage
        },
        {
            overline: "Data Analytics ETL",
            title: "ETL Alkemy",
            description: "ETL (Extract, Transform, Load) pipeline analyzing Argentina's cultural infrastructure. Built with Python and modern data science tools, the system processes data from multiple government sources including museums, cinemas, and public libraries. Key features include: automated data extraction from public APIs, comprehensive data normalization using Pandas, geospatial analysis of cultural institutions, statistical processing for cultural density metrics, and automated report generation. Technologies include Python, Django for web interface, Pandas for data manipulation, SQLAlchemy for database operations, and Matplotlib for data visualization. The system provides valuable insights for cultural policy planning and resource allocation.",
            image: cardImage
        }
    ];

    return (
        <section id= "work" className="work-section">
            {/* Slider de tecnologías */}
            <div className="tech-slider">
                <div className="slider-track">
                    {technologies.map((tech, index) => (
                        <div className="slide" key={index}>
                            <div className="tech-icon">
                                {tech.icon}
                                
                            </div>
                        </div>
                    ))}
                    {/* Duplicamos los iconos para crear el efecto infinito */}
                    {technologies.map((tech, index) => (
                        <div className="slide" key={`duplicate-${index}`}>
                            <div className="tech-icon">
                                {tech.icon}
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contenedor de proyectos */}
            <div className="work-container">
                {projects.map((project, index) => (
                    <div className="case-study-card" key={index}>
                        <div className="case-text-container">
                            <h1 className="overline">{project.overline}</h1>
                            <h2 className="title-large">{project.title}</h2>
                            <p className="body-medium-regular">
                                {project.description}
                            </p>
                            <div className="case-arrow"></div>
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