const path = require('path');
const fs = require('fs');
const lodash = require('lodash');
const xlsx = require('xlsx');

const main = (input,output) =>{
    const workbook = xlsx.readFile(input)
    const sheets = workbook.SheetNames
    const i18={}
    sheets.forEach(sheet =>{

        const worksheet = workbook.Sheets[sheet]
        const data=[]
        const headers={}
        for (info in worksheet){
            if(info[0]==='!') continue
            const regexStringNumber = /([a-z]*)([0-9]*)/gmi
            let matchesStringNumber = regexStringNumber.exec(info)    
            const col = matchesStringNumber[1]
            const row = matchesStringNumber[2]
            const value = worksheet[info].v
            const regexHeader = /(::)(\w*)(::)/gm
            let matchesHeader = regexHeader.exec(value)
            if(matchesHeader!==null){
                headers[col] = matchesHeader[2]
            }else{
                if(!data[row]){
                    data[row]={}
                }
                data[row][headers[col]] = value
            }
        }
        //drop those rows which are empty:
        let emptyRow=0
        while(emptyRow < data.length ){
            if(!data[emptyRow]){
                data.splice(emptyRow,1)
            }else{
                emptyRow++
            }
        }


        //translate id-text:
        for(i=0, keys= Object.keys(headers),len=keys.length; i<len ;i++){
            let id = headers[keys[0]]
            let language = headers[keys[i]]

            let define = lodash.mapValues(lodash.keyBy(data,id),(obj)=>{
                if(obj){
                    if(id===language){
                        return `${sheet}:${obj[language]}`
                    }
                    return obj[language]
                }
            })
            if (!i18.hasOwnProperty(language))
            {
                i18[language] = {}
            }
            i18[language][sheet]=define
       
        }
    })
    Object.keys(i18).forEach(language=>{
        let define = JSON.stringify(i18[language],null,4)
        let file = path.join(output, `${language}.json`)
        console.log(`Writing ${file}`)
        if (!fs.existsSync(output))
        {
            fs.mkdirSync(output, { recursive: true })
        }
        fs.writeFileSync(`${file}`, define)
    })
    
}

const input = path.resolve(process.argv[2])
const output = path.resolve(process.argv[3])

main(input,output)