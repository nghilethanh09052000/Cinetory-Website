import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const internalStyle = {
    buttonFixed: {
        position:'fixed',
        bottom:'20px',
        right:'30px',
        zIndex:99,
        backgroundColor:'#555',
        cursor:'pointer',
        padding:'15px',
        borderRadius:'50%',
        "&:hover": {
            background: "#efefef"
        }
    },

}   

const ScrollToTop = ({handleScrollTotop}) => {
    
    return (
        <div 
            style={internalStyle.buttonFixed}
            onClick={handleScrollTotop}
        >
            <ArrowDropUpIcon/>
        </div>
      );
}
 
export default ScrollToTop;