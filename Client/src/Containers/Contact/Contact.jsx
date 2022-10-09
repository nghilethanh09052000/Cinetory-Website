import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import {
  Avatar,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Utils from "../../Utils";
import customStyles from "../../Styles/customStyles";
import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import _ from "lodash";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/thanhnghi09052000"
        target={"blank"}
      >
        Design by: Thanh Nghi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Contact({ props }) {
  const { t } = useTranslation();
  const contacts = [
    {
      icon: <EmailIcon sx={{ ...customStyles().iconColor }} fontSize="large" />,
      content: t("Contact.Email"),
      info: t("Contact.Email_Name"),
    },
    {
      icon: <FacebookIcon sx={{ ...customStyles().iconColor }} />,
      content: t("Contact.Facebook"),
      info: t("Contact.Facebook_Name"),
    },
    {
      icon: <InstagramIcon sx={{ ...customStyles().iconColor }} />,
      content: t("Contact.Instagram"),
      info: t("Contact.Instagram_Name"),
    },
  ];
  return (
    <div id="contact">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container component="main" maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item sm={12} md={3} >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Paper
                  sx={{
                    height: 250,
                    width: 250,
                    background: "#000",
                  }}
                  variant="square"
                >
                  <Avatar
                    alt="Quan"
                    src={Utils.getImageUrl("Quan.jpg")}
                    sx={{ width: 250, height: 250 }}
                  />
                </Paper>
              </Box>
            </Grid>

            <Grid item sm={12} md={5} >
              <Grid item  sm={12} md={10} sx={{color:"#fff"}}>
                <Typography variant="h4" align="center">
                  {t("Contact.QUAN_NAME")}
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  {t("Contact.QUAN_ROLE")}
                </Typography>
                <Grid item md={8} sx={{mr:'auto',ml:'auto'}}>
                  <Typography variant="body1" align="justify" gutterBottom>
                    {t("Contact.QUAN_P1")}
                  </Typography>
                  <Typography variant="body1" align="justify" gutterBottom>
                    {t("Contact.QUAN_P2")}
                  </Typography>
                </Grid>
                </Grid>
            </Grid>

            <Grid item sm={12} md={4}> 
              <div >
                <List sx={{ color: "#fff" }}>
                  {_.map(contacts, ({ icon, content, info }, index) => {
                    return (
                      <ListItem
                        key={index}
                        sx={{
                          ...customStyles().divJustifyContent,
                        }}
                      >
                        {icon}
                        <ListItemText
                          primary={content}
                          secondary={
                            <Typography style={{ ...customStyles().textLink }}>
                              {info}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </Grid>
          </Grid>
          
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            background: "#fff",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1"></Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </div>
  );
}
