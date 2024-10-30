document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("contentsSidebar");
    const links = document.querySelectorAll("#contentsSidebar nav ul li a");
    const sections = document.querySelectorAll("section");
    let sidebarVisible = false;
    let hideSidebarTimeout;

    // Show sidebar when the mouse is near the right edge of the screen and near the vertical bounds of the sidebar
    document.addEventListener("mousemove", (e) => {
        const sidebarRect = sidebar.getBoundingClientRect();
        const isNearRightEdge = e.clientX > window.innerWidth - 50; // Cursor near the right edge
        const isWithinSidebarHeight = e.clientY > sidebarRect.top && e.clientY < sidebarRect.bottom; // Cursor is vertically aligned with the sidebar

        if (isNearRightEdge && isWithinSidebarHeight) {
            // Show the sidebar when cursor is near the right edge and aligned with the sidebar's height
            sidebar.style.right = "0";
            sidebarVisible = true;
            clearTimeout(hideSidebarTimeout); // Cancel hide timeout if the cursor is near
        } else if (sidebarVisible && (e.clientX < window.innerWidth - 300 || !isWithinSidebarHeight)) {
            // Start hiding the sidebar if the mouse is far from the sidebar
            hideSidebarTimeout = setTimeout(() => {
                sidebar.style.right = "-280px";
                sidebarVisible = false;
            }, 300); // Add delay before hiding to prevent accidental disappearance
        }
    });

    // Highlight the active section in the sidebar
    const highlightSection = () => {
        let scrollPosition = window.scrollY + 50; // Add some offset to adjust the highlight

        // If we're above the first section, don't highlight anything
        if (scrollPosition < sections[0].offsetTop) {
            links.forEach((link) => link.classList.remove("active"));
            return;
        }

        // Determine which section is currently in view
        let index = sections.length;
        while (--index && scrollPosition < sections[index].offsetTop) {}

        links.forEach((link) => link.classList.remove("active"));
        if (index >= 0) {
            links[index].classList.add("active");
        }
    };

    // Listen to scroll events to highlight the current section
    window.addEventListener("scroll", highlightSection);

    // Smooth scroll to section when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent the default anchor click behavior
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the target section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Keep the sidebar visible when interacting with it
    sidebar.addEventListener("mouseenter", () => {
        clearTimeout(hideSidebarTimeout); // Cancel hide timeout when mouse is over the sidebar
    });

    sidebar.addEventListener("mouseleave", () => {
        // Hide sidebar after a delay when the mouse leaves the sidebar
        hideSidebarTimeout = setTimeout(() => {
            sidebar.style.right = "-280px";
            sidebarVisible = false;
        }, 500);
    });
});
