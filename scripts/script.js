window.app = () => {
  let scrollY = 0;
  let header = document.getElementsByClassName('navbar')[0];

  window.onscroll = e => {
    if (window.scrollY === 0) {
      header.classList.add('clear');
      header.classList.remove('invisible');
    } else {
      header.classList.remove('clear');
      if (window.scrollY > scrollY) {
        header.classList.add('invisible');
      } else {
        header.classList.remove('invisible');
      }
    }

    scrollY = window.scrollY;
  };

  document.querySelectorAll('a[device-link]').forEach(element => {
    const devices = JSON.parse(element.getAttribute('href'));
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      element.href = devices.mobile;
    } else {
      element.href = devices.desktop;
    }
  });
};

window.app();
