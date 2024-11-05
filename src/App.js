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
import WebsiteReviewBox from './Components/Project/Project';
function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Qualification />
      <Skills />
      
      <Services />
      
      <Contact />
      
      
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
