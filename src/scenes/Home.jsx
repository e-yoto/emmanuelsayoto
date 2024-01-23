import { 
    Box,
    IconButton,
    InputBase,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery, 
    Icon} from "@mui/material";
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
import ImageTextWrapper from "../components/ImageTextWrapper";
import UserImage from "../components/UserImage";
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
            <h1>Hi, I'm Emmanuel!</h1>

            <ImageTextWrapper style={{display: "flex", justifyContent:"space-around"}}
                >
                <UserImage  image = {"cat200x300.jpg"} />
                <Typography style={{paddingLeft: "1.5rem"}}>
                    Hey! I'm <strong>Emmanuel</strong>, a 23-year-old Computer Science student at <strong>Concordia University</strong>, graduating in May 2024. 
                    On this website, I will be showcasing some of the projects I've been working on and write down a few thoughts on my blog.
                </Typography>

                
            </ImageTextWrapper>
            
            <h2 style={{paddingTop: "50px"}}>Open for work!</h2>
            <Typography >
                    I am currently looking for a position as a software developper, both internships and full-time positions for Summer 2024. 
            </Typography>
            {/* <Button onClick={() => dispatchEvent(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkMode sx={{ fontSize: "25px"}}/>
                    ) : (
                        <LightMode x={{ color: dark, fontSize: "25px"}}/>
                    )}
            </Button> */}
        </div>
     );
}

export default Home;