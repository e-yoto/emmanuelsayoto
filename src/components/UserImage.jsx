import { Box } from "@mui/material";

const UserImage = ({ image}) => {
    return (
        <Box>
            <img 
                style ={{objectFit: "cover", borderRadius: "0.75rem"}}
                alt="user"
                src={`./assets/${image}`}
            />
        </Box>
    )
}

export default UserImage;