(function() {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  return {
    url: window.location.href,
    title: window.document.title
  };
})();
