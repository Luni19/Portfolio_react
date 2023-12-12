import "./styles.css";

import Header from "./components/header/header.js"

import Main from "./components/main/Main.js"

import Footer from "./components/footer/footer.js"

import Skills from "./pages/Skills.js";

import Contacts from "./pages/Contacts.js";

import Projects from "./pages/Projects.js";





function App() {
  return (
    <div className="App">
      
      <Header />
     
      <Main/>
      {/* <Projects/> */}
      {/* <Skills/> */}
      {/* <Contacts/> */}

      <Footer/>
      
    </div>
  );
}

export default App;
