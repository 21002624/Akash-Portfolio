import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Scrollup from './Components/Scrollup/Scrollup';
import CanvasEffect from './Components/CanvasEffect/CanvasEffect';
import Certificate from './Components/Certificate/Certificate';

function App() {
  return (
    <>
    <CanvasEffect />
    <div className="content-wrapper">

   
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Qualification />
      <Skills />
      
      <Services />
      {/* <Certificate /> */}
      
      <Contact />
      
    </main>
    <Footer />
    <Scrollup />
    </div>
    
    </>
  );
}

export default App;
