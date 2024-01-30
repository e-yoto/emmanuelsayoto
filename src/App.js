import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './scenes/Home';
import ProjectsPage from "./scenes/Projects";
import ContactPage from "./scenes/Contact";
import BlogPage from "./scenes/Blog";
import ResumePage from "./scenes/Resume";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/projects" element={<ProjectsPage/>}></Route>
            <Route path="/blog" element={<BlogPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/resume" element={<ResumePage/>}></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
