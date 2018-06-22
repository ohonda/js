 var path = "path=/";
 var domain = 'domain=.hogehoge.com';

  function setCookie(key, value){
      document.cookie = key + '=' + value + '; '+ domain +'; '+ path;
  }

  function getCookie(key){
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++){
      var elem = cookies[i].split('=');
      if(elem[0] == key){
        return elem[1];
      }
    }
  }

  function delCookie(key){
    var date1 = new Date();
    date1.setTime(0);
    document.cookie = key + "=; "  + domain + '; ' + path + '; ' + 'expires='+date1.toGMTString();
  }
