$(document).ready(function() {

    $('').on('click', function() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&"+
    "api-key=J6xTRbHXv6zT3uu4tkhQYY8lm4npRUGL";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
        console.log(response);
    })

    });


});