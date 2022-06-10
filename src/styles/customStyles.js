const customStyles = image => ({
    root: {
        height: '100%',
        width: '100%'
    },
    textLink:{
        textDecoration:'none',
        color:'#fff'
    },

    textLinkMenu:{
        textDecoration:'none',
        color:'#000'
    },
    backgroundMenu:{
        zIndex: 1,
        objecFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    divAlign:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    divCenterHome:{
        position:'absolute',
        top: '20%',
        left: '50%',
        transform:'translate(-50%,-20%)',
    },
    divIframe:{
        position:'absolute',
        width:'100%',
        height:'100%',
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width:'90%',
        height:'80%',
        zIndex:1000,
    },
    divCenterIframe:{
        position:'absolute',
        top: '60%',
        left: '50%',
        transform:'translate(-50%,-60%)',
        zIndex:2,
        width:'100%',
        height:'80%',
        backgroundColor: 'rgba(0,0,0, 0.4)',
        cursor:'pointer'
    },
    divCenter:{
        position:'absolute',
        top: '40%',
        left: '10%',
        transform:'translate(-10%,-40%)',
    },
    iconColor:{
        color:'#000',
        width: 30, 
        height: 30
        //backgroundColor:'#000'
    },
    divColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    divRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    divFullWidth: {
		width: '100%'
	},
    divHeader: {
		flexGrow: 1,
	},
});

export default customStyles