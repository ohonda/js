function getRandom( min, max) {
  var randCount = Math.floor( Math.random() * Math.random() * (max + 1 - min) ) + min ;
  return randCount;
}
setInterval(function(){
    $('.count').text(getRandom(10,500));
}, 400);