import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";
const ContactItem = ({contact }) => {
    const { icon,content, info }=contact
  
    return (
        <Grid item md={3} xs={6}>
            <Avatar
                sx={{ width: 60, height: 60,bgcolor:"#fff" }}
            >
                {icon}
            </Avatar>
            <div style={{marginTop:'5px'}}>
                <Typography variant="h5">
                    {content}
                </Typography>
                <Typography 
                >
                    {info}
                </Typography>
            </div>
        </Grid>
    );
};

export default ContactItem;
