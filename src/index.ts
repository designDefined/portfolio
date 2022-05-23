import "./style.css";
import "./sass.scss";
import Test from "./assets/test.png";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack";
  element.classList.add("hello");
  const testImage = new Image();
  testImage.src = Test;
  element.appendChild(testImage);
  return element;
}

document.body.appendChild(component());
