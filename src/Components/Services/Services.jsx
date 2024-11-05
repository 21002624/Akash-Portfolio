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
                        <h3 className="services__title">React<br /> Projects</h3>
                    </div>

                    {/* <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span> */}

                    <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Product <br /> Designer</h3>
                            <p className="services__model-description">Yet to add</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Mern<br /> Projects</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Web <br /> Developer</h3>
                            <p className="services__model-description">Yet to add</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">DSA <br /> Projects</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Graphic <br /> Designer</h3>
                            <p className="services__model-description">Yet to add</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                                <li className="services__model-service">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Yet to add</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
