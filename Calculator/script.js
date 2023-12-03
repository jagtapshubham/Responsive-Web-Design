let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    //string = string + e.target.innerHTML;
    console.log("e.target ", e.target.innerHTML);
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Cls") {
      string = string.slice(0, -1);
      console.log("after string slice = ", string);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
    console.log("string = ", string);
  });
});
