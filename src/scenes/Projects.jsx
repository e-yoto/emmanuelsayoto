import YoutubeEmbed from "../components/YoutubeEmbed";
import { Typography } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";

const Projects = () => {
    const QUP_DESCRIPTION = "Q-UP is a mock social media platform that allows gamers to find teammates and new friends to play their favorite online games with.";
    const GRADESPOT_DESCRIPTION = "GradeSpot is a comprehensive platform for coordinating study groups, allowing users to schedule online sessions in a virtual collaborative space or reserve university classrooms using a QR code-based booking system.";
    return (
        <div className="Projects">
            <WidgetWrapper style={{width: "max-content", marginBottom: "50px"}}>

                <h1>My Portfolio</h1>
                <Typography>a few applications that I worked on</Typography>

                

            </WidgetWrapper>

            <h1>Q-UP</h1>
            <WidgetWrapper className="project" marginBottom={"25px"}>
                <h4>{QUP_DESCRIPTION}</h4>
                <YoutubeEmbed embedId="KzWPqGkjTCw" />
                <a  href="https://github.com/e-yoto/QUP" target="_blank" style={{textDecoration:"none"}} >
                    <div className="flex-container" >
                        <img src="./assets/github-icon.png" width={'20px'}></img>
                        <Typography>View on GitHub</Typography>
                    </div>
                </a>
                

            </WidgetWrapper>

            <hr/>
            
            <h1 style={{marginTop:"20px"}}>GradeSpot (for <a style={{color: "#0000EE"}} target="_blank" href="https://devpost.com/software/gradespot">ConUHacks VII</a>)</h1>
            <WidgetWrapper className="project">
                <h4>{GRADESPOT_DESCRIPTION}</h4>
                {/* <YoutubeEmbed embedId="KzWPqGkjTCw" /> */}
                <a  href="https://github.com/e-yoto/gradespot" target="_blank" style={{textDecoration:"none"}} >
                    <div className="flex-container" >
                        <img src="./assets/github-icon.png" width={'20px'}></img>
                        <Typography>View on GitHub</Typography>
                    </div>
                </a>
                


            </WidgetWrapper>
            
        </div>
    );
}

export default Projects;