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
    divJustifyContent:{
        display: 'flex',
        justifyContent:'center',
    },
    divCenterHome:{
        position:'absolute',
        top: '30%',
        left: '50%',
        transform:'translate(-50%,-10%)',
    },
    divIframe:{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
        width:'80%',
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
        top: '50%',
        left: '50%',
        transform:'translate(-50%,-50%)',
    },
    iconColor:{
        color:'#fff',
        width: 60, 
        height: 60
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