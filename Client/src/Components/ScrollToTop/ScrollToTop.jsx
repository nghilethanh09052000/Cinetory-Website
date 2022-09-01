import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const internalStyle = {
    buttonFixed: {
        position:'fixed',
        bottom:'20px',
        right:'70px',
        zIndex:99,
        background: "grey",
        cursor:'pointer',
        padding:'15px',
        borderRadius:'50%',
    },

}   

const ScrollToTop = ({handleScrollTotop}) => {
    
    return (
        <div 
            style={internalStyle.buttonFixed}
            onClick={handleScrollTotop}
        >
            <ArrowDropUpIcon sx={{color:'#000'}}/>
        </div>
      );
}
 
export default ScrollToTop;