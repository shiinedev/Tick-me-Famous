function addFakeVerification() {
    
    const usernameContainer = document.querySelectorAll('div[data-testid="UserName"]');
    
        // Check if verification already exists (avoiding duplicates)
        usernameContainer.forEach((userElement) => {
            const nameSpan = userElement.querySelector('span');
            const verifiedBadge = userElement.querySelector('[data-testid="icon-verified"]');
            const verificationButton = userElement.querySelector('button[aria-label="Provides details about verified accounts."]');
        if (nameSpan && !verifiedBadge && !verificationButton) {
            
            // Find an existing verification badge
            let realBadge = document.querySelector('svg[aria-label="Verified account"]');
            if (realBadge) {
                let clonedBadge = realBadge.cloneNode(true);
                clonedBadge.classList.add('fake-verify');
                clonedBadge.style.width = '30px';
                clonedBadge.style.height = '30px';
                clonedBadge.style.marginLeft = '5px';
                clonedBadge.style.verticalAlign = 'middle';
                clonedBadge.style.marginBottom = '4px';
                
                nameSpan.appendChild(clonedBadge);
            }
        }
    })
}


// Observe Twitter’s dynamic updates
const observer = new MutationObserver(() => {
    
    addFakeVerification();
});

observer.observe(document.body, { childList: true, subtree: true });

// Run immediately on page load
document.addEventListener("DOMContentLoaded", () => {
    addFakeVerification();    
});

addFakeVerification();