var topics = ["Jack Nicholson", "Rachael McAdams", "Ryan Gosling"];

var input = null;
var userInput = topics[(topics.length - 1)];

var pushButton = function () {
    for (var i = 0; i < topics.length; i++) {
        var newButton = '<div class="btn btn-info" id="button-' + i + '">';
    
        $("#images").append(newButton);
    };
};

var inputCheck = function () {
    if (topics.includes(userInput)) {
        alert("That's already listed!");
    } if (userInput === "") {
        alert("Please enter a search term.");
    } else if ((topics.includes(userInput) === false) && (userInput !== "")) {
        topics.push(userInput);
    }
};

$("#addButton").on("click", function () {

    var userInput = this.id;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=eEA76kCOgvPo4ptrmjRG4e70iBRwN5TR&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        var data = response.data;

        for (var i = 0; i < data.length; i++) {
            if (data[i].rating !== "r") {
                var gifHolder = $("<div class='item'>");
                var rating = data[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var image = $("<img>");
                image.attr({
                    "class": "gif",
                    "id": i,
                    "src": data[i].images.fixed_height_small_still.url,
                    "move-src": data[i].images.fixed_height_small.url,
                    "static-src": data[i].images.fixed_height_small_still.url,
                    "data-state": "still",
                });
                gifHolder.html("");
                gifHolder.append(image);
                gifHolder.append(p);
                $("#images").prepend(gifHolder);
            }
        }

    });    //end of 'then' section

});

$("#addButton").on("click", function (event) {
    event.preventDefault();
    userInput = $("input").val();
    inputCheck();
    $("#images").text("");
    pushButton();
});