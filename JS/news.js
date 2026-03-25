
$("#100").on("click", function() {
    $("#100").attr("disabled", true);
    $("#100").html("Like: 1");
    $("#101").attr("disabled", true);
})

$("#101").on("click", function() {
    $("#100").attr("disabled", true);
    $("#101").attr("disabled", true);
    $("#101").html("Dislike: 1");
})

$("#110").on("click", function() {
    $("#110").attr("disabled", true);
    $("#110").html("Like: 1");
    $("#111").attr("disabled", true);
})

$("#111").on("click", function() {
    $("#110").attr("disabled", true);
    $("#111").attr("disabled", true);
    $("#111").html("Dislike: 1");
})

$("#120").on("click", function() {
    $("#120").attr("disabled", true);
    $("#120").html("Like: 1");
    $("#121").attr("disabled", true);
})

$("#121").on("click", function() {
    $("#120").attr("disabled", true);
    $("#121").attr("disabled", true);
    $("#121").html("Dislike: 1");
})

// (rest of your file stays EXACTLY the same — no changes)
