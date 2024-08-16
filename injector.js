chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(`View Once Bypass => checking subscription: ${request}`);

  const interval = setInterval(() => {
    if (!document.querySelector("#side")) return;
    clearInterval(interval);

    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("script.js");
    (script.onload = function () {
      this.remove();
      console.log(`View Once Bypass => script injected`);
    }),
      (document.head || document.documentElement).appendChild(script);
  }, 100);
});

const phone = localStorage
  .getItem("last-wid-md")
  .split(":")[0]
  .replace(/\D/g, "");
console.log(`View Once Bypass => checking phone number: '${phone}'`);
chrome.runtime.sendMessage(phone);
