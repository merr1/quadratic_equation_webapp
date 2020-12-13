var a = document.getElementById("input_a");
var b = document.getElementById("input_b");
var c = document.getElementById("input_c");
var button = document.getElementById("button");
button.addEventListener("click", function () {
  var x11 = document.getElementById("root1");
  var x22 = document.getElementById("root2");
  let a1 = a.value;
  let b1 = b.value;
  let c1 = c.value;
  x11.style.paddingLeft = "10px";
  x11.style.paddingRight = "10px";
  x22.style.paddingLeft = "10px";
  x22.style.paddingRight = "10px";
  let d = Math.pow(b1, 2) - 4 * a1 * c1;
  if (a1.length == 0 || b1.length == 0 || c1.length == 0) {
    x11.innerHTML = "Make sure you enter all the numbers.";
    x22.innerHTML = "";
    x22.style.paddingLeft = "0px";
    x22.style.paddingRight = "0px";
  } else if (a1 == 0) {
    let x = -c1 / b1;
    x11.innerHTML = "This is not a quadratic equation but who cares";
    x22.innerHTML = "x = " + parseFloat(x).toFixed(2);
  } else if (d > 0) {
    let x1 = (-b1 - Math.sqrt(d)) / (2 * a1);
    let x2 = (-b1 + Math.sqrt(d)) / (2 * a1);
    x11.innerHTML = "x1 = " + parseFloat(x1).toFixed(2);
    x22.innerHTML = "x2 = " + parseFloat(x2).toFixed(2);
  } else if (d === 0) {
    let x1 = ((-b1 - d) / 2) * a1;
    x11.innerHTML = "Quadratic equation has one real root.";
    x22.innerHTML = "x = " + parseFloat(x1).toFixed(2);
  } else {
    x11.innerHTML = "Quadratic equation has no real roots.";
    x22.innerHTML = "";
    x22.style.paddingLeft = "0px";
    x22.style.paddingRight = "0px";
  }
});
