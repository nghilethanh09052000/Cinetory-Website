import Utils from '../../Utils'
import { motion } from "framer-motion"


const Home = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    return (
            <motion.div initial="hidden"
            animate="visible"
            variants={variants}>
                <img 
                    src={`${Utils.getImageUrl('editor.jpg')}`}
                    alt="" 
                    style={{
                        zIndex: 1,
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        opacity: 1
                    }}
                />
            </motion.div>
    );
}
 
export default Home;