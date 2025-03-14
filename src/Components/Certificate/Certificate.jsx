import React, { useState } from 'react';
import './Certificate.css';
import { AiOutlineClose } from 'react-icons/ai';
import {  FaPython, FaGoogle, FaWindows,FaJava,FaGlobe } from 'react-icons/fa';  

import dataScience from '../../assets/Data_science_certificate.pdf' 
import Google_AI_Essentials from '../../assets/Google_AI_Essentials.pdf' 
import  Microsoft_Azure from '../../assets/Microsoft_Azure.pdf'
import  java from '../../assets/java.pdf'
import  web from '../../assets/web.pdf'

const Certificate = () => {

  const certificates = [
    { name: 'Web Developer', icon: <FaGlobe size={50} color="#61DBFB" />, url: web },
    { name: 'Java Expert', icon: <FaJava size={50} color="#FF4F00" />, url: java }, 
    { name: 'Google Advanced Data Analytics', icon: <FaPython size={50} color="#3776AB" />, url: dataScience },
    { name: 'Google AI Certification', icon: <FaGoogle size={50} color="#4285F4" />, url: Google_AI_Essentials}, 
    { name: 'Microsoft Azure Certification', icon: <FaWindows size={50} color="#0078D4" />, url: Microsoft_Azure }, 
  ];


  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleCertificateClick = (url) => {
    setSelectedCertificate(url);
    setIsModalOpen(true);  
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="skills section" id="Certificate">
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">My technical Certificates</span>

        <div className="certificate-list">
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="certificate-item"
                onClick={() => handleCertificateClick(certificate.url)}
              >
                <div className="certificate-logo">{certificate.icon}</div> 
                <h>{certificate.name}</h>
              </div>
            ))}
          </div>
        </div>

       
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <AiOutlineClose size={24} color="#fff" />  {/* React Icon Close Button */}
              </button>
              <iframe
                src={selectedCertificate}
                width="100%"
                height="100%"
                title="Certificate Viewer"
                frameBorder="0"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Certificate;
