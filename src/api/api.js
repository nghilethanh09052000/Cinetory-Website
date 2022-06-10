import axios from 'axios';

class Api
{
    constructor()
    {
        this.extentURL=''
        this.baseURL = `${process.env.REACT_APP_API_URL}/api`
    }

    getVideoApi = async (method) =>{
        try{
            const api = await axios.get('https://whispering-castle-50277.herokuapp.com/api')
            if(api.status===200 && api.statusText==='OK') return api.data
        }catch(err){
            console.log(err)
        }
       
    }
    sendEmail = (data) =>{
        try{
            const api = axios.post('https://whispering-castle-50277.herokuapp.com/',data)
            console.log('Nghị',api)
        }catch{

        }
       
    }
}
export default new Api()