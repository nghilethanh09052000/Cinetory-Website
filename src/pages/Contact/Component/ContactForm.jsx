import AccountCircle from '@mui/icons-material/AccountCircle';
import Utils from '../../../Utils';

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

} 
from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from 'react';
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
                check = Utils.checkValue(type,e.target.value)
                setError(check)
                break;
            default: 
                return ''
        }
    }

    return (
        <Box style={{marginTop:'20px'}}>
            <Grid 
                container 
                rowSpacing={2} 
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
                                <AccountCircle />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                </Grid>
                <Grid item md={12}>
                    <TextField
                        label={t("Contact.Message")}
                        multiline
                        rows={3}
                        fullWidth
                        variant="standard"
                        disabled={
                            email.length <=0 || (error.type==='name') || (error.type==='email' && error.error===true)
                            ? true
                            : false
                        }
                        onChange={(e,name)=>handleValueChange(e,'message')}
                    />
                </Grid>
                <Grid item md={12}>
                    <Button
                       variant="contained"
                    >
                        ClicK
                    </Button>
                </Grid>
            </Grid>
        
        </Box>
      );
}
 
export default ContactForm;