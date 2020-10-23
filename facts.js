
let bananaFacts = [
    "Today's common banana, the Cavendish, is different from the Gros Michel from before the 60s, as Gros Michel Bananas were wiped out by The Panama Disease. If you're curious what Gros Michel bananas tasted like, try a Banana-flavored Laffy Taffy or Runt! Its recipe is unchanged and based on the bananas of its time.",  
 "The inside of a banana peel can help relieve itching and inflammation, like from bug bites or poison ivy!", 
 "Bananas are considered a berry and the banana tree is actually an herb!", 
 "India consumes the most bananas in the world. In 2017, they ate more than the next three countries COMBINED.", 
 "There are more than 1,000 kinds of bananas, including Mona Lisa, Ice Cream, Goldfinger, and the Blue Java.", 
 "Rubbing a banana peel on a scratched CD will help fill the scratches without damaging the plastic finish!",
 "The slipping on a banana peel gag originates in the 1850s, when discarded peels would reach a gooey state after days or weeks of rotting."
]


let issFacts = [
    "The International Space Station has been continuously operated since November 2000. 240 individuals from 19 countries have visited it!",
 "The ISS moves five miles per second, and orbits the Earth every 90 minutes. That means every 24 hours, it experiences 16 sunrises and sunsets!",
"The internal pressurized volume of the ISS is 916 cubic meters. That means it could hold 7,328,000 bananas, but that would probably be a bad idea.",
 "The ISS uses about 1.5 MILLION lines of computer code. Its support on Earth uses an additional 3 million! If it were size 12 font and you were to stack bananas next to each other on the screen, it would be 101,003 bananas!",
 "Peggy Whitson has spent the most time living and working on the ISS, having spent 665 days! If you were to eat that many bananas, you wouldn't be able to do it in one sitting.",
 `From tip to tail, The International Space Station is 604 and a half bananas long!`,
 `If you lined up every electrical cable onboard the ISS, it would  be 71,526 bananas long!`
]

const bananaFactButton = document.getElementById("bananaFactButton")
const bananaFactZone = document.getElementById("bananaFactZone")
const factZone = document.querySelector(".results")


bananaFactButton.addEventListener('click', () => {
        factZone.textContent= `${
            bananaFacts[Math.floor(Math.random()*bananaFacts.length)]}`
        
        })




issFactButton.addEventListener('click', () => {
        factZone.textContent= `${
            issFacts[Math.floor(Math.random()*issFacts.length)]}`
        
        })
        
let yesMoreNans = document.getElementById("yesMoreNans")

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
    yesMoreNans.appendChild(holyBanana)
}

    let nannerSpawn = () => {
        for (let i=0; i <50; i++) {
            (setTimeout(nannerfy,(2000*i)))
        }
    }
    setTimeout(nannerSpawn, 17000)
})