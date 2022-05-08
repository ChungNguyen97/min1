const btnToTop = document.getElementById('toTopBtn')
const headerEl = document.querySelector('.header')

console.dir(headerEl.offsetTop);
window.onscroll = () => {
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if ((headerEl.offsetTop) >= 100) {
    headerEl.style.backgroundColor = '#fd79a8'
    headerEl.style.height = '54px'
    headerEl.style.boxShadow = "0px 2px 4px #b2bec3"
  } else {
    headerEl.style.backgroundColor = '#eee'
    headerEl.style.boxShadow = "unset"
  }

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
  menuMobile.style.display == 'block' ? menuMobile.style.display = 'none' : menuMobile.style.display = 'block'
}

const listItem = document.querySelectorAll('.menu__mobile li')
for (const item of listItem) {
  item.onclick = () => {
    menuMobile.style.display == 'block' ? menuMobile.style.display = 'none' : menuMobile.style.display = 'block'
  }
}

