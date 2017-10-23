$(function(){
  $("form#fav-form").submit(function(event){
    event.preventDefault();
    var color = $("input#fav-color").val();
    var food = $("input#fav-food").val();
    var animal = $("input#fav-animal").val();

    var array = [color, food, animal];
    var arrayTwo = [];
    arrayTwo.push(array[1], array[0], array[2]);
    console.log(arrayTwo);
  });
});
