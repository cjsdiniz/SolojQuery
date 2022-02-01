$(function(){
    //let val = $("a").attr("href");
    //alert(val)
    $("#text").html("Hello!")
    $("#name").val("My Name")
    $("p").append("A paragraph")
    $("p").before("<p>Welcome</p>")
    $("p:last").after("<p>See you!</p>")
    $("body").append("<div>New text</div>")
    $("div:last").addClass("diva")
    $(".diva").text("Hi!")
});
