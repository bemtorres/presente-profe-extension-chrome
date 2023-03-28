function showReadme(info, tab) {
  const url = chrome.runtime.getURL('readme.html');
  chrome.tabs.create({ url });
}

chrome.action.onClicked.addListener((tab) => {
  showReadme();
});

chrome.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    showReadme();
  }
});
