import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './scenes/Home';
import ProjectsPage from "./scenes/Projects";
import ContactPage from "./scenes/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/projects" element={<ProjectsPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
