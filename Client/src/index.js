import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import VN from './Translations/VN.json'
import EN from './Translations/EN.json'
import {getVideoApi} from './api/api'


i18n
  .use(initReactI18next) 
  .init({
    resources:{
      en:{translation:EN},
      vn:{translation:VN}
    },
    react:{
      ready:true
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection:{
      order:['htmlTag','cookie','localStorage','path','subdomain'],
      caches:['cookies']
    },
    fallbackLng: "en",
    lng:'en',

  })
  .then(()=>{
    return getVideoApi()
     
  })
  .then(category=>{
  
    const loader = document.querySelector('.section')

    if(category){
      document.body.removeChild(loader)
      window.categoryData = category
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
      )
    }else{
      const failed = document.createElement('h1');
      failed.style.position='absolute'
      failed.style.top='0'
      failed.style.left='50%'
      failed.style.transform='translate(-50%,50%)'
      failed.style.color='#fff'
      failed.style.textAlign='center'
      failed.innerHTML='This website is fetching api, please try again'
      document.body.appendChild(failed);
    }
  })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
