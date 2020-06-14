function disappear() {
    let mobileNav = document.getElementById("mobile-nav");
    let close = document.getElementById("close");
    let hamburger = document.getElementById("hamburger");
    mobileNav.style.display = "none";
    close.style.display = "none";
    hamburger.style.display = "block";
  }
  function appear() {
    let mobileNav = document.getElementById("mobile-nav");
    let hamburger = document.getElementById("hamburger");
    let close = document.getElementById("close");
    mobileNav.style.display = "block";
    hamburger.style.display = "none";
    close.style.display = "block";
  }
  