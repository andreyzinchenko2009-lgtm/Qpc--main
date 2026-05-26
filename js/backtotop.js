document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.getElementById("scrollBtn");
    const scrollIcon = document.getElementById("scrollIcon");

    if (!scrollBtn || !scrollIcon) {
        return;
    }

    function updateScrollButton() {
        if (window.pageYOffset > 300) {
            scrollIcon.classList.remove("fa-arrow-down");
            scrollIcon.classList.add("fa-arrow-up");
            scrollBtn.dataset.direction = "up";
        } else {
            scrollIcon.classList.remove("fa-arrow-up");
            scrollIcon.classList.add("fa-arrow-down");
            scrollBtn.dataset.direction = "down";
        }
    }

    updateScrollButton();
    window.addEventListener("scroll", updateScrollButton);

    scrollBtn.addEventListener("click", function() {
        if (this.dataset.direction === "up") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});