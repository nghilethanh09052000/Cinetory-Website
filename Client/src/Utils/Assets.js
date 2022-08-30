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

export const getViewDemoUrl = () =>{
    return (
        <iframe 
            width="956" 
            height="538" 
            src="https://www.youtube-nocookie.com/embed/UCpJn9Q3k1Q" 
            title="bitis" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    )
}

export const getVideo = (video) =>{
    return getUrl('/videos/'+ video)
}