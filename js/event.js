function showEventPage() {
    var eventPage = document.getElementById("event-page");
    eventPage.style.display = eventPage.style.display === "none" || eventPage.style.display === "" ? "block" : "none";
}

// Function to switch between event tabs
function switchTab(tabId) {
    var tabs = document.querySelectorAll('.event-tabs span');
    var contents = document.querySelectorAll('.event-page-content');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    contents.forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add('active');
}