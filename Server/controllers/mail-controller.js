const postMail = (req,res)=>{
    const {name,email,message} = req.body;
    try{
        res.status(200).json({name,email,message}  );
    }catch{
        res.status(400).json({ errors });
    }
}
module.exports={
    postMail
}