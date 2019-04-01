console.log('background');

browser.webRequest.onBeforeRequest.addListener(
  data => {
    const filter = browser.webRequest.filterResponseData(data.requestId);
    const decoder = new TextDecoder("utf-8");
    const encoder = new TextEncoder();

    console.log({ data });

    filter.ondata = e => {
      let str = decoder.decode(e.data, { stream: true });
      str = str.replace(/Example/g, "LeJob Example");
      filter.write(encoder.encode(str));
      filter.disconnect();
    };

    return {};
  },
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"]
);
