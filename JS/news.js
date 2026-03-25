$(document).ready(function() {

    fetch("JSON/articleInfo.json")
    .then(res => res.json())
    .then(data => {

        const articles = data.articles;

        const contentMap = {
            "100": { title: "Local Crime Rising", image: "images/news1.jpg", desc: "Crime increasing in neighborhoods." },
            "110": { title: "Town Festival", image: "images/news2.jpg", desc: "Annual event this weekend." },
            "120": { title: "New Restaurant", image: "images/news3.jpg", desc: "New food spot downtown." },

            "200": { title: "Team Wins Championship", image: "images/sports1.jpg", desc: "Huge victory last night." },
            "210": { title: "Star Injured", image: "images/sports2.jpg", desc: "Season impact expected." },
            "220": { title: "Trade Rumors", image: "images/sports3.jpg", desc: "Major moves coming." },

            "300": { title: "Election Results", image: "images/pol1.jpg", desc: "Big political shift." },
            "310": { title: "New Policy", image: "images/pol2.jpg", desc: "Government update." },
            "320": { title: "Debate Drama", image: "images/pol3.jpg", desc: "Leaders clash publicly." }
        };

        let main = contentMap[articles[0].id];
        $("#mainTitle").text(main.title);
        $("#mainImage").attr("src", main.image);
        $("#mainDesc").text(main.desc);


        for (let i = 1; i < 3; i++) {
            let a = contentMap[articles[i].id];
            $("#leftStories").append(`<p><strong>${a.title}</strong></p>`);
        }

        for (let i = 3; i < 5; i++) {
            let a = contentMap[articles[i].id];
            $("#rightStories").append(`<p><strong>${a.title}</strong></p>`);
        }

        articles.forEach((article) => {

            let mapped = contentMap[article.id];
            if (!mapped) return;

            $("#articleGrid").append(`
                <div class="article-card">
                    <img src="${mapped.image}">
                    <h3>${mapped.title}</h3>
                    <h5>${article.author}</h5>
                    <p>${mapped.desc}</p>
                </div>
            `);

        });

    });

});
