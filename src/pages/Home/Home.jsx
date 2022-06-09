import Utils from '../../Utils'
import { motion } from "framer-motion"
import customTransition from '../../styles/customTransition'
import customStyles from '../../styles/customStyles'
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
                <img 
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