//nav bar//
var navbar = document.createElement("navbar");
document.body.append(navbar);

//1st Link//
var siteOne = document.createElement("a");
siteOne.textContent = "Hulu"
navbar.appendChild(siteOne);
siteOne.style.margin = "15px"

//2nd Link//
var siteTwo = document.createElement("a");
siteTwo.textContent = "Funimation"
navbar.appendChild(siteTwo);
siteTwo.style.margin = "50px"

//3rd Link//
var siteThree = document.createElement("a");
siteThree.textContent = "Crunchyroll"
navbar.appendChild(siteThree);
siteThree.style.margin = "15px"


//h1 tag//
var label = document.createElement("h1");
var labelItem = document.getElementsByName("h1");
document.body.append(label);

//h1 text//
var labelText = document.createTextNode("Anime Stuff");
label.appendChild(labelText);


//p tag//
var content = document.createElement("p");
var pageContent = document.getElementsByName("p");
document.body.append(content);

//p text//
var contentText = document.createTextNode("Going to go over some anime related topics with this website.");
content.appendChild(contentText);


//ol tag//
var container = document.createElement("ol");
var containerBox = document.getElementsByName("ol");
document.body.append(container);

//li tag//
var newL = document.createElement("li");
var newLi = document.getElementsByName("li");
container.append(newL);

//li text//
var newText = document.createTextNode("One Piece")
newL.appendChild(newText);

//li tag 2//
var newL2 = document.createElement("li");
var newLi2 = document.getElementsByName("li");
container.append(newL2);

//li text 2//
var newText2 = document.createTextNode("Boruto: Next Generation")
newL2.appendChild(newText2);

//li tag 3//
var newL3 = document.createElement("li");
var newLi3 = document.getElementsByName("li");
container.append(newL3);

//li text 3//
var newText3 = document.createTextNode("Sword Art Online")
newL3.appendChild(newText3);


var footer = document.createElement("footer");
document.body.append(footer);

var closer = document.createElement("a");
closer.textContent = "BobbyYo Studios"
footer.appendChild(closer);
closer.style.fontWeight = "bold"
