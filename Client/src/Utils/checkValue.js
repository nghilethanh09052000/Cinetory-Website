var validator = require("email-validator");
 

export const checkValue = (type,value) =>{
    switch(type){
        case 'name':
            let regex = /^([a-zA-Z ]){0,30}$/
            if(regex.test(value)){
                return {
                    type:type,
                    error:false
                }
            }
            else
            {
                return {
                    type:type,
                    error:true
                }
            }
        case 'email':
            let emailCheck = validator.validate(value) 
            if(emailCheck){
                return {
                    type:type,
                    error:false
                }
            }
            else
            {
                return {
                    type:type,
                    error:true
                }
            }
        default:
            return false
    }
}