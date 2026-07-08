$(document).ready(function() {
    $(".menu .dep1 > li > a").click(function(event) {
        event.preventDefault();
        $(".menu .dep1 > li > a").removeClass("active");
        $(this).addClass("active"); 
    });
});
