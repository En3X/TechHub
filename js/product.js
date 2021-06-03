$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var laptopColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + laptopColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
