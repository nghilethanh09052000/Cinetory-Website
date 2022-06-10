import AccountCircle from '@mui/icons-material/AccountCircle';
import Utils from '../../../Utils';
import Api from '../../../api/api';
import EmailIcon from '@mui/icons-material/Email';
import { Box,
        Grid,
        Typography,
        Paper,
        Card,
        CardMedia,
        CardContent,
        Avatar,
        FormControl,
        InputLabel,
        Input,
        InputAdornment,
        TextField,
        Button,
        Divider
} 
from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
const ContactForm = () => {
    const { t } = useTranslation()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [error , setError] = useState(false)
    const handleValueChange = (e,type) =>{
        let check
        switch(type){
            case 'name': 
                setName(e.target.value)
                check = Utils.checkValue(type,e.target.value)
                setError(check)
                break;
            case 'email': 
                setEmail(e.target.value)
                check = Utils.checkValue(type,e.target.value)
                setError(check)
                break;
            case 'message': 
                setMessage(e.target.value)
                break;
            default: 
                return ''
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        let data
        if(error.error===true) setError(...error,error.value===true)
        if(name.length <=0 || email.length<=0)
        {
            setError(...error,error.value===true)
        } else{
            data={
                name:name,
                email:email,
                message:message
            }
            let send = Api.sendEmail(data)
        }
    }
    return (
        <Box style={{marginTop:'20px'}}>
            <Grid 
                container 
                rowSpacing={4} 
                columnSpacing={{md:6,xs:2}} 
            >
                <Grid item md={6} xs={12}>
                    <FormControl 
                        variant="standard"
                        focused={name==='' ? true : false}
                        required={true}
                        error={error.type==='name' && error.error }
                        >
                        <InputLabel htmlFor="name">
                            {t("Contact.FullName")}
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            onChange={(e,name)=>handleValueChange(e,'name')}
                            startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    {error.type==='name' && error.error === true
                    &&
                        <Typography color='error' variant='body2'>
                            {t('Error.ErrorName')}
                        </Typography>
                    }
                  

                </Grid>
                <Grid item md={6} xs={12}>
                    <FormControl 
                        variant="standard"
                        required={true}
                        focused={name.length >0 && error.error=== false ? true : false}
                        error={error.type==='email' && error.error}
                        disabled={
                            (name.length <=0 || (error.type==='name' && error.error === true ))
                            ? true
                            : false
                            }
                    >
                        <InputLabel htmlFor="email">
                        {t("Contact.CustomerEmail")}
                        </InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        onChange={(e,name)=>handleValueChange(e,'email')}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon/>
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    {error.type==='email' && error.error === true
                    &&
                        <Typography color='error' variant='body2'>
                            {t('Error.ErrorEmail')}
                        </Typography>
                    }
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField
                        label={t("Contact.Message")}
                        multiline
                        variant="outlined"
                        rows={3}
                        fullWidth
                        disabled={
                            email.length <=0 || (error.type==='name') || (error.type==='email' && error.error===true)
                            ? true
                            : false
                        }
                        onChange={(e,name)=>handleValueChange(e,'message')}
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                    <Button
                       variant="contained"
                       endIcon={<SendIcon/>}
                       onClick={(e)=>handleSubmit(e)}
                       disabled={
                           (name.length <=0 
                        || email.length<=0 
                        || error.error===true)
                        ? true
                        : false
                     }
                    >
                        {t("Contact.Send")}
                    </Button>
                </Grid>
            </Grid>
        
        </Box>
      );
}
 
export default ContactForm;