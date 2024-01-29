import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return ( 
        <nav className="navbar">
            <a href="/" onClick={() => navigate("/")}><img href="/" onClick={() => navigate("/")} src="./assets/logo-green.png" width={'100px'} ></img></a>
            {/* <a href="/" onClick={() => navigate("/")}><h1>Emmanuel Sayoto</h1></a> */}
            
                <a href="/" onClick={() => navigate("/")} >Home</a>
                <a href="/projects" onClick={() => navigate("/projects")}>Projects</a>
                <a href="/blog" onClick={() => navigate("/blog")}>Blog</a>
                <a href="/contact" onClick={() => navigate("/contact")}>Contact</a>
        </nav> 
    );
}
 
export default Navbar;