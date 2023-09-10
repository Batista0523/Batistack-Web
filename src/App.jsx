import "./App.css";

import Services from "./components/Services";

import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <NavBar />
      <Services />
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
