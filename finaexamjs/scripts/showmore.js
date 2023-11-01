function showMore() {
    let moreInfo = document.getElementById("moreInfo");
    let showMoreButton = document.querySelector("button");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        showMoreButton.innerHTML = "Show Less";
    } else {
        moreInfo.style.display = "none";
        showMoreButton.innerHTML = "Show More";
    }
}