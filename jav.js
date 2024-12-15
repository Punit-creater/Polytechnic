// Highlight the active navigation item
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });
    });
});