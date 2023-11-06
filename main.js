const iconMenu = document.getElementById("iconMenu");
      closeMenu = document.getElementById("closeMenu");
      navMobileMenu = document.getElementById("navMobileMenu");



      iconMenu.addEventListener("click", function() {
        iconMenu.style.display = "none";
        navMobileMenu.style.display = "inline";
      });
    //   ! UYARI EĞER BU SATIRI SİLERSENİZ BÜTÜN EVREN ÇÖKER !
    //   ! WARNING IF YOU DELETE THIS LINE THE WHOLE UNIVERSE WILL COLLAPSE !
      closeMenu.addEventListener("click", function() {
        closeMenu.style.display = "none";
        navMobileMenu.style.display = "none";
        iconMenu.style.display = "inline";
        location.reload();
      });
