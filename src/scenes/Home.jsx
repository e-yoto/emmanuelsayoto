
// import {
//     Search,
//     Message,
//     DarkMode,
//     LightMode,
//     Notifications,
//     Help,
//     Menu,
//     Close,
//     Light
// }  from "@mui/icons-material";
import WidgetWrapper from "../components/WidgetWrapper";
import FlexBox from "../components/FlexBox";
import { ReactTyped } from "react-typed";
// import { setMode } from "state";
// import { useState } from "react";

const Home = () => {
    // const theme = useTheme();
    // const neutralLight = theme.palette.neutral.light;
    // const dark = theme.palette.neutral.dark;
    // const background = theme.palette.background.default;
    // const primaryLight = theme.palette.primary.light;
    // const alt = theme.palette.background.alt;
    return ( 
        <div className="Home">
            <WidgetWrapper style={{width: "max-content"}}>

                <h1>hi, i'm emmanuel</h1>
                <p>computer science student, software developer</p>

                <FlexBox >
                    
                    <a style={{paddingRight: "5px"}} href="https://www.linkedin.com/in/emmanuel-sayoto/" target="_blank"><img src="./assets/linkedin-icon.png" width={"30px"}></img></a>
                    <a href="https://github.com/e-yoto" target="_blank"><img src="./assets/github-icon.png" width={"30px"}></img></a>
                </FlexBox>

            </WidgetWrapper>
            <div className="typed-description">

                <h1>
                    I am {" "}
                    <ReactTyped strings={["Emmanuel", "a student", "an aspiring software developer"]} typeSpeed={50} loop />
                </h1>
            </div>


            <div className="bottom-right-content" >
                

                
                <h3> I'm a Computer Science student at <strong>Concordia University</strong>, graduating in May 2024. 
                    On this website, I will be showcasing some of the projects I've been working on and write down a few thoughts on my blog.</h3>
                
            </div>

            {/* <ImageTextWrapper style={{display: "flex", justifyContent:"space-around"}}
                >
                <UserImage  image = {"cat200x300.jpg"} />
                <Typography style={{ fontSize: "2rem",paddingLeft: "1.5rem"}}>
                    Hey! I'm <strong>Emmanuel</strong>, a 23-year-old Computer Science student at <strong>Concordia University</strong>, graduating in May 2024. 
                    On this website, I will be showcasing some of the projects I've worked on.
                </Typography>

                
            </ImageTextWrapper>
            
            <WidgetWrapper>

            <h2>Open for work!</h2>
            <Typography >
                    I am currently looking for a position as a software developper, both internships and full-time positions for Summer 2024. 
            </Typography>
                
            </WidgetWrapper> */}
        </div>
     );
}

export default Home;