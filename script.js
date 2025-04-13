let loader = document.getElementById("preloader");

window.addEventListener(
  "load",
  function (load) {
    window.removeEventListener("load", load, false);
    setTimeout(function () {
      loader.style.display = "none";
    }, 800);
},
  false
);


let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');
let collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

document.addEventListener('DOMContentLoaded', () => {
  let goToTop = document.getElementById('gototop');
  goToTop.style.display = 'none';
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      goToTop.style.display = 'flex';
    } else {
      goToTop.style.display = 'none';
    }
  });

  goToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
