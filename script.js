window.onload = function () {
  document.getElementById("user").innerHTML = "Bhuvan";
};

document.getElementById("btn-click").onclick = function () {
  this.style.backgroundColor = "lightgreen";
};

function makeSentence(){
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;
  var sentence = noun + " " + verb + " " + adverb;
  document.getElementById("statement").innerHTML = sentence;
}

document.getElementById("build-button").addEventListener("click", makeSentence);

document.getElementById("grandparent").addEventListener("click", function() {
  console.log("Grandparent has been clicked");
});

document.getElementById("parent").addEventListener("click", function(){
  console.log("Parent has been clicked");
});

document.getElementById("child").addEventListener("click", function(){
  console.log("Child has been clicked");
});

document.getElementById("grandparent").addEventListener("click", function () {
  console.log("Grandparent has been clicked ");
}, true);

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent has been clicked ");
}, true);

document.getElementById("child").addEventListener("click", function () {
  console.log("Child has been clicked ");
}, true);

document.getElementById("category").addEventListener("click", function (event) {
  if (event.target.id === "blazers") {
    console.log("blazers");
  }
});
