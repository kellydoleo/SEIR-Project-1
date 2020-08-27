

const $hoverEffect = (event) => {
    
    $(event.target).addClass("opaque")
//    if ($(event.target).class() != "opaque") {
//     $(event.target).toggleClass("opaque");
//    } else {
//     $(event.target).removeClass("opaque");
//    }
  
     


    
}

$(".hexagon").on("mouseover", $hoverEffect);


const listOfRihannaImages = [];
listOfRihannaImages[0] = new Image(); 
listOfRihannaImages[0].src = "rihanna_image_16.png";

listOfRihannaImages[1] = new Image(); 
listOfRihannaImages[1].src = "rihanna_image_17.png";

listOfRihannaImages[2] = new Image(); 
listOfRihannaImages[2].src = "rihanna_image_18.png";

listOfRihannaImages[3] = new Image(); 
listOfRihannaImages[3].src = "rihanna_image_19.png";

listOfRihannaImages[4] = new Image(); 
listOfRihannaImages[4].src = "rihanna_image_20.png";

listOfRihannaImages[5] = new Image(); 
listOfRihannaImages[5].src = "rihanna_image_21.png";

listOfRihannaImages[6] = new Image(); 
listOfRihannaImages[6].src = "rihanna_image_22.png";
listOfRihannaImages[7] = new Image(); 
listOfRihannaImages[7].src = "rihanna_image_23.png";
listOfRihannaImages[8] = new Image(); 
listOfRihannaImages[8].src = "rihanna_image_24.png";







const $slideEffect = (event) => {
    $("#fenty-face").detach();
    
    
    let $container = $("<div>").addClass("container");
    let $container2 = $("<div>").addClass("container");
    let $container3 = $("<div>").addClass("container");
    let $hexagon = $("<div>").addClass("hexagon");
    let $hexagon2 = $("<div>").addClass("hexagon");
    let $hexagon3 = $("<div>").addClass("hexagon");
    $container.append($hexagon);
    $container2.append($hexagon2);
    $container3.append($hexagon3);
    
     
    

        for (let i=0; i < listOfRihannaImages.length; i++) {
            if (i===0 || i ===1 || i===2) {
            $hexagon.append(listOfRihannaImages[i]);
            };
        };

        for (let i=0; i < listOfRihannaImages.length; i++) {
            if (i===3 || i ===4 || i===5)
            $hexagon2.append(listOfRihannaImages[i]);
            
        };

        for (let i=0; i < listOfRihannaImages.length; i++) {
            if (i===6 || i ===7 || i===8)
            $hexagon3.append(listOfRihannaImages[i]);
            
        };


        


        $("#last-container").after($container);
        $("#last-container").after($container2);
        $("#last-container").after($container3);

        $("img").addClass("rihanna-image");

        
        $(".rihanna-image").addClass("opaque");
    



};

$(".button").on("click", $slideEffect);


const $makeupPopup = (event) => {
    let $image1 = $("#1");
    
    
    $("#fenty-face").detach();
    $(".container").detach();
    $image1.removeClass("opaque rihanna-image");
    // $image1.css("width", "30%");
    // $image1.css("position", "relative");
    // $image1.css("top", "50px");
    // $image1.css("left", "223px");
    
    let $carouselDiv = $("<div>").addClass("carousel-images");
    let $carouselImg = $("<img>").attr("src","rihanna_image_1.1.png");
    $carouselDiv.append($image1);
    $carouselDiv.append($carouselImg);
    let $carouselImg2 = $("<img>").attr("src","rihanna_image_1.2.png");
    $carouselDiv.append($carouselImg2);
    
    $("body").append($carouselDiv);
    let $nextButton = $("<span>").addClass("lnr lnr-chevron-right next next-button"); 
  

    let $previousButton = $("<span>").addClass("lnr lnr-chevron-left previous previous-button"); 

    $("body").append($previousButton);
    $("body").append($nextButton);
    let currentImgIndex = 0; 
    let highestIndex = $(".carousel-images").children().length - 1;
    $(".next").on("click", () => {
        console.log("Next was clicked");
        $(".carousel-images").children().eq(currentImgIndex).css("display","none")
        if (currentImgIndex < highestIndex) {
            currentImgIndex++;
        } else {
            currentImgIndex = 0;
        };
        
        $(".carousel-images").children().eq(currentImgIndex).css("display", "block");
    });

    $(".previous").on("click", () => {
        console.log("Next was clicked");
        $(".carousel-images").children().eq(currentImgIndex).css("display","none");
    
        //wrap the carousel back to zero if on the last image:
        if (currentImgIndex > 0) {
            currentImgIndex--;
        } else {
            currentImgIndex = highestIndex;
        };
        
        $(".carousel-images").children().eq(currentImgIndex).css("display", "block");
    
    });

    let $goBackText = $("<h1>").text("GO BACK").addClass("go-back");
    $("body").append($goBackText).css("cursor","pointer");
    $(".go-back").on("click", () => {
        
    });


}


$("#1").on("click", $makeupPopup)

