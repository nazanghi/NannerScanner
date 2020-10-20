const ISS_LOC = "http://api.open-notify.org/iss-now.json"
const MAP_KEY = "AIzaSyCIhMaab2I5DZf5GaWnhVxZL2He90U-wfA"

/**
I need to take user parameters of their location
and the location data of the ISS 
and plug it into a formula that will calculate the distance between two objects across a sphere

distance = square root of ( (x2 - x1)^2 + (y2 - y1)^2
    the distance between one degree of latitude is 111km

and then I need to take that distance...
    and divide it by bananas
        average banana is 18cm

So my formula is going to take 
Parameter 1 User Input x1, y1
Parameter 2 ISS location x2, y2

distanceInKM = (sqrt (spaceLong - userLong)^2 + (spaceLat - userLat)^2)/111

distanceInKM then gets divided by banana length

const banana = 18 //this is in cm
1KM is 100,000 cm

Here's an example log of how the ISS return looks like
        message: "success",
        timestamp: 1603155213,
        iss_position: {
        longitude: "61.1974",
        latitude: "15.6638"
        }
        }

And this is Google Maps, which has a lot more information but isn't necessarily relevant
        formatted_address: "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
        geometry: {
        location: {
        lat: 37.4216129,
        lng: -122.0857393
        },
        location_type: "ROOFTOP",
        viewport: {
        northeast: {
        lat: 37.4229618802915,
        lng: -122.0843903197085
        },
        southwest: {
        lat: 37.4202639197085,
        lng: -122.0870882802915
        }
        }
        },



        I need to return an error if the User puts in a wrong address
            Could be fun to just give them a random location instead of letting them pick a new one
                -Make an array of stupid default locations
                    -like Margaritaville in Florida
                    -or the last blockbuster
                    -Alamogordo, mass burial of ET games
*/

const banana = 18
const kM = 100000
const distanceUnit = (111*kM) 
console.log(distanceUnit)

//I need to work the following in with the relevant API functions
calculator = (ISS, userInput) => { //these values are pseudocoded to provide framework

}