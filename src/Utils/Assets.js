

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

export const getViewDemoUrl = (categories,name) =>{
    let demo = categories.filter(category=>{
        return category.name===name
    })
    let src = demo[0].category[0].iframe
    return src
            .split(" ")[1]
            .split('src=')[1]
            .replace(/"/g,'')
}