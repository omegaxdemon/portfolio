
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const text = document.querySelector('.typing-text');
const words = ["Debottam", "a Developer", "a Creator"];
let index = 0, charIndex = 0;

function type() {
  if (charIndex < words[index].length) {
    text.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (charIndex > 0) {
    text.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % words.length;
    setTimeout(type, 200);
  }
}
type();


const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    cards.forEach(card => {
      card.style.display = filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
