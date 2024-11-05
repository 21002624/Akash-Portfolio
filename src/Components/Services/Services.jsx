import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My Projects</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Amaze Ecom Web Application</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Amaze Ecom Web Application</h3>

                            <iframe 
                                src="https://amaze-ecomm.netlify.app/" 
                                title="Amaze Bazaar" 
                                style={{ 
                                    width: '100%', // Adjust width to fit your design
                                    height: '300px', // Adjust height as needed
                                    border: 'none' // Remove default border
                                }}
                            ></iframe>
                            <div className="check">
                                <a href='https://amaze-ecomm.netlify.app/' target='_blank' rel="noopener noreferrer">
                                <h3>Check out</h3>
                                <i className="uil uil-arrow-up-right services__icon"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">React Portfolio</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">React Portfolio</h3>
                            <iframe 
                                src="https://akazh-portfolio.netlify.app/" 
                                title="Amaze Bazaar" 
                                style={{ 
                                    width: '100%', // Adjust width to fit your design
                                    height: '300px', // Adjust height as needed
                                    border: 'none' // Remove default border
                                }}
                            ></iframe>
                            <div className="check">
                                <a href='https://akazh-portfolio.netlify.app/' target='_blank' rel="noopener noreferrer">
                                <h3>Check out</h3>
                                <i className="uil uil-arrow-up-right services__icon"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Community Mern Application</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Community Mern Application</h3>
                            <iframe 
                                src="https://community-app-rv9k.onrender.com/login" 
                                title="Amaze Bazaar" 
                                style={{ 
                                    width: '100%', 
                                    height: '300px', 
                                    border: 'none' 
                                }}
                            ></iframe>
                            <div className="check">
                                <a href='https://community-app-rv9k.onrender.com/login' target='_blank' rel="noopener noreferrer">
                                <h3>Check out</h3>
                                <i className="uil uil-arrow-up-right services__icon"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Blockchain Evoting System</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(4)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Blockchain Evoting System</h3>
                            <iframe 
                                src="https://blockchain-evoting.netlify.app/" 
                                title="Amaze Bazaar" 
                                style={{ 
                                    width: '100%', 
                                    height: '300px', 
                                    border: 'none' 
                                }}
                            ></iframe>

                            <div className="check">
                                <a href='https://blockchain-evoting.netlify.app/' target='_blank' rel="noopener noreferrer">
                                <h3>Check out</h3>
                                <i className="uil uil-arrow-up-right services__icon"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
