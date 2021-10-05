$(document).ready(function(){
    
    let form =$("form");
    form.submit(function(event){
        var apiKey = "cW5bcdpWLRn2vum2ftb6FuUrnXiH4d5K"
         event.preventDefault();
     
        var  searchTerm = $("#searchBox").val();
        $("#searchBox").val("")
        console.log(searchTerm)
        $.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=1`)
        .then(function(data){
            console.log(  data.data[0]);
            var imageSrc = data.data[0].images.original.url;
            
            var imageElement = $("<img>",{
                "src" : imageSrc,
                "alt":"my bad image not displaying sorry!",
                class: "col-md-4 col-12 mb-4 imageDiv"
            })
           
            var targetDiv = $("#targetDiv");
            targetDiv.append(imageElement);
        })
        
        })
        // function messi(){
        //     console.log("in the function will it work")
        // }
})


// giphy api key 
// 
// cW5bcdpWLRn2vum2ftb6FuUrnXiH4d5K
// " http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC"