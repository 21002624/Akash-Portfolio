import React from 'react';
import './Project1.css';
import img from '../../assets/p1.png';

const Project1 = () => {
  return (
    <div className='projectContainer'>
        <div className="imgContainer">
            <img className='projectImg' src={img} alt='img' />
            <a 
            href="https://amaze-ecomm.netlify.app/" target='_blank' 
            className="button button--flex" 
            style={{
                display: 'flex',
                alignItems: 'center',
                gap:'.5rem',
                height:'3rem',
                marginTop : '2rem'
            }}
            >
  Visit Website
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
</a>

        </div>

        <div className="projectDetailsContainer">
            <div className="projectTitleContainer">
                <h1>Amaze E-com</h1>
            </div>
            <div className="projectDiscriptionContainer">
            Developed a dynamic and fully functional e-commerce website using React as the frontend framework. The application supports a wide range of features typical of modern online shopping platforms, offering users an intuitive and seamless shopping experience.
            </div>
        </div>
      
    </div>
  )
}

export default Project1
