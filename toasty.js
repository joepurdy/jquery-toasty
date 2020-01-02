/*
 * jQuery Toasty! Plugin 1.1
 * https://github.com/joepurdy/toasty.js
 * Copyright 2020, Joe Purdy
 * Inspired by ZURB's jQuery Raptorize Plugin 1.0 (http://www.ZURB.com/playground)
 * This is a redesigned version of their plugin in the style of Mortal Kombat's Toasty! easter egg
 * Free to use under the MIT license.
 * https://purdy.mit-license.org/
*/


(function($) {

    $.fn.toasty = function(options) {

        //Yo' defaults
        var defaults = {  
            enterOn: 'click', //timer, konami-code, click
            delayTime: 5000 //time before Dan attacks on timer mode
            };  
        
        //Extend those options
        var options = $.extend(defaults, options); 
  
        return this.each(function() {

      var _this = $(this);
      
      //Toasty Vars
      var toastyImageMarkup = '<img id="elDan" style="display: none" src="toasty.png" />'
      var toastyAudioMarkup = '<audio id="Toasty!" preload="auto"><source src="toasty.mp3" /><source src="toasty.ogg" /></audio>'; 
      var locked = false;
      
      //Append Toasty and Style
      $('body').append(toastyImageMarkup);
      $('body').append(toastyAudioMarkup);
      var DanForden = $('#elDan').css({
        "position":"fixed",
        "bottom": "0",
        "right" : "-700px",
        "display" : "block"
      })
      
      // Animating Code
      function init() {
      
        //Sound Hilarity
        document.getElementById('Toasty!').play();
                
        // Movement Hilarity  
        DanForden.animate({
	  "left" : "-=695px"
	}, "fast").delay(500).animate({
	  "left" : "+=695px"
	}, "slow");
      }
      
      //Determine Entrance
      if(options.enterOn == 'timer') {
        setTimeout(init, options.delayTime);
      } else if(options.enterOn == 'click') {
        _this.bind('click', function(e) {
          e.preventDefault();
          if(!locked) {
            init();
          }
        })
      } else if(options.enterOn == 'konami-code'){
          
          var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
          $(document).keydown(function(e) {
            kkeys.push( e.keyCode );
            if ( kkeys.toString().indexOf( konami ) >= 0 ){
              $(document).unbind('keydown',arguments.callee);
              init();         
            }
          });
  
      }
      
        });//each call
    }//orbit plugin call
})(jQuery);

