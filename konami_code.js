const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var i = 0;

function init() {
  if (i === codes.length - 1) {
    window.alert("you did it!");
    console.log("Booyah!")
    i = 0;
  }
}
