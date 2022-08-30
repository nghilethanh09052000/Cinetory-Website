// Material UI
import { Backdrop } from "@mui/material";
const BackDropVideo = ({
  backDropVideo:{
    open,
    media
  },
  handleBackDropVideo
}) => {
 
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={()=>handleBackDropVideo(!open,media='')}
    >
      {media}
    </Backdrop>
  );
};

export default BackDropVideo;
