// Fetching my info from github, and then using only some of it for my card div
const myGit = "https://api.github.com/users/Avishaignd";

fetch(myGit)
    .then(function(received) {
        return received.json();
    })
    .then(function(data) {
        const profileName = document.getElementById("header");
        const profileImage = document.getElementById("headerImage");
        profileName.innerText=data.name
        profileImage.src=data.avatar_url
    })
// Creating a function to rotate the card on click
let card = document.getElementById("card")
card.addEventListener("click", function(){
    card.style.transform = "rotate(360deg)"    
});