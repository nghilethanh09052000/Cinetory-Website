// Material UI
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
//Hooks
import { useState, useEffect, useRef } from "react";
// Custom function
import Utils from "../../Utils";
import _ from "lodash";

// Components:

// const internalStyle = {

// }

const Video = ({
  children,
  children: {
    props: { handleBackDropVideo },
  },
}) => {
  const [imageData, setImageData] = useState(Utils.itemData);
  const [loading, setLoading] = useState(false);
  const [checkItem,setCheckItem] = useState('')
  const timer = useRef();

  function handleButtonClick(item) {
    if (!loading) 
    {
      setLoading(true);
      setCheckItem(item)
      handleBackDropVideo(true ,item);
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    return () => {
      clearInterval(timer.current);
    };
  },[]);

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
                  sx={{
                    "&.MuiImageListItemBar-root:before": {
                      content: "''",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0.8, 0.7, 0.5, 0.7)",
                      WebkitTransform: "scaleX(0)",
                      transform: "scaleX(0)",
                      WebkitTransformOrigin: "0 50%",
                      TransformOrigin: "0 50%",
                      WebkitTransitionProperty: "transform",
                      TransitionProperty: "transform",
                      WebkitTransitionDuration: "0.4s",
                      TransitionDuration: "0.4s",
                      WebkitTransitionTimingFunction: "ease-out",
                      TransitionTimingFunction: "ease-out",
                    },
                    "&.MuiImageListItemBar-root:hover": {
                      WebkitTransform: "scaleX(1)",
                      transform: "scaleX(1)",
                    },
                    "&.MuiImageListItemBar-root:hover:before": {
                      WebkitTransform: "scaleX(1)",
                    },
                  }}
                  actionIcon={
                      <IconButton
                        sx={{
                          color: "rgba(255, 255, 255, 0.54)",
                          mr: 2,
                          width: 40,
                          height: 40,
                        }}
                        aria-label={`info about ${item.name}`}
                        onClick={handleButtonClick.bind(null, item.media)}
                      >
                        <PlayCircleOutlineIcon
                          sx={{
                            width: 40,
                            height: 40,
                          }}
                        />
                        { (loading && checkItem === item.media)  && (
                          <CircularProgress
                            size={40}
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              zIndex: 1,
                              color:'#00ff0a'
                            }}
                          />
                          )}
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
                  sx={{
                    "&.MuiImageListItemBar-root:before": {
                      content: "''",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0.8, 0.7, 0.5, 0.7)",
                      WebkitTransform: "scaleX(0)",
                      transform: "scaleX(0)",
                      WebkitTransformOrigin: "0 50%",
                      TransformOrigin: "0 50%",
                      WebkitTransitionProperty: "transform",
                      TransitionProperty: "transform",
                      WebkitTransitionDuration: "0.4s",
                      TransitionDuration: "0.4s",
                      WebkitTransitionTimingFunction: "ease-out",
                      TransitionTimingFunction: "ease-out",
                    },
                    "&.MuiImageListItemBar-root:hover": {
                      WebkitTransform: "scaleX(1)",
                      transform: "scaleX(1)",
                    },
                    "&.MuiImageListItemBar-root:hover:before": {
                      WebkitTransform: "scaleX(1)",
                    },
                  }}
                  actionIcon={
                    <IconButton
                      sx={{
                        color: "rgba(255, 255, 255, 0.54)",
                        mr: 2,
                        width: 40,
                        height: 40,
                      }}
                      aria-label={`info about ${item.name}`}
                      onClick={handleButtonClick.bind(null, item.media)}
                    >
                      <PlayCircleOutlineIcon
                        sx={{
                          width: 40,
                          height: 40,
                        }}
                      />
                      { (loading && checkItem === item.media)  && (
                        <CircularProgress
                          size={40}
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            color:'#00ff0a'
                          }}
                        />
                        )}
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
