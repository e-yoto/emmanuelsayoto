import { Typography } from "@mui/material";
import WidgetWrapper from "../components/WidgetWrapper";

const Contact = () => {
    return (
        <div className="Contact">
            <WidgetWrapper style={{width: "max-content", marginBottom: "50px"}}>

                <h1>Contact me</h1>
                <Typography>let's get in touch</Typography>
            </WidgetWrapper>

        </div>
    );
}

export default Contact;