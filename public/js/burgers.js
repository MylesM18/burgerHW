$(document).ready(function() {


$("#entered").on("click", function(){
    // e.preventDefault()
    let burger_name = $("#burgerInput").val().trim();
      console.log('clicked!')
     save({burger_name});
           
});

$('.devour').on('click', function(){
  $.ajax({
    method: "PUT",
    url: "/api/burgers/"+$(this).data('id')
  }).then(data=> window.location.reload())
});

$('.delete').on('click', function(){
  $.ajax({
    method: "DELETE",
    url: "/api/burgers/"+$(this).data('id')
  }).then(data=> window.location.reload())
});

function save(data) {
    $.ajax({
      method: "POST",
      url: "/api/burgers",
      data,
    }).then((res) => window.location.reload());
  };

  

});