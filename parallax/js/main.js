function initparticles() {
   confetti();
}

function confetti() {
   $.each($(".particletext.confetti"), function(){
      var confetticount = ($(this).width()/50)*10;
      for(var i = 0; i <= confetticount; i++) {if (window.CP.shouldStopExecution(4)){break;}
         $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,150) + '%; left:' + $.rnd(0,4) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(6,8) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
  }
window.CP.exitedLoop(4);
   });
}
