let request = (searchItem) => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=sSKaltuKwGZbZf1hGNN3ioPlocFboxOb&s=' + searchItem, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const img = document.querySelector('img');
        img.src = response.data.images.original.url;
    }).catch(function(err) {
        console.log("ERROR!");
        console.log(err);
    });
}

  export default request;