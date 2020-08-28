

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
listOfRihannaImages[2].id = "18";


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


const $imageOnePopup = (event) => {
    let $image1 = $(event.target);
    
    
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

    let $goBackText = $("<h1>").text("GO BACK").addClass("go-back").css("cursor","pointer");;
    $("body").append($goBackText)
    $(".go-back").on("click", () => {
        $(".carousel-images").detach();
        window.location.href = "index.html";

    });

    let $product1 = $("<h3>").attr("id", "product-1-name");
    let $product1Sign = $("<h5>").attr("id", "product-1-price-sign");
    let $product1Num = $("<h5>").attr("id", "product-1-price-number");
    // let $productImage = $("<div>").attr("id", "product-image");


    $("body").append($product1);
    $("body").append($product1Sign);
    $("body").append($product1Num);
    // $("body").append($productImage);


    $.ajax({
        url:`https://fenty-api.herokuapp.com/products`
      }).then(
        (data) => {
          
          $("#product-1-name").html(data[71].product_name);
          $("#product-1-price-sign").text("$");
          $("#product-1-price-number").html(data[71].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      



      $("#product-1-name").css("top","50px");
      $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").css("left","22%");
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").css("top","78px");
      $("#product-1-price-sign").css("left","20%");
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").css("top","78px");
      $("#product-1-price-number").css("left","20%");
      const $productImage = $("<img style='position: relative; top: 16px; left: 9%; width: 6%; height: 10%;'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa76ae88f/hi-res/FB70024_FB4062.jpg?sw=70'>");
      $("body").append($productImage);

     






      let $product2 = $("<h3>").attr("id", "product-2-name");
    let $product2Sign = $("<h5>").attr("id", "product-2-price-sign");
    let $product2Num = $("<h5>").attr("id", "product-2-price-number");
    // let $productImage = $("<div>").attr("id", "product-image");


    $("body").append($product2);
    $("body").append($product2Sign);
    $("body").append($product2Num);
    // $("body").append($productImage);


    $.ajax({
        url:`https://fenty-api.herokuapp.com/products`
      }).then(
        (data) => {
          
          $("#product-2-name").html(data[75].product_name);
          $("#product-2-price-sign").text("$");
          $("#product-2-price-number").html(data[75].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      $("#product-2-name").css("top","210px");
      $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").css("left","12%");
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").css("top","230px");
      $("#product-2-price-sign").css("left","9%");
      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").css("top","230px");
      $("#product-2-price-number").css("left","9%");
      const $productImage2 = $("<img style='position: relative; top: 200px; left: -3%; width: 6%; height: 10%;'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw05b19928/hi-res/FB30024_FB9056.jpg?sw=70'>");
      $("body").append($productImage2);




    $("#1").off("click", $imageOnePopup)


}


$("#1").on("click", $imageOnePopup)




const $imageTwoPopup = (event) => {
    let $image1 = $(event.target);
    
    
    $("#fenty-face").detach();
    $(".container").detach();
    $image1.removeClass("opaque rihanna-image");
    // $image1.css("width", "30%");
    // $image1.css("position", "relative");
    // $image1.css("top", "50px");
    // $image1.css("left", "223px");
    
    let $carouselDiv = $("<div>").addClass("carousel-images");
    let $carouselImg = $("<img>").attr("src","rihanna_image_2.1.png");
    $carouselDiv.append($image1);
    $carouselDiv.append($carouselImg);
    let $carouselImg2 = $("<img>").attr("src","rihanna_image_2.2.png");
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

    let $goBackText = $("<h1>").text("GO BACK").addClass("go-back").css("cursor","pointer");;
    $("body").append($goBackText)
    $(".go-back").on("click", () => {
        $(".carousel-images").detach();
        window.location.href = "index.html";

    });

    let $product1 = $("<h3>").attr("id", "product-1-name");
    let $product1Sign = $("<h5>").attr("id", "product-1-price-sign");
    let $product1Num = $("<h5>").attr("id", "product-1-price-number");
    // let $productImage = $("<div>").attr("id", "product-image");


    $("body").append($product1);
    $("body").append($product1Sign);
    $("body").append($product1Num);
    // $("body").append($productImage);


    $.ajax({
        url:`https://fenty-api.herokuapp.com/products`
      }).then(
        (data) => {
          
          $("#product-1-name").html(data[71].product_name);
          $("#product-1-price-sign").text("$");
          $("#product-1-price-number").html(data[71].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      



      $("#product-1-name").css("top","50px");
      $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").css("left","22%");
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").css("top","78px");
      $("#product-1-price-sign").css("left","20%");
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").css("top","78px");
      $("#product-1-price-number").css("left","20%");
      const $productImage = $("<img style='position: relative; top: 16px; left: 9%; width: 6%; height: 10%;'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa76ae88f/hi-res/FB70024_FB4062.jpg?sw=70'>");
      $("body").append($productImage);

     






      let $product2 = $("<h3>").attr("id", "product-2-name");
    let $product2Sign = $("<h5>").attr("id", "product-2-price-sign");
    let $product2Num = $("<h5>").attr("id", "product-2-price-number");
    // let $productImage = $("<div>").attr("id", "product-image");


    $("body").append($product2);
    $("body").append($product2Sign);
    $("body").append($product2Num);
    // $("body").append($productImage);


    $.ajax({
        url:`https://fenty-api.herokuapp.com/products`
      }).then(
        (data) => {
          
          $("#product-2-name").html(data[75].product_name);
          $("#product-2-price-sign").text("$");
          $("#product-2-price-number").html(data[75].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      $("#product-2-name").css("top","210px");
      $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").css("left","12%");
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").css("top","230px");
      $("#product-2-price-sign").css("left","9%");
      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").css("top","230px");
      $("#product-2-price-number").css("left","9%");
      const $productImage2 = $("<img style='position: relative; top: 200px; left: -3%; width: 6%; height: 10%;'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw05b19928/hi-res/FB30024_FB9056.jpg?sw=70'>");
      $("body").append($productImage2);




    $("#2").off("click", $imageTwoPopup)


}




$("#2").on("click", $imageTwoPopup)

















































































const $imageEighteenPopup = (event) => {
    let $image1 = $(event.target);
    
    
    $("#fenty-face").detach();
    $(".container").detach();
    $image1.removeClass("opaque rihanna-image");
    // $image1.css("width", "30%");
    // $image1.css("position", "relative");
    // $image1.css("top", "50px");
    // $image1.css("left", "223px");
    
    let $carouselDiv = $("<div>").addClass("carousel-images");
    let $carouselImg = $("<img>").attr("src","rihanna_image_18.1.png");
    $carouselDiv.append($image1);
    $carouselDiv.append($carouselImg);
    let $carouselImg2 = $("<img>").attr("src","rihanna_image_18.2.png");
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

    let $goBackText = $("<h1>").text("GO BACK").addClass("go-back").css("cursor","pointer");;
    $("body").append($goBackText)
    $(".go-back").on("click", () => {
        $(".carousel-images").detach();
        window.location.href = "index.html";

    });

    let $product1 = $("<h3>").attr("id", "product-1-name");
    let $product1Sign = $("<h5>").attr("id", "product-1-price-sign");
    let $product1Num = $("<h5>").attr("id", "product-1-price-number");
    // let $productImage = $("<div>").attr("id", "product-image");


    $("body").append($product1);
    $("body").append($product1Sign);
    $("body").append($product1Num);
    // $("body").append($productImage);


    $.ajax({
        url:`https://fenty-api.herokuapp.com/products`
      }).then(
        (data) => {
          
          $("#product-1-name").html(data[106].product_name);
          $("#product-1-price-sign").text("$");
          $("#product-1-price-number").html(data[106].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      



      $("#product-1-name").css("top","50px");
      $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").css("left","22%");
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").css("top","78px");
      $("#product-1-price-sign").css("left","20%");
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").css("top","78px");
      $("#product-1-price-number").css("left","20%");
      const $productImage = $("<img style='position: relative; top: 16px; left: 9%; width: 6%; height: 10%;'  src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
      $("body").append($productImage);

     






      let $product2 = $("<h3>").attr("id", "product-2-name");
    let $product2Sign = $("<h5>").attr("id", "product-2-price-sign");
    let $product2Num = $("<h5>").attr("id", "product-2-price-number");
    // let $productImage = $("<div>").attr("id", "product-image");


    $("body").append($product2);
    $("body").append($product2Sign);
    $("body").append($product2Num);
    // $("body").append($productImage);


    $.ajax({
        url:`https://fenty-api.herokuapp.com/products`
      }).then(
        (data) => {
          
          $("#product-2-name").html(data[19].product_name);
          $("#product-2-price-sign").text("$");
          $("#product-2-price-number").html(data[19].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      $("#product-2-name").css("top","210px");
      $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").css("left","12%");
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").css("top","230px");
      $("#product-2-price-sign").css("left","9%");
      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").css("top","230px");
      $("#product-2-price-number").css("left","9%");
      const $productImage2 = $("<img style='position: relative; top: 200px; left: -3%; width: 6%; height: 10%;'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
      $("body").append($productImage2);




    $(document).off("click", "#18", $imageEighteenPopup);



}

$(document).on("click", "#18", $imageEighteenPopup);