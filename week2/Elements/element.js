//h1 tag//
var intro = document.createElement("h1");
var header = document.getElementsByName("h1");
document.body.append(intro);

//h1 text//
var introText = document.createTextNode("Welcome to my JS site");
intro.appendChild(introText);


//p tag//
var content = document.createElement("p");
var pageContent = document.getElementsByName("p");
document.body.append(content);

//p text//
var contentText = document.createTextNode("All of this was created with Javascript");
content.appendChild(contentText);


//ol tag//
var container = document.createElement("ol");
var containerBox = document.getElementsByName("ol");
document.body.append(container);

//li tag//
var newLine = document.createElement("li");
var newLi = document.getElementsByName("li");
document.body.append(newLine);

//li text//
var newLineText = document.createTextNode("Anime")
newLine.appendChild(newLineText);

//li tag 2//
var newLine2 = document.createElement("li");
var newLi2 = document.getElementsByName("li");
document.body.append(newLine2);

//li text 2//
var newLineText2 = document.createTextNode("Sneakers")
newLine2.appendChild(newLineText2);

//li tag 3//
var newLine3 = document.createElement("li");
var newLi3 = document.getElementsByName("li");
document.body.append(newLine3);

//li text 3//
var newLineText3 = document.createTextNode("Sports")
newLine3.appendChild(newLineText3);