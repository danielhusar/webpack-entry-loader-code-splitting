console.log("inside B");

// This dynamic import doesn't work
import(/* webpackChunkName: "lazy-2" */ "./modules/lazy-2")
  .then(module => {
    console.log("module loaded:", module.default);
  })
  .catch(e => {
    console.log("error loading module lazy-2:", e);
  });
