import React from 'react';
import './Project1.css';
import img from '../../assets/p1.png';
import img2 from '../../assets/p2.png';
import img3 from '../../assets/p3.png';

const Project1 = () => {
  return (
    <section className='projectSection'>
    <div className='projectContainer'>
        <div className="imgContainer">
            <div className='smallText'>
                <h1>React</h1>
            </div>
            <img className='projectImg' src={img} alt='img' />
            <a 
            href="https://amaze-ecomm.netlify.app/" target="_blank" without rel="noreferrer"
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
            <div className='smallText'>
                Developed a React-based e-commerce site with RESTful APIs, cart, wishlist, JWT authentication, Material-UI, and responsive design
            </div>
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

    <div className='projectContainer'> 
        <div className="projectDetailsContainer">
            <div className="projectTitleContainer">
                <h1>X Clone App</h1>
            </div>
            <div className="projectDiscriptionContainer">
            Developed a feature-rich X clone using React and TanStack Query for efficient data fetching and caching. Integrated MongoDB as the database for scalable storage, with Node.js and Express.js powering the backend. Implemented JWT authentication, role-based access control, dynamic updates, and optimized performance with React.lazy and optimistic UI updates.
            </div>
        </div>
        <div className="imgContainer">
            <div className='smallText'>
                <h1>tanStack</h1>
            </div>
            <img className='projectImg' src={img2} alt='img' />
            <a 
            href="https://community-app-rv9k.onrender.com/" target="_blank" without rel="noreferrer"
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
            <div className='smallText'>  
                Built an X clone with React, TanStack Query, MongoDB, JWT authentication, role-based access control, and dynamic UI updates.
            </div>
        </div>
      
    </div>

    <div className='projectContainer'>
        <div className="imgContainer">
            <div className='smallText'>
                <h1>Blockchain </h1>
            </div>
            <img className='projectImg' src={img3} alt='img' />
            <a 
            href="https://blockchain-evoting.netlify.app/" target="_blank" without rel="noreferrer"
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
            <div className='smallText'>
                Built a decentralized e-voting app using React, Blockchain, smart contracts, and Web3 for secure, transparent, tamper-proof voting.
            </div>
        </div>

        <div className="projectDetailsContainer">
            <div className="projectTitleContainer">
                <h1>E-Voting DAPP</h1>
            </div>
            <div className="projectDiscriptionContainer">
            In this project, I implemented a decentralized application (dApp) that uses blockchain to securely record and manage votes without the need for a trusted third party. By recording each vote as a transaction on the blockchain, we ensured that every vote is immutable and traceable to the exact time and place it was casted, all while preserving voter anonymity.
            </div>
        </div>
      
    </div>
    </section>
  )
}

export default Project1
