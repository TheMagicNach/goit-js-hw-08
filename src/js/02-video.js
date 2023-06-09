
var throttle = require('lodash.throttle');

const iframeEl = document.querySelector('iframe');
const player = new Vimeo.Player(iframeEl);


  player.on(
    'timeupdate',
    throttle(function (number) {
      localStorage.setItem('videoplayer-current-time', `${number.seconds}`);
    }, 1000)
  );

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time')|| 0 );

