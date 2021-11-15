import Basic from "./experiments/basic.js";
import("./assets/global.css");
import home from "./views/home.html";

const app = document.getElementById("target");

const renderer = Basic();

if (app.children.length === 0) {
  app.appendChild(renderer.domElement);
} else {
  app.replaceChild(app.children[0], render.domElement);
}

if (module.hot) module.hot.accept();
