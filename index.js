const pressed = [];
const secretCode = "bhavya";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("YASSSS!!!!");
    cornify_add();
  }
  console.log(pressed);
});
