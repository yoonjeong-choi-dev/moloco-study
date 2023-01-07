document.addEventListener('DOMContentLoaded', () => {
  // Wide Banner Sliding
  const wideBanner = document.querySelector('.wide-banner');
  setInterval(() => {
    const nextImage = wideBanner.querySelector('input:checked').nextElementSibling;
    if (nextImage) {
      if (nextImage.nodeName === 'INPUT') {
        nextImage.checked = true;
      } else {
        wideBanner.querySelector('input:first-child').checked = true;
      }
    }
  }, 3000);

  // Scroll Disabled Layout
  const scrollDisabledId = 'scroll-disabled';
  const lockEvents = ['scroll', 'touchmove', 'mousewheel'];
  document.getElementById('mobile_menu_button').addEventListener('click', (e) => {
    const button = e.target;

    if (!button.checked) {
      // remove scroll-lock
      console.log(document.getElementById(scrollDisabledId));
      document.body.removeChild(document.getElementById(scrollDisabledId));
    } else {
      // add scroll-lock
      const lock = document.createElement('div');
      lock.id = scrollDisabledId;

      // disable scroll
      lockEvents.forEach((event) => {
        lock.addEventListener(event, (e) => {
          e.preventDefault();
          e.stopPropagation();
        })
      })

      // click scroll => turn off menu
      lock.addEventListener('click', () => {
        document.body.removeChild(lock);
        button.checked = false;
      })

      document.body.append(lock);
    }
  });

  //
});