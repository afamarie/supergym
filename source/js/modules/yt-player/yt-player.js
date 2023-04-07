const initVideo = () => {
  if (document.querySelector('.intro__video-wrapper') !== null && document.querySelector('.intro__video-btn') !== null) {
    const wrapper = document.querySelector('.intro__video-wrapper');
    const btn = document.querySelector('.intro__video-btn');

    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      wrapper.insertAdjacentHTML('afterbegin','<iframe class="intro__video" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube видео" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
      setTimeout(() => wrapper.classList.add('intro__video-wrapper--play'), "1000");
    });
  } else {
  }
}

export {initVideo};
