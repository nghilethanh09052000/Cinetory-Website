import { Suspense } from "react";
import Utils from '../../Utils'
const Home = () => {
    return (
        <Suspense>
 <div>
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
        </div>
        </Suspense>
       
      );
}
 
export default Home;