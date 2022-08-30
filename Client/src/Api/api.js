import axios from 'axios';

class Api
{
    constructor()
    {
        this.extentURL=''
        this.baseURL = `${process.env.REACT_APP_API_URL}/api`
    }

    getVideoApi = async () =>{
        try
        {
            const api = await axios.get(this.baseURL)
            if(api.status===200 && api.statusText==='OK') return api.data
        }
        catch(err)
        {
            console.log(err)
        }
       
    }

    sendEmail = async (data) =>{
        try
        {
            const api = await axios.post(this.baseURL,{
                body:data
            });
            if(api.status===200 && api.statusText==='OK'){
                console.log(api)
            }
        }
        catch(err)
        {
            console.log(err)
        }
          
    }
}
export default new Api()