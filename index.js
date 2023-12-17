const cardImage = document.querySelector(".card__image");
cardImage.addEventListener("focus", () => {
    document
        .querySelector(".card__image-overlay-wrapper")
        .classList.remove("hide");
});

cardImage.addEventListener("blur", () => {
    document
        .querySelector(".card__image-overlay-wrapper")
        .classList.add("hide");
});