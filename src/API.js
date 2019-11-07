export const getProjectListAll = () => {
    return fetch('http://127.0.0.1:5000/projects/list?project=all', 
        {
            method: 'GET',
            header: { accessControlAllowOrigin: '*' }
        }
        ).then( data => {
            return data.json()    
        }).then(data => {
            console.log(data)
        })
}

/* this needs to be fixed obv TODO */
export const getAPOD = () => {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=NCTrauYGs1Q00lP5zPZosbRf4HxuhrMxhIP6lcdW`, 
    {
        method: 'GET',
        header: { accessControlAllowOrigin: '*' }
    }
    ).then(data => {
        return data.json()    
    })
}
