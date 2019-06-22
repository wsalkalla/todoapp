// Check off specific todos by clicking 
$("ul").on("click", "li" , function(){
   // a way to return it back by using a class and the toggle properity
   $(this).toggleClass("completed");
});
// click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
 // add event listener to the input field
 $("input[type='text']").keypress(function(event){
     if(event.which ===13){
         // grapping new todo into a vabaible
         var newToDoText= $(this).val();
         $(this).val("");
         // create a new li and add it to the Ul
         $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDoText + "</li>")
     }
 });

 $(".fa-plus").click(function(){
     $("input[type='text']").fadeToggle();
 });