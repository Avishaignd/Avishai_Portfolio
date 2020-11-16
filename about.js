// First, creating an array containing the URLs of the cities I have lived in
const cities = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6794.475436401137!2d34.78780407375072!3d31.627341060715477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502940a9b545da9%3A0x872bedbfd40e38f9!2sGat!5e0!3m2!1sen!2sil!4v1598876895483!5m2!1sen!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.0487539476267!2d34.80639768550485!3d31.959574032521726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4397915a409%3A0x8843d27c5e4fb25c!2z16HXlden15XXnNeV15EgMjAsINeo15DXqdeV158g15zXpteZ15XXnw!5e0!3m2!1siw!2sil!4v1599921853449!5m2!1siw!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4470054115836!2d13.304096984755814!3d52.50724904492734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850de94686bc5%3A0xa23328dfed710f98!2zS2Fpc2VyLUZyaWVkcmljaC1TdHJhw59lIDQ5LCAxMDYyNyBCZXJsaW4sINeS16jXnteg15nXlA!5e0!3m2!1siw!2sil!4v1599921574177!5m2!1siw!2sil",

]
// Starting the source at inedx 0
let i = 0
let mapIndex = document.getElementById("map")
mapIndex.src = cities[i]

// Using a for loop in a function to make sure where the index is, in order to disable\re-enable the buttons
function enabler(){
if(i==0){
    document.getElementById("prev").disabled = true
}
else if (i==cities.length -1) {
    document.getElementById("next").disabled = true
    
}
else{
    document.getElementById("prev").disabled = false
    document.getElementById("next").disabled = false
}
}
// updating the index and then re-checking if the button should be disabled
document.getElementById("next").addEventListener("click", onClick);
function onClick() {
    i = i+1
    mapIndex.src = cities[i]
    console.log(i)
    enabler()
}

document.getElementById("prev").addEventListener("click", onClick2);
function onClick2() {
    i = i-1
    mapIndex.src = cities[i]
    console.log(i)
    enabler()
}

enabler()