// Material UI
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
//Hooks
import { useState, useEffect } from "react";
// Custom function
import Utils from "../../Utils";
import _ from "lodash";

// Components:


// const internalStyle = {

// }

const Video = ({
  children,
  children:{
    props: {
      handleBackDropVideo
    }
  }
}) => {
  const [imageData, setImageData] = useState(Utils.itemData);
 

  useEffect(() => {
    setImageData((prevState) => {
      return prevState.map((item) => {
        return {
          ...item,
          url: Utils.getImageCategoryUrl(item.name + ".jpg"),
        };
      });
    });
  }, []);

 

  return (
    <div className="service" id="service">
      <ImageList cols={2}>
        {_.map(imageData, (item, index) => {
          return (
            index <= 1 && (
              <ImageListItem key={item.name}>
                <img
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.name}
                  subtitle={item.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.name}`}
                      onClick={()=>handleBackDropVideo(true,item.media)}
                    >
                      <PlayCircleOutlineIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            )
          );
        })}
      </ImageList>
      {children}
      <ImageList cols={3}>
        {_.map(imageData, (item, index) => {
          return (
            index >= 2 && (
              <ImageListItem key={item.name}>
                <img
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.name}
                  subtitle={item.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.name}`}
                      onClick={()=>handleBackDropVideo(true,item.media)}
                    >
                      <PlayCircleOutlineIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            )
          );
        })}
      </ImageList>
    </div>
  );
};

export default Video;
