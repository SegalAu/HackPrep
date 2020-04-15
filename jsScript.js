
var deck_id;
var jsonresponse;
var count = 1;
function apiCall() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    request.send()
    request.onload = () => {
        deck_id = JSON.parse(request.response).deck_id;

        let draw = new XMLHttpRequest();
        draw.open("GET", "https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=2");
        draw.send()
        draw.onload = () => {
            console.log(draw.response);
            var image = JSON.parse(draw.response).cards[0].image;
            document.getElementById("123").src = image;
            document.getElementById("counter").innerHTML = count++;
        }
    }
}

// function drawCard() {
//     let request = new XMLHttpRequest();
//     request.open("GET", "https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=2");
//     request.send()
//     request.onload = () => {
//         console.log(request.response);
//     }
// }

console.log("hello");