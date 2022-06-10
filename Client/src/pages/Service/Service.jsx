import { motion } from "framer-motion"
import customTransition from "../../styles/customTransition";
const Service = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }       
    return (
            <motion.div initial="hidden"
            animate="visible"
            variants={customTransition.variant} 
            style={{color:'#fff'}}>
                asdasdasdasdasdasdasdasd
            </motion.div>
         );
}
 
export default Service;