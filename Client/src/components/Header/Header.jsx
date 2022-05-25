import { AppBar, 
    Toolbar,
    Typography,
    Box,
    Button,
    FormControl,
    Select,
    MenuItem
} from "@mui/material";
import i18n from 'i18next'
import { useState } from "react";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
const Header = () => {
    const { t } = useTranslation();

    const languages = [
      {
        id:'en',
        language: t('Header.Change_Language_1')
      },
      {
        id:'vn',
        language: t('Header.Change_Language_2')
      }
    ]

    return (
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="fixed" sx={{bgcolor:'transparent'}}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t('Header.Change_Language_1')}
              </Typography>
              <Box sx={{display:'flex',width:'300px', justifyContent:'space-between',height:'fit-content'}}>
              <FormControl sx={{minWidth: 120}}>
                <Select
                  sx={{color:"#fff", border:'1px solid white',height:'40px'}}
                  defaultValue={languages[0].id}
                  onChange={(e)=>(
                    i18n.changeLanguage(e.target.value)
                  )}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  renderValue={(value)=>{
                    return value === 'en' 
                    ? <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div style={{position:'relative',width:'100%'}}>
                              <img src= '/images/usa.png' alt="" style={{width:'inherit',position:'absolute',top:'50%',left:'0%',transform:'translate(-50%,-50%)'}} />
                            </div>
                            <p>English</p>
                      </div>  
                    : <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div style={{position:'relative',width:'100%'}}>
                          <img src= '/images/vietnam.png' alt="" style={{width:'400%',position:'absolute',top:'50%',left:'0%',transform:'translate(-50%,-50%)'}} />

                        </div>
                        <p>Việt Nam</p>
                      </div>
                  }}
                >
                  {languages.map(language=>
                    <MenuItem key={language?.id} value={language?.id}>
                      {language?.language}
                    </MenuItem>
                  )}
               
        
                </Select>
  
              </FormControl>
                  <Button 
                    color="inherit"
                  >
                     {t('Header.Header_3')}
                  </Button>
              </Box>
             
            </Toolbar>
          </AppBar>
        </Box>
      );
}
 
export default Header;