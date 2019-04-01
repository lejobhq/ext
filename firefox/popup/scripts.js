console.log("hi");

browser.tabs
  .executeScript({
    file: `../content/tab-info.js`
  })
  .then(result => {
    if(result == null) {
      throw new Error('Page not supported.');
    }

    console.log(result);
    const { title, url } = result[0];
    console.log({ title, url });

    document.addEventListener("click", e => {
      if (e.target.classList.contains("main-action")) {
        console.log("bookmark");
      }
      if (e.target.classList.contains("secondary-action")) {
        console.log("list");
      }
    });
  })
  .catch(err => console.error(err));
