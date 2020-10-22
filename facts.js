
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
 `Yuri Gagarin, the first cosmonaut, once said, "I see no god here." If he brought a banana though, he would have seen that."`
]

const bananaFactButton = document.getElementById("bananaFactButton")
const bananaFactZone = document.getElementById("bananaFactZone")


bananaFactButton.addEventListener('click', () => {
        bananaFactZone.textContent= `${
            bananaFacts[Math.floor(Math.random()*bananaFacts.length)]}`
        
        })

const issFactButton = document.getElementById("issFactButton")
const issFactZone = document.getElementById("issFactZone")


issFactButton.addEventListener('click', () => {
        issFactZone.textContent= `${
            issFacts[Math.floor(Math.random()*issFacts.length)]}`
        
        })
        
/** 
 * TODAY'S GOALS
 * 
 * 3. Get CSS to point where I feel good about it
 * 4. Then ask for help
 * 5. Readme.md
 * 6. Check in again and work on stretch goals
 */