console.log("inside A");

// This dynamic import works
import(/* webpackChunkName: "lazy-1" */ "./modules/lazy-1").then(module => {
  console.log("module loaded:", module.default);
});

const url = require("entry-loader?name=b.js!../app/b.js");

const script = document.createElement("script");
script.type = "text/javascript";
script.charset = "utf-8";
script.src = url;
window.document.head.appendChild(script);
