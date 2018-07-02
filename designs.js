function makeGrid() {
    //getting size of the grid
    var rows = $("#input_height").val();
    var cols = $("#input_width").val();
    //getting table and removing pervious grid
    var table = $("#pixel_canvas");
    if(table.children().length){
        table.children().remove();
    }
    //creating grid
    for(var x=0;x<cols;x++){
        table.append("<tr></tr>");
    
        for (var j = 0; j < cols; j++) {
            table.children().last().append("<td></td>");
        }
    }
    //event listener for changing colors
   table.on("click","td",function(){
       var color = $("#colorPicker").val();
       $(this).attr("bgcolor", color);
    });

}
//calling makeGrid on submiting input
$("input[type='submit']").click(function(e) {
  e.preventDefault(); 
  makeGrid();
});