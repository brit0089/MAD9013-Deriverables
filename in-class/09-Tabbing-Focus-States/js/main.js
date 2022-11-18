function init() {
  
    const toTop = document.querySelector('.to-top');
  
    function handleToTop() {
      if (window.scrollY > 50) {
        toTop.classList.add('visible');
      } else {
        toTop.classList.remove('visible');
      }
    }
  
    handleToTop();
  
    toTop && window.addEventListener('scroll', handleToTop);
  
  }
  
  document.addEventListener('DOMContentLoaded', init);