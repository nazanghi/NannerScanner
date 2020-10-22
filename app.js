/**
FROM THE TOP, DIRECTIONS



1. User inputs an address
2. Clicks Submit
3. NannerScanner takes the ISS current location in Long/Lat
4. And passes it as an argument for The NannerScannerJammer
5. Google Maps takes the user's address and turns it into Long/Lat
6. NannerScanner takes the Google Maps information and passes it as an argument for...
7. The NannerScannerJammer (NSJ)
8. NSJ takes both ISS & user Long & Lat as arguments for formula to calculate distance in KM
9. returned distance in KM is then turned into CM and divided by banana
10. User receives result of how many bananas appended to a div in HTML
11. Replacing results with new results as the NSJ is invoked


PROGRAMMING STEPS
    ☑︎1. Create necessary elements in HTML
    2. Create functions that will access API
    ☑︎3. Create Formula (NSJ) for calculating distance (and bananas)
    4. Access the long/lat values of respective maps
    5. Pass on long/lat values into NSJ and return results (in KM and Banana)
    6. Display results in km and banana for user
    7. Reset values when NSJ is invoked again
    8. Style CSS to look like an old terminal

PROJECT REQUIREMENTS
1. ReadMe Need to make 
2. Utilize Flexbox/grid Need to do more 
3. Secondary HTML page Could Use Improvement
4. two event handlers DONE
5. 20 git commits
6. Clean Code

HANGUPS:

Second HTML: Need to have an additional HTML page


STRETCH:
More stupid addresses
More stupid CSS themes


/**STRETCH GOALS
 * 
 * 
Could be fun to just give them a random location instead of letting them pick a new one
-Make an array of stupid default locations
-Start with Margaritaville, when MVP is met, make array to store BS addresses
-like Margaritaville in Florida
-or the last blockbuster, in Bend, Oregon
-Alamogordo, New Mexico mass burial of ET games
-world's largest banana farm
-world's largest banana
-bluth banana stand location
-where bananas in pajamas was filmed
-where the factory that makes bananagrams is
-curious george theme park
-Cocomo, Indiana John Stamos played Steel Drums

 */




console.log("://NANNER_SCANNER_TESTING")

if ('geolocation' in navigator) {
    console.log ('://NANNER_SCANNER_GEOLOCATION_UPLINK_ONLINE')
} else {
    console.log('yo ur browser suxxxx')
    alert("Sorry, but your browser's incompatible with the Nanner Scanner.")
}


bsAddresses = [
    {name: "Margaritaville", address: "245 Front Street, Key West, FL 33040"}, //Margaritaville
    {name: "The Last Blockbuster", address: "211 NE Revere Ave, Bend, OR 97701"}, //The last Blockbuster
    {name: "The Winchester Mansion", address: "525 S Winchester Blvd, San Jose, CA 95128"} //Winchester Mansion

]


const ISS_LOC = "http://api.open-notify.org/iss-now.json" //API for the ISS
const GMAP_KEY = "AIzaSyCIhMaab2I5DZf5GaWnhVxZL2He90U-wfA" //API Key for Google Maps
const startingAddress = document.getElementById("startingAddress") //where the user types their address
let bsAddress = "245 Front Street, Key West, FL 33040" //this will later be a math random at an array of bs addresses
let addressInput = startingAddress.value || bsAddresses[Math.floor(Math.random()*bsAddresses.length)] //gives user address OR if null, Margaritaville, etc
const GMAP_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressInput}&key=${GMAP_KEY}`
const banana = 18 
const kM = 100000 //this is just how many CM are in one KM
const bananaResults = document.getElementById('bananaResults')

const userSelect = document.getElementById("userSelect")
const userForm = document.getElementById("userAddress")
const resultsDiv = document.getElementById("results")
const currentLocation = document.getElementById("currentLocation")
// userMap()


//I need to add a separate thing similar to below, but for the use current location


// currentLocation.addEventListener("click", async (e) => {
//     e.preventDefault()
    
//     let issLatitude = 0
//     let issLongitude = 0
//     let userLatitude = 0
//     let userLongitude = 0
    
//     try {
//         const issResponse = await axios.get(ISS_LOC) 
//         useCurrentPosition = () =>
//         navigator.geolocation.getCurrentPosition(position=> {
//             position.coords.latitude, position.coords.longitude         
//             userLongitude = position.coords.longitude
//             userLatitude = position.coords.latitude
//             return userLongitude, userLatitude  
//         })
            

//         issLatitude = issResponse.data.iss_position.latitude
//         issLongitude = issResponse.data.iss_position.longitude
//         }
//     catch(error){
//         console.log(error)
//     }
    
//     console.log("://BANANA_BUTTON_VALUE_RECEIVED");
//     console.log(`User Coordinates: ${userLongitude, userLatitude} ISS Coords: ${issLongitude, issLatitude}`)
//     let distanceKM = parseInt((Math.sqrt( ((issLongitude - userLongitude)**2) + ((issLatitude - userLatitude)**2)))*111);
//     console.log(`Coordinates:`, issLongitude, userLongitude, issLatitude, userLatitude)

//     let bananaDistance = parseInt(distanceKM/(banana/kM))
//     bananaResults.InnerText = `Your current location is ${bananaDistance} bananas away from the International Space Station's current location.`
    
// })


userForm.addEventListener("submit", async (e) => {     //proof that anonymous functions are not that scary
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
    console.log(`Coordinates:`, issLongitude, userLongitude, issLatitude, userLatitude)

    let bananaDistance = parseInt(distanceKM/(banana/kM))
    
    // let distanceNannerfied = document.createElement('h2')
    // realDistance.innerHTML = `Your location is ${distanceKM}KM away from the International Space Station's current location.`
    bananaResults.innerText = `Your location is about ${bananaDistance} bananas away from the International Space Station's current location.`
    
    // console.log(`Distance KM: `, distanceKM)
    // resultsDiv.appendChild(realDistance)
    // resultsDiv.appendChild(distanceNannerfied)
})