import "./App.css";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Education />
      </main>
    </>
  );
}

export default App;
