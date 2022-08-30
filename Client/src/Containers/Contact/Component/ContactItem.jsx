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
          <Grid item md={12}>
              <Avatar
                  sx={{ width: 30, height: 30,bgcolor:"#fff" }}
              >
                  {icon}
              </Avatar>
              <div>
                  <Typography 
                      variant="body1"
                  >
                      {content}
                  </Typography>
                  <Typography 
                         variant="caption"
                  >
                      {info}
                  </Typography>
              </div>
          </Grid>
      );
  };
  
  export default ContactItem;