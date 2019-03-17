console.log("hi");

document.addEventListener("click", e => {
  if (e.target.classList.contains("main-action")) {
    console.log("bookmark");
  }
  if (e.target.classList.contains("secondary-action")) {
    console.log("list");
  }
});

browser.tabs
  .executeScript({
    file: `../content/tab-info.js`
  })
  .then(result => {
    console.log(result);
    const { title, url } = result[0];

    console.log({ title, url });

    // const a = document.createElement("a");
    // a.href = url;
    // a.innerText = title;

    // document.querySelector(".current-tab");
  })
  .catch(err => console.error(err));
