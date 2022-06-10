import Utils from "../../Utils";
import { motion } from "framer-motion";
import customTransition from "../../styles/customTransition";
import customStyles from "../../styles/customStyles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [media, setMedia] = useState("");
  const handleViewDemo = () => {
    const url = Utils.getViewDemoUrl(window.categoryData, "TVC");
    console.log(url);
    setMedia(url);
  };
  console.log(media);
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
        src={`${Utils.getImageUrl("editor.jpg")}`}
        alt=""
        style={customStyles().backgroundMenu}
      />
      {media.length <= 0 ? (
        <Button
          sx={{
            ...customStyles().divCenterHome,
            zIndex: 1,
            color: "#00ff0a",
            border: "6px solid #00ff0a",
            borderRadius: "15px",
            padding: "15px 25px",
            fontSize: "30px",
            //fontFamily: 'tahoma',
            letterSpacing: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            filter:
              "drop-shadow(0 0 15px #00ff0a) drop-shadow(0 0 50px #00ff0a) contrast(2) brightness(2)",
            transition: "0.5s",
            "&:hover": {
              color: "black",
              backgroundColor: "#00ff0a",
              filter: "drop-shadow(0 0 20px #00ff0a) contrast(2) brightness(2)",
            },
          }}
          onClick={handleViewDemo}
        >
          {t("Home.View")}
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            ...customStyles().divCenterIframe,
          }}
          onClick={() => {
            setMedia("");
          }}
        >
          <iframe
            style={{ ...customStyles().divIframe }}
            src="https://www.youtube.com/embed/J7eYhM6wXPo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Home;
