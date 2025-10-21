document.querySelector(".hamburger").addEventListener("click", ()=> {
    document.querySelector(".sidebar").style.right = "0%"
})
document.querySelector(".cross").addEventListener("click", ()=> {
    document.querySelector(".sidebar").style.right = "-100%"
})
document.querySelector(".navb a").addEventListener("click", ()=> {
    document.querySelector(".sidebar").style.right = "-100%"
})
const navLinks = document.querySelectorAll('ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

