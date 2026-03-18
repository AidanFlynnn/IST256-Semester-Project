// Here for legacy documentation, originally we were going to try to port over the members.js to news.js to handle the JSON file handling.
// Instead this file is going to be used for the simulated JavaScript
// We were told that what he had for members.js was sufficient and that for this portion of the assignment we just needed to demonstrate the we knew the format of a JSON file (see articleInfo.json).
// Simulated code at the bottom of the script.

// document.addEventListener("DOMContentLoaded", function() {
//     const table = document.getElementById("memberTable");
//     const members = JSON.parse(localStorage.getItem("members")) || [];

//     table.innerHTML = "";

//     members.forEach(member => {
//         const row = `
//             <tr>
//                 <td>${member.email}</td>
//                 <td>${member.name}</td>
//                 <td>${member.phoneNumber}</td>
//                 <td>${member.age}</td>
//                 <td>${member.address}</td>
//                 <td>${member.password}</td>
//             </tr>
//         `;

//         table.innerHTML += row;

//     });
// });

// function updateJSON() {
//     let members = JSON.parse(localStorage.getItem("members")) || [];
//     for (let i = 0; i < members.length; i++) {
//         let email = "redacted@anonymous.email";
//         let name = "Anonymous";
//         let phoneNumber = "000-000-0000";
//         let password = "RedactedPassword";
//         let address = "123 Redacted Ln";
//         let age = "1/1/1970";

//         let members = JSON.parse(localStorage.getItem("members")) || [];
//         delete members[i];
//         members[i] = {email, name, phoneNumber, age, address, password};
//         localStorage.removeItem("members");
//         localStorage.setItem("members", JSON.stringify(members));
//     }

//     members = JSON.parse(localStorage.getItem("members")) || [];

//     const table = document.getElementById("memberTable");
//     table.innerHTML = "";

//     members.forEach(member => {
//         const row = `
//             <tr>
//                 <td>${member.email}</td>
//                 <td>${member.name}</td>
//                 <td>${member.phoneNumber}</td>
//                 <td>${member.age}</td>
//                 <td>${member.address}</td>
//                 <td>${member.password}</td>
//             </tr>
//         `;

//         table.innerHTML += row;

//     });
// }

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

let articleIDCart = [];
let articleCostCart = [];

$("#102").on("click", function() {
    $("#102").attr("disabled", true);
    articleIDCart.unshift($("#102").attr('id'));
    articleCostCart.unshift($("#102").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#112").on("click", function() {
    $("#112").attr("disabled", true);
    articleIDCart.unshift($("#112").attr('id'));
    articleCostCart.unshift($("#112").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#122").on("click", function() {
    $("#122").attr("disabled", true);
    articleIDCart.unshift($("#122").attr('id'));
    articleCostCart.unshift($("#122").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#202").on("click", function() {
    $("#202").attr("disabled", true);
    articleIDCart.unshift($("#202").attr('id'));
    articleCostCart.unshift($("#202").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#212").on("click", function() {
    $("#212").attr("disabled", true);
    articleIDCart.unshift($("#212").attr('id'));
    articleCostCart.unshift($("#212").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#222").on("click", function() {
    $("#222").attr("disabled", true);
    articleIDCart.unshift($("#222").attr('id'));
    articleCostCart.unshift($("#222").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#302").on("click", function() {
    $("#302").attr("disabled", true);
    articleIDCart.unshift($("#302").attr('id'));
    articleCostCart.unshift($("#302").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#312").on("click", function() {
    $("#312").attr("disabled", true);
    articleIDCart.unshift($("#312").attr('id'));
    articleCostCart.unshift($("#312").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$("#322").on("click", function() {
    $("#322").attr("disabled", true);
    articleIDCart.unshift($("#322").attr('id'));
    articleCostCart.unshift($("#322").val());
    $("#checkoutContainer").attr("hidden", false);
    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    $("#checkoutList").html(htmlString);
    getCost();
})

$(document).on("click", ".buttonPress", function() {
    let id = $(this).val();

    let indexFound;
    for (let i = 0; i < articleIDCart.length; i++) {
        if (articleIDCart[i] == this.id) {
            indexFound = i;
        }
    }
    articleIDCart.splice(indexFound, 1);
    articleCostCart.splice(indexFound, 1)

    let htmlString = "";
    for (let i = 0; i < articleIDCart.length; i++) {
        let buttonID = `${articleIDCart[i]}btn`;
        let button = `<button value=${articleIDCart[i]} id=${buttonID} class="buttonPress">Remove from Cart</button>`;
        htmlString = htmlString + `Article ID: ${articleIDCart[i]}, Price: \$${articleCostCart[i]} ${button}<br>`;
    }
    if (articleIDCart.length == 0) {
        $("#checkoutContainer").attr("hidden", true);
    }

    $(`#${id}`).attr("disabled", false);

    $("#checkoutList").html(htmlString);

    getCost();
})

function getCost() {
    let cost = 0.0;
    for (let i = 0; i < articleCostCart.length; i++) {
        cost = cost + Number.parseInt(articleCostCart[i]);
    }
    $("#cost").text(`Cost: \$${cost}`)
}