import { motion } from "framer-motion";
import customTransition from "../../Styles/customTransition";
import customStyles from "../../Styles/customStyles";
import Utils from "../../Utils";
import {
  useParallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";

const Banner = () => {
  const parallax = useParallax<HTMLDivElement>{rotateY: [0, 360],};
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={customTransition.variant}
      style={{ color: "#fff" }}
    >
      <div ref={parallax.ref}>
        <ParallaxProvider>
          <ParallaxBanner
            layers={[
              {
                image: Utils.getImageUrl("Contact.jpg"),
                speed: -30,
              },
            ]}
            className="aspect-[3/1]"
            style={{ aspectRatio: "2 / 1" }}
          />
        </ParallaxProvider>
      </div>
    </motion.div>
  );
};

export default Banner;
