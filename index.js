
document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section, .hero");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    });
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll(".fade-in, .slide-in, .hero .content").forEach(el => {
      io.observe(el);
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const id = link.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY + 100;
      navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  
  });
  
