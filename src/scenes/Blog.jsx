import WidgetWrapper from "../components/WidgetWrapper";
import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
const Blog = () => {
    return (

        <div className="Blog">
             <div className="typed-description">

                <h1>
                    Blog coming soon {" "}
                    <ReactTyped strings={["..."]} typeSpeed={100} loop />
                </h1>
            </div>

        </div>
    );
};

export default Blog;