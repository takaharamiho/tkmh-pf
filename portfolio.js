$(function() {

  $(window).scroll(function() {
          var startY = document.querySelector('.about-container').getBoundingClientRect().top; //表示させたい対象
          var windowHeight = window.innerHeight; // ブラウザの高さ
          var offset = (windowHeight / 3) * 2; //オフセット 画面の2/3
        // 表示
        if (startY < offset) {
          $('.about-container').removeClass('nainai');
          $('.about-container').addClass('animate__slideInLeft');
          // ブラウザの外になったら消す
        }
      //   else if (startY > windowHeight) {
      //     document.querySelector('.about-container').removeClass('animate__animated animate__slideInLeft')
      //   }
      },
  );

  $(window).scroll(function() {
          var startY = document.querySelector('.skills-container').getBoundingClientRect().top; //表示させたい対象
          var windowHeight = window.innerHeight; // ブラウザの高さ
          var offset = (windowHeight / 3) * 2; //オフセット 画面の2/3
      // 表示
        if (startY < offset) {
          $('.skills-container').removeClass('nainai');
          $('.skills-container').addClass('animate__slideInRight');
          // ブラウザの外になったら消す
        }
  //   else if (startY > windowHeight) {
  //     document.querySelector('.about-container').removeClass('animate__animated animate__slideInLeft')
  //   }
      },
  );

  // fabクラスをもってる者はhoverで揺れる刑に処す
  $('a.fab').hover(
    function() {
      $(this).addClass('animate__swing');
    },
    function() {
      $(this).removeClass('animate__swing');
    }
  );

  // ハンバーガーメニューをどうにかする。
  $('.humberger').click(function() {
    $('.humberger').addClass('nainai-ver2');
    $('.h-r-menu').removeClass('nainai-ver2').hide().slideDown('slow');
    $('.batu').removeClass('nainai-ver2');
  });

  $('.batu').click(function() {
    $('.batu').addClass('nainai-ver2');
    $('.h-r-menu').slideUp('slow');
    $('.humberger').removeClass('nainai-ver2');
  });



    
    
});
