// Done by Danny
$(function() {

  $('.get-gif').on('click', function() { //recognize click event
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg') //ajax gets resource as json object-asynchronous request
      .done(function(giphyResponse) { //done callback
        console.log(giphyResponse.data.image_url);
        $('.image-jumbotron').attr('src', giphyResponse.data.image_url); //adds image attribute to DOM
      })
      .fail(function (data) { //fail callback
        console.log(data.data.errorMessage);
      });
    })
  
})

// Done by Hassan
$('.save-gif').on('click', function() {
  var gifUrl = $('.image-jumbotron').attr('src');
  console.log(gifUrl);
  var creationDate = new Date();
  var updatedDate = new Date();
  var newGif = {
    url: gifUrl,
    created_at: creationDate,
    updated_at: updatedDate
  }
  newGif;
});