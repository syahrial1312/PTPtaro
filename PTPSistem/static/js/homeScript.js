document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const header = accordion.querySelector(".accordion-header");
        const content = accordion.querySelector(".accordion-content");
        const icon = header.querySelector(".icon");

        header.addEventListener("click", function () {
            // Toggle visibility
            const isOpen = content.style.display === "block";
            content.style.display = isOpen ? "none" : "block";

            // Ubah ikon dari + ke -
            icon.textContent = isOpen ? "+" : "-";
        });
    });
});
