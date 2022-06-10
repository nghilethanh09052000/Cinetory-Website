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
    divCenter:{
        position:'absolute',
        top: '30%',
        left: '50%',
        transform:'translate(-50%,-30%)',
    },
    iconColor:{
        color:'#000',
        width: 50, 
        height: 50
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