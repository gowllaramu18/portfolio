import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skill";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education"
import Project from "./components/Project/Project";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Home/>
        <About />
        <Skills />
      <Contact/>
      <Education/>
        <Project/>
      </main>

      <Footer />
    </>
  );
};

export default App;