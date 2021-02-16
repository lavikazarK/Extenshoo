const handlePopupContentEvents = event => {
  const data = event.data;
  if (data) {
    switch (data.type) {
      case "AGENCIES":
        window.top.getAgencies(data.payload);
        break;
      case "SET_USER_FEATURE":
        window.top.updateUserFeature(data.payload);
        break;
      case "USER_FEATURES":
        window.top.getUserFeatures(data.payload);
        break;
      case "GET_CONTROL_PANEL_OPTIONS":
        window.top.getControlPanelOptions(data.payload);
        break;
      case "REFRESH_CONTROL_PANEL":
        window.top.refreshControlPanel(data.payload);
        break;
      case "GET_URL":
        window.top.getUrl(data.payload);
        break;
      default:
        break;
    }
  }
};
window.addEventListener("message", handlePopupContentEvents);
