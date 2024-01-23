import { Box } from "@mui/material";
import {styled} from "@mui/material";

const ImageTextWrapper = styled(Box)(({ theme} ) => ({
    display: "flex",
    paddingTop: "1.5rem",
    // padding: "1.5rem 1.5rem 1.5rem 1.5rem",
    // backgroundColor: "#AAA",
    borderRadius: "0.75rem"
}));

export default ImageTextWrapper;