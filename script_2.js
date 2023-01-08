function myHeading() {
  var x = document.getElementById("mainHeading");
    
  if (x.innerHTML === "All tastes and colors of India") {
      x.innerHTML = "Happy New Year!";
  }
}

const myImage = document.getElementById("About_us");
//debugger; 

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "About_us_pic.jpg") {
    myImage.setAttribute("src", "Monkey_pic.jpg");
  } else {
    myImage.setAttribute("src", "About_us_pic.jpg");
  }
}