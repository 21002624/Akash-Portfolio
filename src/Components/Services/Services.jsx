import React from 'react';
import './Services.css';
import Project1 from './Project1';

const Services = () => {


    return (
        <section id='services'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My Personal Projects</span>
            <Project1 />
        </section>
    );
};

export default Services;
