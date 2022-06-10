import Utils from '../../Utils'
import { motion } from "framer-motion"
import customTransition from '../../styles/customTransition'
import customStyles from '../../styles/customStyles'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Home = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    return (
            <motion.div initial="hidden"
            animate="visible"
            variants={customTransition.variant} 
            >
                <LazyLoadImage
                     effect="blur"
                     placeholderSrc={`${Utils.getImageUrl('Contact.jpg')}`}
                     opacity={1}
                    src={`${Utils.getImageUrl('editor.jpg')}`}
                    alt="" 
                    style={
                       customStyles().backgroundMenu
                    }
                />
            </motion.div>
    );
}
 
export default Home;