//Hello World with for loop//
(function tenTimes() {
    for (var i = 0; i < 10; i++ ) {
        var hello = document.createElement("h1");
        hello.innerText = "Hello World";
        document.body.appendChild(hello); 
        }
})();

//array//
var names = [
    "steve",
    "larry", 
    "joe", 
    "shirley", 
    "steph", 
    "nate", 
    "rick", 
    "emily"
];

//unordered list//
var members = document.createElement("ul");
document.body.appendChild(members);

//for loop - list items//
for (var i = 0; i < names.length; i++) {
    var newMembers = document.createElement("li");
    newMembers.textContent = names[i];
    members.appendChild(newMembers)
   }