
let vidParsing = require('./title-string-parsing');
let vidList = vidParsing.vidList
let API_KEY = 'AIzaSyB9PnHmwhcUg-SyCMyNxxY8CFo-rLm1oCs'
outList = []
for(let i = 0; i < vidList.length; i++){
  let searchLink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${vidList[i]}&key=${API_KEY}`
  
  fetch(searchLink)
  .then(function (response) {
      return response.json()
  })
  .then(function (obj){
    let results = obj['items']
    for(let j = 0; j < 3; j++){
      outList.push({
        'title' : items[j]["snippet"]["title"],
        'url' : "https://www.youtube.com/watch?v="+ items[j]["id"]["videoId"],
        'thumbnail' : items[j]["snippet"]["thumbnails"]['default']['url']
    
    })
    }
  })
  .catch(error => console.log("Error"))
}
console.log(outList)