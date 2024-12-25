let max = prompt("enter maxium number");
let numb = Math.floor(Math.random() * max);
console.log(numb);

let num2 = prompt("enter no.");
while (true) {
  if (num2 == numb) {
    console.log("success");
    break;
  } else if (num2 == "q") {
    console.log("quit");
    break;
  } else {
    if (num2 < numb) {
      num2 = prompt("guess is too low ");
    } else if (num2 > numb) {
      num2 = prompt("guess is too high ");
    }
  }
}
