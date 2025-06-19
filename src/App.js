// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <Home/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
