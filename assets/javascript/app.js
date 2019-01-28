var userInput = $("#searchText").val().trim();

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=eEA76kCOgvPo4ptrmjRG4e70iBRwN5TR&limit=10";

$("#addButton").on('click', function() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
          var imageUrl = response.data.image_original_url;
          var searchImage = $("<img>");
          searchImage.attr("src", imageUrl);
          searchImage.attr("alt", "search image");
          $("#images").prepend(searchImage);
          console.log(userInput);
    });
})