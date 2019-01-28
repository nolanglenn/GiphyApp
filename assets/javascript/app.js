var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=eEA76kCOgvPo4ptrmjRG4e70iBRwN5TR&tag=cats";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
      var imageUrl = response.data.image_original_url;
      var searchImage = $("<img>");
      searchImage.attr("src", imageUrl);
      searchImage.attr("alt", "search image");
      $("#images").prepend(searchImage);
});