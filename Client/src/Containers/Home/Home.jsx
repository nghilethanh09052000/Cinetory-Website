import Utils from "../../Utils";
import { motion } from "framer-motion";
import customTransition from "../../Styles/customTransition";
import customStyles from "../../Styles/customStyles";
import { useState } from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import {
  useParallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";
import { useEffect } from "react";

const Home = ({
  children,
  children: {
    props: {
      backDropVideo: { open, media },
      handleBackDropVideo,
    },
  },
}) => {
  const parallax = useParallax <HTMLDivElement>{ rotateY: [0, 360] };
  const { t } = useTranslation();
  return (
    <div id="home">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={customTransition.variant}
        style={{ color: "#fff" }}
        id="home"
      >
        <div ref={parallax.ref}>
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                {
                  image: Utils.getImageUrl("editor.jpg"),
                  speed: -30,
                },
              ]}
              className="aspect-[2/1]"
              style={{ aspectRatio: "2 / 1" }}
            />
          </ParallaxProvider>
          {children}
        </div>
        {!open && (
          <Button
            sx={{
              ...customStyles().divCenterHome,
              zIndex: 1,
              color: "#00ff0a",
              border: "6px solid #00ff0a",
              borderRadius: "15px",
              padding: "10px 25px",
              fontSize: "20px",
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
                filter:
                  "drop-shadow(0 0 20px #00ff0a) contrast(2) brightness(2)",
              },
            }}
            onClick={() => handleBackDropVideo(true, Utils.getViewDemoUrl())}
          >
            {t("Home.View")}
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
