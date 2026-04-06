var heroImage = document.querySelector(".mainimg");

if (heroImage) {
    function moveImage() {
        var offset = window.scrollY || window.pageYOffset;
        var move = offset * 0.12;

        if (move > 36) {
            move = 36;
        }

        heroImage.style.transform = "translateY(" + move + "px)";
    }

    window.addEventListener("scroll", moveImage, { passive: true });
    moveImage();
}
