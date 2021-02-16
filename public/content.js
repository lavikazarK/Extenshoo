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
      case "GLOBALS":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "SET_GLOBAL":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "DELETE_GLOBAL":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "GET_CONTROL_PANEL_OPTIONS":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "REFRESH_CONTROL_PANEL":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "GET_HOST":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "GET_BUILD_NUMBER":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
      case "REDIRECT_TO_GRID":
          window.postMessage(
              {
                  type,
                  payload: data
              },
              "*"
          );
          break;
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
    case "GET_CONTROL_PANEL_OPTIONS":
      window.postMessage(
          {
            type,
            payload: data
          },
          "*"
      );
      break;
    case "REFRESH_CONTROL_PANEL":
      window.postMessage(
          {
            type,
            payload: data
          },
          "*"
      );
      break;
    case "GET_HOST":
      window.postMessage(
          {
            type,
            payload: data
          },
          "*"
      );
      break;
    case "SYSTEM_PROCESSES":
      window.postMessage(
          {
            type,
            payload: data
          },
          "*"
      );
      break;
    case "SYSTEM_PROCESSES_DTO":
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
      case "GOT_SYSTEM_PROCESSES":
        chrome.runtime.sendMessage({
          type: "GOT_SYSTEM_PROCESSES",
          systemProcesses: data.payload
        });
        // chrome.storage.sync.set({ userFeatures: data.payload });
        break;
      case "GOT_SYSTEM_PROCESSES_DTO":
        chrome.runtime.sendMessage({
          type: "GOT_SYSTEM_PROCESSES_DTO",
          systemProcess: data.payload
        });
        // chrome.storage.sync.set({ userFeatures: data.payload });
        break;
      case "GOT_CONTROL_PANEL_OPTIONS":
        chrome.runtime.sendMessage({
          type: "GOT_CONTROL_PANEL_OPTIONS",
          options: data.payload
        });
        // chrome.storage.sync.set({ userFeatures: data.payload });
        break;
        case "GOT_HOST":
            chrome.runtime.sendMessage({
                type: "GOT_HOST",
                host: data.payload
            });
            // chrome.storage.sync.set({ userFeatures: data.payload });
            break;
        case "GOT_BUILD_NUMBER":
            chrome.runtime.sendMessage({
                type: "GOT_BUILD_NUMBER",
                build: data.payload
            });
            // chrome.storage.sync.set({ userFeatures: data.payload });
            break;
        case "GOT_GLOBALS":
            chrome.runtime.sendMessage({
                type: "GOT_GLOBALS",
                globals: data.payload
            });
            break;
      default:
        break;
    }
  }
};
window.addEventListener("message", handleApplicationEvents);
