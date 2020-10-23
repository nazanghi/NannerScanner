const ISS_LOC = "http://api.open-notify.org/iss-now.json" //API for the ISS
const GMAP_KEY = "AIzaSyCIhMaab2I5DZf5GaWnhVxZL2He90U-wfA" //API Key for Google Maps
const startingAddress = document.getElementById("startingAddress") //where the user types their address
let bsAddress = "245 Front Street, Key West, FL 33040" //this will later be a math random at an array of bs addresses
let addressInput = startingAddress.value || bsAddress
const GMAP_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressInput}&key=${GMAP_KEY}`
const banana = 18 //how many cm are in a banana
const kM = 100000 //how many CM are in one KM
const bananaResults = document.getElementById('bananaResults')

const userSelect = document.getElementById("userSelect")
const userForm = document.getElementById("userAddress")
const resultsDiv = document.getElementById("results")
const currentLocation = document.getElementById("currentLocation")



userForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    
    let issLatitude = 0
    let issLongitude = 0
    let userLatitude = 0
    let userLongitude = 0    

    try {
        const issResponse = await axios.get(ISS_LOC) 
        const userResponse = await axios.get(GMAP_URL)
        issLatitude = issResponse.data.iss_position.latitude
        issLongitude = issResponse.data.iss_position.longitude
        let userData = userResponse.data.results[0].geometry.location
        userLatitude = userData.lat
        userLongitude = userData.lng

    }
    catch(error){
        console.log(error)
    }
    
    console.log("://BANANA_BUTTON_VALUE_RECEIVED");
    let distanceKM = parseInt((Math.sqrt( ((issLongitude - userLongitude)**2) + ((issLatitude - userLatitude)**2)))*111);
    console.log(`Coordinates: ISSLong: ${issLongitude} UserLong: ${userLongitude} issLat: ${issLatitude} userLat: ${userLatitude}`)

    let bananaDistance = parseInt(distanceKM/(banana/kM))
    
    
    
    bananaResults.innerText = `Your location is about ${bananaDistance} bananas away from the International Space Station's current GPS coordinates.`
    
})


let nansForever = document.getElementById("nansForever")

document.addEventListener("DOMContentLoaded", () =>{
    nannerfy = () => {
    let holyBanana= document.createElement("div")
    let bananaBody= document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src", "https://media.tenor.com/images/a41a9667ebbf62041425bb9e7eadcd11/tenor.gif")
    img.classList.add('nanners')
    bananaBody.appendChild(img)
    holyBanana.appendChild(bananaBody)
    bananaBody.classList.add('floatingBanana')
    holyBanana.classList.add('flyingBanana')
    nansForever.appendChild(holyBanana)
}

    let nannerSpawn = () => {
        for (let i=0; i <50; i++) {
            (setTimeout(nannerfy,(2000*i)))
        }
    }
    setTimeout(nannerSpawn, 17000)
})