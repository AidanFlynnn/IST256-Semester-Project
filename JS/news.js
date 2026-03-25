
$(document).ready(function() {

    fetch(fetch("../JSON/articleInfo.json")) 
    .then(res => res.json())
    .then(data => {

        const articles = data.articles;

        const contentMap = {
            "100": { title: "Local Crime Rising", image: "/images/news1.jpg", desc: "Crime increasing in neighborhoods." },
            "110": { title: "Town Festival", image: "/images/news2.jpg", desc: "Annual event this weekend." },
            "120": { title: "New Restaurant", image: "/images/news3.jpg", desc: "New food spot downtown." },

            "200": { title: "Team Wins Championship", image: "/images/sports1.jpg", desc: "Huge victory last night." },
            "210": { title: "Star Injured", image: "/images/sports2.jpg", desc: "Season impact expected." },
            "220": { title: "Trade Rumors", image: "/images/sports3.jpg", desc: "Major moves coming." },

            "300": { title: "Election Results", image: "/images/pol1.jpg", desc: "Big political shift." },
            "310": { title: "New Policy", image: "/images/pol2.jpg", desc: "Government update." },
            "320": { title: "Debate Drama", image: "/images/pol3.jpg", desc: "Leaders clash publicly." }
        };

        // MAIN HEADLINE
        if ($("#mainTitle").length) {
            let main = contentMap[articles[0].id];

            $("#mainTitle").text(main.title);
            $("#mainImage").attr("src", main.image);
            $("#mainDesc").text(main.desc);
        }

        // SIDE STORIES
        if ($("#leftStories").length && $("#rightStories").length) {

            for (let i = 1; i < 3; i++) {
                let a = contentMap[articles[i].id];
                $("#leftStories").append(`<div class="side-story"><p>${a.title}</p></div>`);
            }

            for (let i = 3; i < 5; i++) {
                let a = contentMap[articles[i].id];
                $("#rightStories").append(`<div class="side-story"><p>${a.title}</p></div>`);
            }
        }

        // FILL YOUR EXISTING CARDS
        let cards = $(".container-md.border");

        cards.each(function(index) {

            let article = articles[index];
            let mapped = contentMap[article.id];

            if (!mapped) return;

            $(this).find("img").attr("src", mapped.image);
            $(this).find("h3").text(mapped.title);
            $(this).find("h4").text(article.author);
            $(this).find("h5").text(article.dateModified);
            $(this).find("p").text(mapped.desc);

        });

    })
    .catch(error => {
        console.log("JSON LOAD ERROR:", error);
    });

});


// =====================
// YOUR ORIGINAL CODE (UNCHANGED BELOW)
// =====================

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

$("#200").on("click", function() {
    $("#200").attr("disabled", true);
    $("#200").html("Like: 1");
    $("#201").attr("disabled", true);
})

$("#201").on("click", function() {
    $("#200").attr("disabled", true);
    $("#201").attr("disabled", true);
    $("#201").html("Dislike: 1");
})

$("#210").on("click", function() {
    $("#210").attr("disabled", true);
    $("#210").html("Like: 1");
    $("#211").attr("disabled", true);
})

$("#211").on("click", function() {
    $("#210").attr("disabled", true);
    $("#211").attr("disabled", true);
    $("#211").html("Dislike: 1");
})

$("#220").on("click", function() {
    $("#220").attr("disabled", true);
    $("#220").html("Like: 1");
    $("#221").attr("disabled", true);
})

$("#221").on("click", function() {
    $("#220").attr("disabled", true);
    $("#221").attr("disabled", true);
    $("#221").html("Dislike: 1");
})

$("#300").on("click", function() {
    $("#300").attr("disabled", true);
    $("#300").html("Like: 1");
    $("#301").attr("disabled", true);
})

$("#301").on("click", function() {
    $("#300").attr("disabled", true);
    $("#301").attr("disabled", true);
    $("#301").html("Dislike: 1");
})

$("#310").on("click", function() {
    $("#310").attr("disabled", true);
    $("#310").html("Like: 1");
    $("#311").attr("disabled", true);
})

$("#311").on("click", function() {
    $("#310").attr("disabled", true);
    $("#311").attr("disabled", true);
    $("#311").html("Dislike: 1");
})

$("#320").on("click", function() {
    $("#320").attr("disabled", true);
    $("#320").html("Like: 1");
    $("#321").attr("disabled", true);
})

$("#321").on("click", function() {
    $("#320").attr("disabled", true);
    $("#321").attr("disabled", true);
    $("#321").html("Dislike: 1");
})

// (rest of your cart + checkout code stays EXACTLY the same)
