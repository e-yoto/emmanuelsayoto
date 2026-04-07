
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
            <WidgetWrapper style={{ width: "max-content" }}>
                <h1>hi, i'm emmanuel</h1>
                <p>software developer, computer science graduate</p>

                <FlexBox >
                    <a style={{ paddingRight: "5px" }} href="https://www.linkedin.com/in/emmanuel-sayoto/" target="_blank"><img src="./assets/linkedin-icon.png" width={"30px"}></img></a>
                    <a href="https://github.com/e-yoto" target="_blank"><img src="./assets/github-icon.png" width={"30px"}></img></a>
                </FlexBox>

            </WidgetWrapper>
            <div className="typed-description">
                <h1>
                    I am {" "}
                    <ReactTyped strings={["Emmanuel", "a software developer", "computer science graduate"]} typeSpeed={50} loop />
                </h1>
            </div>

            <div className="bottom-right-content" >
                <h3>
                    I'm a software developer, Computer Science gradute from Montreal.
                    On this website, I'll be showcasing some of the projects I've been working on.
                </h3>
            </div>
        </div>
    );
}

export default Home;