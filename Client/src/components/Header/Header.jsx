import {
  AppBar,
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
  Container,
  Toolbar,
  IconButton,
  Menu,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import i18n from "i18next";
import { useState } from "react";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pages = [t("Header.Header_1"), t("Header.Header_3")];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const languages = [
    {
      id: "en",
      language: t("Header.Change_Language_1"),
    },
    {
      id: "vn",
      language: t("Header.Change_Language_2"),
    },
  ];

  return (
    <AppBar position="fixed" sx={{bgcolor:'transparent'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JUNN
          </Typography>

          {/* Responsive: */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JUNN
          </Typography>
          {/* Window */}
          <Box
            mr={2} 
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },justifyContent:'right' }} >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <FormControl sx={{minWidth: 150}} >
                <Select
                  sx={{color:"#fff", border:'1px solid white',height:'40px'}}
                  defaultValue={languages[0].id}
                  onChange={(e)=>(
                    i18n.changeLanguage(e.target.value)
                  )}
                  displayEmpty
                  IconComponent={""}
                  renderValue={(value)=>{
                    return value === 'en' 
                    ? <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginRight:'-10px'}}>
                              <div style={{position:'relative',width:'60px'}}>
                                <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" 
                                  alt="" 
                                  style={{width:'50%',position:'absolute',top:'50%',transform:'translate(0%,-50%)'}}
                                />
                              </div>
                            
                    
                            <div style={{width:'auto'}}>
                              <p>English</p>
                            </div>
                            
                      </div>  
                    : <div style={{display:'flex',justifyContent:'space-between',marginRight:'-20px'}}>
                         <div style={{position:'relative',width:'60px'}}>
                          <img 
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg"
                            alt="" 
                            style={{width:'50%',position:'absolute',top:'50%',transform:'translate(0%,-50%)'}}
                          />
                          </div>
                          <div style={{width:'auto'}}>
                            <p>Việt Nam</p>
                          </div>
                        
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
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
