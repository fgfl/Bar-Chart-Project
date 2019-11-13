

function testPageFns($) {
    $( "a" ).click(function( event ) {
        event.preventDefault();
        $(this).hide("slow");
    });


    $("#addButton").click(function( event) {
      $("a").addClass("test")
      $("a").show();
    })

    $("#removeButton").click(function( event) {
      $("a").removeClass("test")
    })
};
