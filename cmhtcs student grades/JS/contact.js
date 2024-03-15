window.addEventListener('DOMContentLoaded',  e => {
  if (e.target.readyState === "interactive") {
    initApp();
  }
});

function initApp() {
  const headerLinks = document.querySelectorAll('.headerLink');
  const getInTouch = document.querySelector('.getInTouch');

  headerLinks.forEach(link => {
    link.addEventListener('click', e => {
      headerLinks.forEach(l => l.classList.remove('link-active'));
      link.classList.add('link-active');
    });
  });

  getInTouch.addEventListener('submit', e => {
    if (!getInTouch.checkValidity()) {
      getInTouch.classList.add('was-validated');
      e.preventDefault();
    }
  });
}
