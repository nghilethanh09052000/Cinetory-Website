import { motion } from "framer-motion";
import customTransition from "../../styles/customTransition";
import customStyles from "../../styles/customStyles";
import Utils from "../../Utils";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ContactItem from "./Component/ContactItem";
import ContactForm from "./Component/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const contacts = [
    {
      icon: <PhoneInTalkIcon sx={{ ...customStyles().iconColor }} />,
      content: t("Contact.Phone"),
      info: `+` + t("Contact.Phone_Name"),
    },
    {
      icon: <EmailIcon sx={{ ...customStyles().iconColor }} />,
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={customTransition.variant}
    >
      <LazyLoadImage
        effect="blur"
        placeholderSrc={`${Utils.getImageUrl("Contact.jpg")}`}
        opacity={1}
        src={`${Utils.getImageUrl("Contact.jpg")}`}
        alt=""
        style={customStyles().backgroundMenu}
      />
      <div
        style={{
          ...customStyles().divCenter,
          zIndex: "1000",
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {t("Contact.Contact")}
            </Typography>
          </Box>
          <Card sx={{ bgcolor: "#fff" ,display: { xs: "flex", md: "block" }}}>
              <Grid container rowSpacing={2} columnSpacing={{ md: 6, xs: 2 }}>
                {contacts.map((contact, index) => (
                  <ContactItem key={index} contact={contact} />
                ))}
              </Grid>
              <ContactForm />

          </Card>
        </Box>
      </div>
    </motion.div>
  );
};

export default Contact;
