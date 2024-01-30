import { Typography } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";
import FlexBox from "../components/FlexBox";

const Contact = () => {
    return (
        <div className="Contact">
            <WidgetWrapper style={{width: "max-content", marginBottom: "50px"}}>

                <h1>Contact me</h1>
                <Typography>let's get in touch</Typography>
            </WidgetWrapper>
            <FlexBox>

                <img width="35px"src="./assets/email-icon.png"></img>
                <Typography>: <a target="_blank" href="mailto:emmanuelsayoto@gmail.com">emmanuelsayoto@gmail.com</a></Typography>
            </FlexBox>

            <FlexBox>

            <img src="./assets/linkedin-icon.png" width={"35px"}></img>
                <Typography>: <a target="_blank" href="https://www.linkedin.com/in/emmanuel-sayoto/">Add me on LinkedIn</a></Typography>
            </FlexBox>
            

        </div>
    );
}

export default Contact;