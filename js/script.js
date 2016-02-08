$(document).ready(function() {
 $("#readFile").click(function() {
    $.get('txt/generalization.txt', function(data) {
      $("#container").html(data);
    }, 'text');
 });
});