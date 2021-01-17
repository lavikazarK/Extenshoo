const scriptElement = document.createElement("script");
scriptElement.src = chrome.extension.getURL("pageScript.js");
(document.head || document.documentElement).appendChild(scriptElement);

chrome.runtime.onMessage.addListener(message => {
  const { type, data } = message;
  switch (type) {
    case "SET_USER_FEATURE":
      window.postMessage(
        {
          type,
          payload: data
        },
        "*"
      );
      break;
    case "AGENCIES":
      window.postMessage(
        {
          type,
          payload: data
        },
        "*"
      );
      break;
    case "USER_FEATURES":
      window.postMessage(
        {
          type,
          payload: data
        },
        "*"
      );
      break;
  }
});

const handleApplicationEvents = event => {
  const data = event.data;
  if (data) {
    switch (data.type) {
      case "GOT_AGENCIES":
        chrome.runtime.sendMessage({
          type: "GOT_AGENCIES",
          agencies: data.payload
        });
        // chrome.storage.sync.set({ agencies: data.payload });
        break;
      case "GOT_USER_FEATURES":
        chrome.runtime.sendMessage({
          type: "GOT_USER_FEATURES",
          userFeatures: data.payload
        });
        // chrome.storage.sync.set({ userFeatures: data.payload });
        break;
      default:
        break;
    }
  }
};
window.addEventListener("message", handleApplicationEvents);
