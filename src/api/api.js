import axios from 'axios';

class Api
{
    constructor()
    {

    }
    getVideoApi = async (method) =>{
        try{
            const api = await axios.get('https://whispering-castle-50277.herokuapp.com/')
            if(api.status===200 && api.statusText==='OK') return api.data
        }catch(err){
            console.log(err)
        }
       
    }
    sendEmail = async () =>{
    }
}
export default new Api()