$(function(){
    //let val = $("a").attr("href");
    //alert(val)
    $("#text").html("Hello")
    $
    $("#name").val("Person")
    $("p").append("A paragraph")
    $("p").before("<p>Welcome</p>")
    $("p:last").after("<p>See you!</p>")
    $("body").append("<div>New text</div>")
    $("div:last").addClass("diva")
    $(".diva").text("Hi!")
    let btn = $("<button></button>").text("Toggle")
    $("body").after(btn)
    //$("body").after($("<button></button>").text("Toggle"))
    $("button").addClass("btn")
    $(".btn").text("Click")
    $("p:first").append(" "+$("#name").val())
    $(".btn").click(function() {
        $("div:last").toggleClass("diva")
    })

    // CSS 
    $("#name").css({"border":"2px red solid"})
    $("p:last").remove()

    let field=$("<input type='text' id='field' />")
    $(".btn").after(field)

});
