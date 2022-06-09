import axios from 'axios'

export const getUrl = (path) =>{
    let PUBLIC_URL = `${process.env.PUBLIC_URL}`
    if(path.startsWith(`${PUBLIC_URL}/`))
    {
     
        path = path.slice(PUBLIC_URL.length+1)
    }
    let finalPath = path.startsWith('/') 
        ? `${PUBLIC_URL}${path}`
        : `${PUBLIC_URL}${path}`
    return finalPath
}

export const getImageUrl = (asset) =>
{
    return getUrl('/images/Quan/'+ asset)
}

export const getImageCategoryUrl = (asset) =>
{
    return getUrl('/images/Category/'+ asset)
}