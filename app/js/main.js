(function(window, $, Modernizr, undefined) {
  "use strict";

  //
  // data-bgvideo
  //
  // Detects autoplay and adds video

  var $bgvideos = $('[data-bgvideo]');

  if ( Modernizr.video && Modernizr.audio && $bgvideos.length ) {
    var mp3   = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
    var ogg   = 'data:audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=';
    var audio = new Audio();
    var src   = audio.canPlayType('audio/ogg') ? ogg : mp3;
    audio.autoplay = true;
    audio.volume   = 0;
    audio.addEventListener('play', function() {
      $bgvideos.each( function(){

        var $el = $(this);
        var videoFile = $el.data().bgvideo.replace(/\.[a-zA-Z0-9]+$/,"");

        var obj = document.createElement('video');
        $(obj).attr('class', 'video');
        $(obj).attr('data-bg-ratio', '1.778');
        $(obj).attr('autoplay', ' ');
        $(obj).attr('loop', ' ');
        $(obj).attr('muted', 'muted');
        $(obj).attr('autoplay', ' ');
        $(obj).attr('volume', '0');
        $(obj).attr('preload', 'auto');

        var source = document.createElement('source');
        $(source).attr('type', 'video/mp4');
        $(source).attr('src', videoFile + '.mp4');

        $el.append(obj);
        $(obj).append(source);

        checkRatios();
      });
    }, false);
    audio.src = src;
  }

  // fire picturefill
  picturefill();

  //
  // data-bg-ratio
  //
  // maintains an aspect ratio

  var checkRatios = function() {
    $('[data-bg-ratio]').each(function(){
      var $this    = $(this);
      var ratio    = parseFloat($this.data().bgRatio);
      var $context = $this.parents('[data-bg-context]');

      if ( !$context.length ) {
        $context = $this.parent();
      }

      function resizeBg() {
        if ( ($context.width() / $context.height()) < ratio ) {
          $this.css({
            width  : 'auto',
            height : '101%'
          })
        } else {
          $this.css({
            width  : '101%',
            height : 'auto'
          })
        }
      }

      $(window).resize(resizeBg).trigger("resize");
    });
  };

  checkRatios();

  //
  // data-scrollto
  //
  // animates scrolling to an element

  $('[data-scrollto]').on('click', function(e) {
    var $this   = $(this);
    var target  = $this.data().scrollto;
    var $target = $( target && target !== "" ? target : $this.attr("href") );
    var offset  = target && target !== "" ? $target.offset().top : $target.offset().top - parseInt($target.css("margin-top"));

    if ( $target.length ) {
      $('html, body').animate({
        scrollTop: offset
      }, 300);
    }
    else {
      window.location = $this.attr("href");
    }

    $this.blur();

    e.preventDefault();
  });

  //
  // data-anthro
  //
  // dynamic sentence making

  $('[data-anthro]').each(function(){
    var $this = $(this);
    var type  = $this.data().anthro;
    var now   = moment();

    if ( type === 'howisday' )  {
      $this.html("Hope you're having a nice "+ now.format('dddd') +".");
    }
  });

  // console ascii art

  if ( console && console.log ) {
    console.log(""+
      "                                                       \n"+
      "             _                               _         \n"+
      "  _ __   ___| |_ ___  ___ ___  _ __ _ __ ___(_) __ _   \n"+
      " | '_ \\ / _ \\ __/ _ \\/ __/ _ \\| '__| '__/ _ \\ |/ _` |  \n"+
      " | |_) |  __/ ||  __/ (_| (_) | |  | | |  __/ | (_| |  \n"+
      " | .__/ \\___|\\__\\___|\\___\\___/|_|  |_|  \\___|_|\\__,_|  \n"+
      " |_|                                                   \n"+
      "                                                       \n"+
      " Interested in the code?                               \n"+
      " Visit https://github.com/petecorreia/petecorreia.com  \n"+
      "                                                       "+
    "");
  }

})(this, this.jQuery, this.Modernizr);