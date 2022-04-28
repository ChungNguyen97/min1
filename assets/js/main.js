const btnToTop = document.getElementById('toTopBtn')
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}
btnToTop.onclick = () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Icon bar - menu mobile
const iconbar = document.getElementById('iconbar')
const menuMobile = document.querySelector('.header__mobile')

iconbar.onclick = () => {
  menuMobile.style.display == 'block' ? menuMobile.style.display = 'none' : menuMobile.style.display ='block'
}

const listItem = document.querySelectorAll('.menu__mobile li')
for (const item of listItem) {
  item.onclick = () => {
    menuMobile.style.display == 'block' ? menuMobile.style.display = 'none' : menuMobile.style.display = 'block'
  }
}