import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col lg:gap-10 bg-light-grey">
        <Home />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
