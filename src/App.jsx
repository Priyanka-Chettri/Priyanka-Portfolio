import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import arrow from "./assets/Arrow.png"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
import LearningText from "./assets/Learningoutloud.png"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
   <>
   <BrowserRouter>
   <div >
  
   {/*This is for About Me section*/}
    
   <div className="sticky top-0 w-full z-10 flex justify-center">
     <NavBar/>
     </div>
    <div className="-mt-20 bg-yellow-900" id="aboutme">
      <AboutMe/>
    </div>
    <img src={arrow} className="absolute top-[450px] left-[300px] z-20 h-[150px]" >
    </img>
    
    <Skills/>
    <div id="exp">
    <Experience/>

    </div>
    <div id="project">
    <Projects/>
    </div>
     
    <div className="relative" id="contact">
    <img src={LearningText} className="absolute top-[10px] left-[150px] z-20 h-[120px]"></img>
    <img src={arrow} className="absolute top-[60px] left-[200px] z-20 h-[120px]"></img>


    <ContactMe/>
    </div>
  </div>
   </BrowserRouter>
  
   </>
  )
}

export default App
