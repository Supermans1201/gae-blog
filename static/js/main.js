//Main Page
$(document).ready(function (){
  var text = $('.page').text();

  if(text=='home'){
    $('.nav-collapse > .nav').children().first().addClass('active');
  }else if (text=='about'){
    $('.nav-collapse > .nav li:nth-child(2)').addClass('active');
  }else if(text=='contact'){
    $('.nav-collapse > .nav li:nth-child(3)').addClass('active');
}});

//Back button for Blog Post Preview Page
$(document).ready(function(){
    $('#preview-back').on('click', function(){
        parent.history.back();
        return false;
    });
});