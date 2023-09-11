document.addEventListener("DOMContentLoaded", function () {
    const menuDesktop = document.getElementById("menuDesktopItems");
    const menuMobile = document.getElementById("menuMobileItems");
  
    const menus = [
        { "text": "Sobre", "link": "#Sobre" },
        { "text": "Serviços", "link": "#Servicos" },
        { "text": "Preços", "link": "#Precos" },
        { "text": "Equipamentos", "link": "#Contato" }
    ];

    // Desktop
    menus.forEach(menu => {
        const listItem = document.createElement("li");
        listItem.className = "menu-desktop__item nav-item";

        const menuItem = document.createElement("a");
        menuItem.className = "menu-desktop__item-link nav-link";

        menuItem.textContent = menu.text;
        menuItem.href = menu.link;
        listItem.appendChild(menuItem);
        menuDesktop.appendChild(listItem);
    });

    //Mobile
    menus.forEach(menu => {
        const listItem = document.createElement("li");
        listItem.className = "nav-mobile__item list-group-item";

        const menuItem = document.createElement("a");
        menuItem.className = "nav-mobile__item-link";

        menuItem.textContent = menu.text;
        menuItem.href = menu.link;
        listItem.appendChild(menuItem);
        menuMobile.appendChild(listItem);
    });
    
  });
  