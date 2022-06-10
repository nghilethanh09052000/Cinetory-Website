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
        axios.post('http://localhost:3003/sendmail',{
            method:'POST',
            body:JSON.stringify(data)
        })   
    }
}
export default new Api()