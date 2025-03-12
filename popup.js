document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        const messageDiv = document.getElementById("status-message");
        const funMessage = document.querySelector(".fun-message");
        
        if (currentTab && currentTab.url.includes("https://x.com/")) {
            messageDiv.innerText = "Who needs a subscription when you have this? 🤩";
            funMessage.innerText = "Don’t tell Elon… but you’re verified now 🤫";
            
        } else {
            messageDiv.innerText = "😢 You`re not in Twitter ! Open Twitter to Get Your Verification.";
            funMessage.innerText = "Blue badge energy, no subscription needed! 💙";

        }
    });
});