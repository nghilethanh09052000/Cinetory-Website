import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import VN from './Translations/VN.json'
import EN from './Translations/EN.json'
import Api from './Api/api'


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
    return Api.getVideoApi()
     
  })
  .then(category=>{
    const loader = document.querySelector('.section')
    document.body.removeChild(loader)
    window.categoryData = category
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
          <React.StrictMode>
              <App />
          </React.StrictMode>
    )

    // if(category)
    // {
    //   document.body.removeChild(loader)
    //   window.categoryData = category
    //   const root = ReactDOM.createRoot(document.getElementById('root'));
    //   root.render(
    //         <React.StrictMode>
    //             <App />
    //         </React.StrictMode>
    //   )
    // }
    // else
    // {
    //   const failed = document.createElement('h1');
    //   const initStyle = {
    //     position:'absolute',
    //     top:'0',
    //     left:'50%',
    //     transform:'translate(-50%,50%)',
    //     color:'#fff',
    //     textAlign:'center'

    //   } 
    //   for (let i in initStyle)
    //   {
    //     failed.style[i] += initStyle[i]
    //   }
    //   failed.innerHTML='Failed to load content please try again'
    //   document.body.appendChild(failed);
    // }
  })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
