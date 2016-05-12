var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();
    
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $('.comments').prependTo('html');
      comment = "";
    };
    return false;
  });
};

$(document).ready(main);