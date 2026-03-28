document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".icon-menu");
    const menuNav = document.querySelector(".icons-nav");

    if (!menuBtn || !menuNav) return;

    let menuAberto = false;

    // 🔧 prepara animação
    menuNav.style.transition = "all 0.3s ease";

    // 👉 só aplica estado escondido no MOBILE
    if (window.innerWidth < 1024) {
        menuNav.style.opacity = "0";
        menuNav.style.transform = "translateY(-10px)";
        menuNav.style.display = "none";
    }

    // 🍔 MENU
    menuBtn.addEventListener("click", () => {

        // 👉 impede interferência no desktop
        if (window.innerWidth >= 1024) return;

        menuAberto = !menuAberto;

        if (menuAberto) {
            menuNav.style.display = "flex";

            setTimeout(() => {
                menuNav.style.opacity = "1";
                menuNav.style.transform = "translateY(0)";
            }, 10);

        } else {
            menuNav.style.opacity = "0";
            menuNav.style.transform = "translateY(-10px)";

            setTimeout(() => {
                menuNav.style.display = "none";
            }, 300);
        }
    });

});