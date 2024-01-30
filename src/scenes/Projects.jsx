import YoutubeEmbed from "../components/YoutubeEmbed";
import { Typography } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";
import FlexBox from "../components/FlexBox";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactTyped } from "react-typed";

const Projects = () => {
    const QUP_DESCRIPTION = "Q-UP is a mock social media platform that allows gamers to find teammates and new friends to play their favorite online games with.";
    const GRADESPOT_DESCRIPTION = "GradeSpot is a comprehensive platform for coordinating study groups, allowing users to schedule online sessions in a virtual collaborative space or reserve university classrooms using a QR code-based booking system.";
    const emmanuelsayoto_DESCRIPTION = "This personal website is also made by me, and is hosted on Google Cloud Platform.";

    const handleClick = (myLink) => () => {
        // window.location.href=myLink;    
        window.open(myLink,'_newtab');
      }

    return (
        <div className="Projects">
            <WidgetWrapper style={{width: "max-content", marginBottom: "50px"}}>

                <h1>My Portfolio</h1>
                <Typography>a few applications that I worked on</Typography>

                

            </WidgetWrapper>

            {/* 
            *
            *
            QUP 
            *
            */}
            <h1>Q-UP</h1>
            <WidgetWrapper className="project" marginBottom={"25px"}>
            <div style={{ marginBottom: "25px"}}>

                <h4>{QUP_DESCRIPTION}</h4>

                <YoutubeEmbed embedId="KzWPqGkjTCw" />
                <FlexBox style={{justifyContent: "space-between"}}>
                    <div>
                        <FlexBox>

                        <Typography>Made with:</Typography>
                        <img src="./assets/mern.png" height="50px"></img>
                        </FlexBox>
                    </div>
                        
                    <div className="flex-container" onClick={handleClick('https://github.com/e-yoto/QUP')} style={{ cursor: "pointer"}}>
                        
                        <img src="./assets/github-icon.png" width={'20px'}></img>
                        <Typography>View on GitHub</Typography>
                    </div>
                </FlexBox>
            </div>
                

            </WidgetWrapper>

            <hr/>


            {/* 
            *
            *
            GRADESPOT 
            *
            */}
            <h1 style={{marginTop:"20px"}}>GradeSpot (for <a style={{color: "#0000EE"}} target="_blank" href="https://devpost.com/software/gradespot">ConUHacks VII</a>)</h1>
            <WidgetWrapper className="project" marginBottom="25px">
                <h4>{GRADESPOT_DESCRIPTION}</h4>
                <Typography>
                    A complete set of images and more info is available at the hackathon submission page <a target="_blank"style={{color: "#0000EE"}} href="https://devpost.com/software/gradespot">here</a>
                </Typography>
                

                <Carousel>
                    <div>
                        <img src="./assets/gradespot1.png" />
                        <p className="legend">GradeSpot Landing Page</p>
                    </div>
                    <div>
                        <img src="./assets/gradespot2.png" />
                        <p className="legend">Creating a new session of a study room</p>
                    </div>
                    <div>
                        <img src="./assets/gradespot3.png" />
                        <p className="legend">Result after searching for program "COMP"</p>
                    </div>
                    <div>
                        <img src="./assets/gradespot4.png" />
                        <p className="legend">Joining an ongoing session</p>
                    </div>
                    <div>
                        <img src="./assets/gradespot5.png" />
                        <p className="legend">In the session, you can draw on the whiteboard, chat with your fellow classmates, or message the presenter separately</p>
                    </div>
                </Carousel>
                
                <FlexBox style={{justifyContent: "space-between"}}>
                    <div>
                        <FlexBox>
                        
                        <Typography>Made with:</Typography>
                        <img src="./assets/php-icon.png" height="50px"></img>
                        <img src="./assets/html-css-js-icon.png" height="50px"></img>
                        </FlexBox>
                    </div>
                        
                    <div className="flex-container" onClick={handleClick('https://github.com/e-yoto/gradespot')} style={{ cursor: "pointer"}}>
                        
                        <img src="./assets/github-icon.png" width={'20px'}></img>
                        <Typography>View on GitHub</Typography>
                    </div>
                </FlexBox>
                
            </WidgetWrapper>

            <hr/>

            {/* 
            *
            *
            emmanuelsayoto.com 
            *
            */}
            <h1 style={{marginTop: "25px"}}>emmanuelsayoto.com</h1>
            <WidgetWrapper className="project" marginBottom={"25px"}>
            <div style={{ marginBottom: "25px"}}>

                <h4>{emmanuelsayoto_DESCRIPTION}</h4>

                <h4>I am currently working on implementing the Blog page.</h4>

                <FlexBox style={{justifyContent: "space-between"}}>
                    <div>
                        <FlexBox>

                        <Typography>Made with:</Typography>
                        <img src="./assets/react-icon.png" height="40px"></img>
                        <img src="./assets/html-css-js-icon.png" height="50px"></img>
                        <img src="./assets/gcp-icon.png" height="50px"></img>
                        </FlexBox>
                    </div>
                        
                    <div className="flex-container" onClick={handleClick('https://github.com/e-yoto/emmanuelsayoto')} style={{ cursor: "pointer"}}>
                        
                        <img src="./assets/github-icon.png" width={'20px'}></img>
                        <Typography>View on GitHub</Typography>
                    </div>
                </FlexBox>
            </div>
                

            </WidgetWrapper>


                <h1 style={{textAlign: "center"}}>
                    More to come {" "}
                    <ReactTyped strings={["..."]} typeSpeed={100} loop />
                </h1>

        </div>
    );
}

export default Projects;