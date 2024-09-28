
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home/Home';
import Service from './Pages/Services/Service';
import About from './Pages/About/About';
import Footer from './Components/footer/Footer';
import Project from './Pages/projects/ProjectSection';
import Blog from './Pages/BlogAreaRight/Blog'
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team'
import ScrollToTop from "react-scroll-to-top";
import TeamMemberDetail from './Pages/Team/TeamMemberDetail';
import Scroll from './Pages/ScrollBar/Scroll';
function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar/>

          <Scroll/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path="/teamdisplay/:id" element={<TeamMemberDetail />} /> 
      </Routes>
      <Footer/>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#C32735", borderRadius: "80px", padding:"6px" }}
      />
    </BrowserRouter>
    </>
  );
}

export default App;
