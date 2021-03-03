//For loop of Bobby World//
(function fiveTimes() {
    for (var i = 0; i < 5; i++) {
        var myWorld = document.createElement("h2");
        myWorld.innerText = "Bobby World";
        myDiv.appendChild(myWorld);
        myWorld.style.fontSize = "20px"
        myWorld.style.fontWeight = "lighter"
        myWorld.style.fontFamily = "sans-serif"
        myWorld.style.color = "cornflowerblue"
    }
})();


function sway() {
document.querySelector("myDiv").classList.add("border");
console.log(document.querySelector("border").className)
}