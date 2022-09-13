const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const lime = document.querySelector(".lime");
const green = document.querySelector(".green");

const center = document.querySelector(".center");

const getBGColor = (selectedElement)=>{
    window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBGColor(red);

// red.addEventListener("mouseenter",()=>{
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
      center.style.background = color;
    });
  };

  magicColorChanger(red, getBGColor(red));