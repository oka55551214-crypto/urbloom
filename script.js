$(function() {
    $('#hamburger, .header-header-gnav-btn').on('click', function() {
        // メニューの開閉
        $('.sp-menu').toggleClass('is-open');
        
        $('.header-header-gnav-btn').toggleClass('is-active');
        
        $('.header').toggleClass('is-open');
        
        $('body').toggleClass('menu-open');
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    $('.sp-menu-item a, .sp-contact-btn-box').on('click', function() {
        $('.sp-menu').removeClass('is-open');
        $('.header-header-gnav-btn').removeClass('is-active');
        $('.header').removeClass('is-open');
        $('body').removeClass('menu-open');
    });

    // メニュー外をクリックしたら閉じる
    $('.sp-menu').on('click', function(e) {
        if ($(e.target).is('.sp-menu')) {
            $('.sp-menu').removeClass('is-open');
            $('.header-header-gnav-btn').removeClass('is-active');
            $('.header').removeClass('is-open');
            $('body').removeClass('menu-open');
        }
    });
});


//スライダー//

$('.slider').slick({
    autoplay: true,
    fade: true,
    dots: false, 
    cssEase: 'linear',
    speed: 2000, 
    autoplaySpeed: 3000,
    arrows: true,
    dots: true
  });



//フェードイン用//

$(function() {

    // フェードイン処理
    function fadeInOnScroll() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('is-visible');
            }
        });
    }

    fadeInOnScroll();

    $(window).on('scroll', function() {
        fadeInOnScroll();
    });
});


  //アコーディオン//
  
$(function () {

  $('.faq-item').removeClass('is-open').find('.m-answer').hide();

    $('.faq-item').first().addClass('is-open').find('.m-answer').show();

  // クリックイベント
  $(document).on('click', '.m-question', function () {
    var $item = $(this).closest('.faq-item');
    var $answer = $item.find('.m-answer');

    if ($item.hasClass('is-open')) {
      $item.removeClass('is-open');
      $answer.slideUp(300);
    } else {
      $item.addClass('is-open');
      $answer.slideDown(300);
    }
  });

});

 
