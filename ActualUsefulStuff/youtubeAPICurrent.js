async function youtubeFetch(vidList) {
  for(let i = 0; i < vidList.length; i++){
    let searchLink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${vidList[i]}&key=AIzaSyBSolnHh0xn29PRa6PspyidJBGJb2bDTRk`
  
    
    let response = await fetch(searchLink)
    let temp = await response.json() //needs temp to convert to json
    let results = temp['items']
    

    
  
    let outList = []
  
    for (let j = 0; j < 3; j++) {
      let title = results[j].snippet.title
      let url = "https://www.youtube.com/watch?v="+ results[j]["id"]["videoId"]
      let thumbnail = results[j]["snippet"]["thumbnails"]['default']['url']
  
      outList.push({ 'title' : title, 'url' : url, 'thumbnail' : thumbnail })
    }
    
    //Need to make console.log() to return maybe?
    await console.log(outList) 
  
  }

}

//needs actual vidlist from chatGPT
vidList = ['How%20to%20Design%20a%20Speed%20Gearbox']
//function call probably needs exporting
youtubeFetch(vidList)