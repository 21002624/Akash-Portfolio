import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button  button--flex"
                        } onClick={()=>toggleTab(1)}> 
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div 
                    className={
                        toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button  button--flex"
                        } onClick={()=>toggleTab(2)} >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content "
                 }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">High Schooling</h3>
                            <span className="qualification__subtitle">
                            Oxford Matriculation
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2021 - Grad
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Engineering</h3>
                            <span className="qualification__subtitle">
                                Saveetha Engineering College
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>

                        
                    </div>



                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web developer</h3>
                            <span className="qualification__subtitle">
                                Oxford Metriculation
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX expert</h3>
                            <span className="qualification__subtitle">
                                Oxford Metriculation
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2028 - present
                            </div>
                        </div>
                    </div> */}




                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content "
                 }>
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">product designer</h3>
                            <span className="qualification__subtitle">
                                olujhne
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Front End Developer</h3>
                            <span className="qualification__subtitle">
                                Connect Infosystems
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                Jan 2023 – Feb 2023
                            </div>
                        </div>

                        
                    </div>



                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Project Development</h3>
                            <span className="qualification__subtitle">
                                Personal Projects
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX expert</h3>
                            <span className="qualification__subtitle">
                                Oxford Metriculation
                            </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i>
                                2028 - present
                            </div>
                        </div>
                    </div> */}




                </div>
            </div>
        </div>
    </section> 
  )
}

export default Qualification
