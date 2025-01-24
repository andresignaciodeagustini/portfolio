import { useContext } from 'react';
import { LanguageContext } from '../../context/languagecontext';
import './expertise.css';

const Expertise = () => {
    const { language, translations } = useContext(LanguageContext);
    const t = translations[language];

    const experience = [
        {
            role: t.roles.fullStack,
            company: "Freelance",
            period: "2022"
        },
        {
            role: t.roles.mediaAnalyst,
            company: "Media Matters",
            period: "2022"
        },
        {
            role: t.roles.dataAnalysis,
            company: t.companies.dataEngineering,
            period: "2022-2023"
        },
        {
            role: t.roles.programmingTutor,
            company: "Loop Learning",
            period: "2022-2023"
        },
        {
            role: t.roles.teacher,
            company: "Instituto Ortega y Gasset",
            period: "2007-2015"
        }
    ];

    const education = [
        {
            degree: t.education.fullStackEng,
            institution: "EducacionIT",
            period: "2023 - 2024"
        },
        {
            degree: t.education.fullStackDev,
            institution: "NUCBA",
            period: "2022 - 2023"
        },
        {
            degree: t.education.fullStackAP,
            institution: "Argentina Programa",
            period: "2022"
        },
        {
            degree: t.education.dataAnalysis,
            institution: "Udemy",
            period: "2022"
        },
        {
            degree: t.education.humanities,
            institution: "Universidad Nacional de Mar del Plata",
            period: "2004 - 2010"
        }
    ];

    return (
        <section id="expertise" className="home-expertise">
            <div className="center-text-container">
                <h2 className="section-title">{t.expertiseTitle}</h2>
                <p className="body-medium-light">
                    {t.expertiseDescription}
                </p>
            </div>

            <div className="list-wrapper">
                <div className="background">
                    <div className="experience">
                        <h5 className="title-medium">{t.experienceTitle}</h5>
                        {experience.map((item, index) => (
                            <div className="background-item" key={index}>
                                <div className="background-item-column">
                                    <div className="body-medium-regular">
                                        {item.role}
                                    </div>
                                    <div className="body-small-light">
                                        {item.company}
                                    </div>
                                </div>
                                <div className="time-period">
                                    {item.period}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="education">
                        <h5 className="title-medium">{t.educationTitle}</h5>
                        {education.map((item, index) => (
                            <div className="background-item" key={index}>
                                <div className="background-item-column">
                                    <div className="body-medium-regular">
                                        {item.degree}
                                    </div>
                                    <div className="body-small-light">
                                        {item.institution}
                                    </div>
                                </div>
                                <div className="time-period">
                                    {item.period}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;