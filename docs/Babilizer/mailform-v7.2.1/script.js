$(function(){

  //humburger menu//
  $(".p-navBtn").on("click", function(){
       if($(this).hasClass("js-open")) {
           $(".c-navBtn").removeClass("js-open");
           $(".p-navBtn").removeClass("js-open");
           $(".p-navSlide").removeClass("js-open");
       } else {
           // メニューを開いたら次回クリック時は閉じた状態になるよう設定
           $(".c-navBtn").addClass("js-open");
           $(".p-navBtn").addClass("js-open");
           $(".p-navBtnSlide").addClass("js-open");
           $(".p-navSlide").addClass("js-open");
       }
   });

   $(".p-navBtnSlide").on("click", function(){
        if($(this).hasClass("js-open")) {
            $(".c-navBtn").removeClass("js-open");
            $(".p-navBtn").removeClass("js-open");
            $(".p-navSlide").removeClass("js-open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(".c-navBtn").addClass("js-open");
            $(".p-navBtn").addClass("js-open");
            $(".p-navSlide").addClass("js-open");
        }
    });

//menu bgcolor control//
   $(window).scroll(function(){
     var about =$('.js-section--about').offset().top;
  if($(this).scrollTop()<about){
    $(".p-headerWrapper").removeClass("js-bgBlack");
  }else {
    $(".p-headerWrapper").addClass("js-bgBlack");
  }
});

//menu scroll//
  $('.js-siteLogo').click(function(){
  var about =$('.js-section--top').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-navSlide").removeClass("js-open");
  return false;
  });
  $('.js-menu--about').click(function(){
  var about =$('.js-section--about').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-navSlide").removeClass("js-open");
  return false;
  });
  $('.js-menu--services').click(function(){
  var about =$('.js-section--services').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-navSlide").removeClass("js-open");
  return false;
  });
  $('.js-menu--works').click(function(){
  var about =$('.js-section--works').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-navSlide").removeClass("js-open");
  return false;
  });
  $('.js-menu--contact').click(function(){
  var about =$('.js-section--contact').offset().top;
  $('html, body').animate({scrollTop:about}, 'slow');
  $(".c-navBtn").removeClass("js-open");
  $(".p-navBtn").removeClass("js-open");
  $(".p-navSlide").removeClass("js-open");
  return false;
  });

// headerのプルダウンメニュー//
  $('.p-wrapper--titlePage').click(function() {
  var $content = $(this).find('.p-wrapper--titleContent');
  if($content.hasClass('open')) {
  $content.removeClass('open');
  // slideUpメソッドを用いて、$answerを隠してください
  $content.slideUp();
  $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
  // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
  } else {
  $content.addClass('open');
  // slideDownメソッドを用いて、$answerを表示してください
  $content.slideDown();
  $(this).find('span').html('<i class="fas fa-chevron-up"></i>');
  // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
  }
});

// footerのプルダウンメニュー//
  $('.p-footerWrapper__page').click(function() {
  var $answer = $(this).find('.p-footerWrapper__content');
  if($answer.hasClass('open')) {
  $answer.removeClass('open');
  // slideUpメソッドを用いて、$answerを隠してください
  $answer.slideUp();
  $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
  // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
  } else {
  $answer.addClass('open');
  // slideDownメソッドを用いて、$answerを表示してください
  $answer.slideDown();
  $(this).find('span').html('<i class="fas fa-chevron-up"></i>');
  // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
  }
});

//menu scroll//
  $('.js-content--companyProfile').click(function(){
    var companyProfile =$('.l-section--companyProfileSub').offset().top;
    $('html, body').animate({scrollTop:companyProfile}, 'slow');
    $('.p-wrapper--titleContent').removeClass("open");
    $('.p-wrapper--titleContent').slideUp()
    return false;
  });
  $('.js-content--companyPhilosophy').click(function(){
  var companyPhilosophy =$('.p-wrapper--companyPhilosophy').offset().top;
  $('html, body').animate({scrollTop:companyPhilosophy}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--companyOverview').click(function(){
  var companyOverview =$('.l-section--companyOverview').offset().top;
  $('html, body').animate({scrollTop:companyOverview}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--groupCompany').click(function(){
  var groupCompany =$('.l-section--groupCompany').offset().top;
  $('html, body').animate({scrollTop:groupCompany}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--companyHistory').click(function(){
  var companyHistory =$('.l-section--companyHistory').offset().top;
  $('html, body').animate({scrollTop:companyHistory}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--message').click(function(){
  var message =$('.l-section--message').offset().top;
  $('html, body').animate({scrollTop:message}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--specialist').click(function(){
  var specialist =$('.p-wrapper--specialist').offset().top;
  $('html, body').animate({scrollTop:specialist}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--generalist').click(function(){
  var generalist =$('.p-wrapper--generalist').offset().top;
  $('html, body').animate({scrollTop:generalist}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });
  $('.js-content--qAndA').click(function(){
  var qAndA =$('.p-wrapper--qAndA').offset().top;
  $('html, body').animate({scrollTop:qAndA}, 'slow');
  $('.p-wrapper--titleContent').removeClass("open");
  $('.p-wrapper--titleContent').slideUp()
  return false;
  });

  //scrolltop//
  $('.c-btn--scrollTop').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');

  });



});
