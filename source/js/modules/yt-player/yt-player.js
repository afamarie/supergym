const btn = document.querySelector('.intro__video-btn');
const video = document.querySelector('.intro__video');
const wrapper = document.querySelector('.intro__video-wrapper')

const onClickStartVideo = (evt) => {
  evt.preventDefault();
  wrapper.insertAdjacentHTML('afterbegin','<iframe class="intro__video" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube видео" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  setTimeout(() => wrapper.classList.add('intro__video-wrapper--play'), "1000");
}

btn.addEventListener('click', onClickStartVideo);
