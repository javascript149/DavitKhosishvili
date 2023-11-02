function toggleText() {
    const hiddenText = document.querySelector(".hidden-text");
    const showMoreButton = document.getElementById("show-more-button");

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        showMoreButton.innerText = "Show Less";
    } else {
        hiddenText.style.display = "none";
        showMoreButton.innerText = "Show More";
    }
}