// Creating an array to store the known languages in, and after it a sentence to attach them to
let languages = [
    "HTML",
    "CSS",
    "JavaScript",
];

let sentence = "This page was built using: "
const and = "and "
// Checking the index of the language to see where it is supposed to be attached to the sentence, and what word hould come before it
languages.forEach(function (name, index) {
    if (index === languages.length - 1) {
        sentence += and + name
    } else if (index === languages.length - 2) {
        sentence += name + " "
    } else {
        sentence += name + ", "
    }
    return sentence
});
document.getElementById("madeBy").innerText = sentence

// I created strings representing the different pages on my portfolio, attached links to them, and injected them into a <p> element in the HTML
const homePage = "HOME"
const aboutPage = "ABOUT"
const contactPage = "CONTACT"
const homeLink = homePage.link("index.html")
const aboutLink = aboutPage.link("about.html")
const contactLink = contactPage.link("contact.html")
const result = `${homeLink} | ${aboutLink} | ${contactLink}`
document.getElementById("links").innerHTML = result