
const playButton = document.getElementById("playButton");
const closeButton = document.getElementById("closeButton");
const introPanel = document.getElementById("introPanel");
const menuView = document.getElementById("menuView");
const menuOptions = document.querySelectorAll(".menu-option");
const detailViews = document.querySelectorAll(".detail-view");
const backButtons = document.querySelectorAll(".back-button");

function showMenu() {
    detailViews.forEach(function(view) {
        view.classList.add("hidden");
    });

    menuView.classList.remove("hidden");
}

function openPanel() {
    showMenu();
    introPanel.classList.add("active");
}

function closePanel() {
    introPanel.classList.remove("active");
}

playButton.addEventListener("click", openPanel);

closeButton.addEventListener("click", closePanel);

menuOptions.forEach(function(option) {
    option.addEventListener("click", function() {
        const selectedSection = option.dataset.section;
        const selectedView = document.getElementById(selectedSection + "View");

        menuView.classList.add("hidden");

        detailViews.forEach(function(view) {
            view.classList.add("hidden");
        });

        if (selectedView) {
            selectedView.classList.remove("hidden");
        }
    });
});

backButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        showMenu();
    });
});
