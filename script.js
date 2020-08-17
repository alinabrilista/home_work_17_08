/*triangle*/
let sideTa = prompt("Enter a value for the side of your triangle");
if (sideTa > 0 && typeof Number(sideTa) === "number") {
  alert("OK!");
} else {
  alert("Error!");
}
let signTa = prompt("Enter a sign of your triangle");
if (signTa.length === 1) {
  alert("OK!");
  for (let i = ""; i.length <= sideTa; i += signTa) {
    console.log(i);
  }
} else {
  alert("Error!");
}
/*square*/
let sideSqA = prompt("Enter a value for the side of your square");
let sideSqB = Number(sideSqA);
if (sideSqB > 0 && typeof sideSqB === "number") {
  alert("OK!");
} else {
  alert("Error!");
}
let signSq = prompt("Enter a sign of your square");
if (signSq.length === 1) {
  alert("OK!");
  console.log(signSq.repeat(sideSqB));
  for (let i = 0; i < sideSqB - 2; ++i) {
    console.log(signSq + " ".repeat(sideSqB - 2) + signSq + " ".repeat(i));
  }
  console.log(signSq.repeat(sideSqB));
} else {
  alert("Error!");
}
