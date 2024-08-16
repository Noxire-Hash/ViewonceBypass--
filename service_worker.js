chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  try {
    const r = await fetch(
      `https://2qb6jslkzncor6z7rovl3kgy6y0xapbu.lambda-url.us-east-1.on.aws/?phone=${request}`
    );
    chrome.tabs.sendMessage(sender.tab.id, r.status == 200);
  } catch (e) {
    chrome.tabs.sendMessage(sender.tab.id, null);
  }
});
