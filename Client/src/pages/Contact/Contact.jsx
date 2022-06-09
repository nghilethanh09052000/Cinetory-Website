import { motion } from "framer-motion"
const Contact = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants} 
            style={{color:'#fff'}}
        >
            asdasdasdasdasdasdasdasd
        </motion.div>
     );
}
 
export default Contact;