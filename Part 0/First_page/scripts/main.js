const myImage = document.querySelector("img");

myImage.onclick= () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/pan.jfif"){
        myImage.setAttribute("src","img/senshi-pan.webp")
    }
    else{
        myImage.setAttribute("src","img/pan.jfif")
    }
};

let myButton = document.querySelector("button");

myButton.onclick = () => {
    setUserName();
  };
  
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } 
      else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `NOW ${myName} CAN MAKE PANCAKE!`;
      }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `NOW ${storedName} CAN MAKE PANCAKE!`;
  }