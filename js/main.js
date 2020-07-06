// 網頁的主程式寫在這裡
$(document).ready(function(){


    new WOW().init();

    $('.navbar .nav-link, #goBackBtn').click(function(){

      const targrt = $(this).attr('href');
      console.log(targrt);

      const position = $(target).offset().top;
      console.log(position);

      const navbarHeight = 56;
      $('html,body').stop().animate({
       scrollTop: position - navbarHeight

      }, 500)


  
    })
});

