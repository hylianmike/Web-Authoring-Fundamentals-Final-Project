// function that loads the header.html document on any section with the id of "global_header"
$(function(){
  $("#global_header").load("header.html");
});
// function that loads the footer.html document on any section with the id of "global_footer"
$(function(){
  $("#global_footer").load("footer.html");
});
// function that runs when the document is ready
$(document).ready(function(){
  // css statements that create a border that resembles a GameBoy screen on the mastheads
  $('.masthead, .mastheadproduct, .company div').css('border', 'solid 6px #6d5f70');
  $('.masthead, .mastheadproduct, .company div').css('border-radius', '15px');
  $('.masthead, .mastheadproduct, .company div').css('border-bottom-right-radius', '45px');
  $('.masthead, .mastheadproduct, .company div').css('box-shadow', '0px 0px 20px #ffffff');
  // css statements that create a border that resembles a GameBoy screen on the images on the index page
  $('.content div img').css('border', 'solid 4px #6d5f70');
  $('.content div img').css('border-radius', '25px');
  $('.content div img').css('border-bottom-right-radius', '65px');
  $('.content div img').css('box-shadow', '0px 0px 10px #ffffff');
  // css statements that create a border that resembles a GameBoy screen on the images on the product page and about page
  $('.game div img, .pres section img, .devs section img').css('border', 'solid 6px #6d5f70');
  $('.game div img, .pres section img, .devs section img').css('border-radius', '15px');
  $('.game div img, .pres section img, .devs section img').css('border-bottom-right-radius', '45px');
  $('.game div img, .pres section img, .devs section img').css('box-shadow', '0px 0px 20px #ffffff');
});
