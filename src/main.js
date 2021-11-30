import "./style.less";
import png from "./assets/1.png";
console.log(1223);
console.log(png);
const div = document.getElementById("app");
// div.innerHTML = `
// <img src="${png}" />
// `;

const btn = document.createElement("button");
btn.innerHTML = "懒加载";
btn.onclick = function () {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      console.log(module);
      const fn = module.default;
      fn();
    },
    (err) => {}
  );
};
div.appendChild(btn);
console.log(1)
