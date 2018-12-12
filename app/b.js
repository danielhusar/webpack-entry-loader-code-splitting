console.log("Inside B");

// This dynamic import doesn't work
import(/* webpackChunkName: "lazy-2" */ "./modules/lazy-2")
  .then(module => {
    console.log("Module loaded:", module.default);
  })
  .catch(e => {
    console.log("Error loading module lazy-2 with error:");
    throw e;
  });
