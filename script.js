var tumbleweed = document.createElement('img');
tumbleweed.src = 'https://toppng.com/uploads/preview/tumbleweed-png-tumbleweed-vector-11562851710dk3sfjdg07.png';
tumbleweed.style.position = 'absolute';
tumbleweed.style.left = '0px';
tumbleweed.style.top = '0px';
document.body.appendChild(tumbleweed);
var tumbleweedLeft = 0;
var tumbleweedTop = 0;
var tumbleweedDirection = 0;
function tumbleweedRoll() {
  tumbleweedLeft += Math.cos(tumbleweedDirection) * 10;
  tumbleweedTop += Math.sin(tumbleweedDirection) * 10;
  tumbleweed.style.left = tumbleweedLeft + 'px';
  tumbleweed.style.top = tumbleweedTop + 'px';
  tumbleweedDirection += (Math.random() - 0.5) * Math.PI / 8;
}
setInterval(tumbleweedRoll, 50);