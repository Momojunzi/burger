$(function() {
  $(".change-devoured").on("click", function(event){
    event.preventDefault();
    var id = $(this).data('id');
    var devoured = $(this).data("devoured");
    console.log(devoured);
    if(devoured === 0){
      devoured = 1;
    }
    var newDevourState = {
      devoured: devoured
    };
    console.log(devoured);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function(){
      console.log("changed devoured to ", newDevourState.devoured);
      location.reload();
    });
  });
  $("#addButton").on("click", function(event){
    event.preventDefault();
    var newBurger ={
      burger_name: $("#burgerInput").val().trim(),
      devoured: 0
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(){
      console.log("new burger added");
      location.reload();
    });
  });
});
