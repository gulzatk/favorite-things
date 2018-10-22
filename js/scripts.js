$(document).ready(function() {
  $(".favoriteThings").submit(function(event) {
  event.preventDefault();

  var favoriteFood = $("input#favoriteFood").val();
  var favoriteSport = $("input#favoriteSport").val();
  var favoriteDrink = $("input#favoriteDrink").val();

  var favoriteThings = [favoriteFood, favoriteSport, favoriteDrink]
  var newArray = []
  newArray.push(favoriteThings[1]);
  newArray.push(favoriteThings[0]);
  newArray.push(favoriteThings[2]);

  $("#list").append("<li>" + newArray[0]+"</li>");
  $("#list").append("<li>"+newArray[1]+"</li>");
  $("#list").append("<li>"+newArray[2]+"</li>");


});

});
