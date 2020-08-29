


/////////////creates hover effect of images 
const $hoverEffect = (event) => {
    
    $(event.target).addClass("opaque")
//    if ($(event.target).class() != "opaque") {
//     $(event.target).toggleClass("opaque");
//    } else {
//     $(event.target).removeClass("opaque");
//    }
  
     


    
}



$(".hexagon").on("mouseover", $hoverEffect);



////////organizes additional images added to the DOM into a list I can pull from below ////////
const listOfRihannaImages = [];
listOfRihannaImages[0] = new Image(); 
listOfRihannaImages[0].src = "rihanna_image_16.png";
listOfRihannaImages[0].id = "16";

listOfRihannaImages[1] = new Image(); 
listOfRihannaImages[1].src = "rihanna_image_17.png";
listOfRihannaImages[1].id = "17";

listOfRihannaImages[2] = new Image(); 
listOfRihannaImages[2].src = "rihanna_image_18.png";
listOfRihannaImages[2].id = "18";


listOfRihannaImages[3] = new Image(); 
listOfRihannaImages[3].src = "rihanna_image_19.png";
listOfRihannaImages[3].id = "19";

listOfRihannaImages[4] = new Image(); 
listOfRihannaImages[4].src = "rihanna_image_20.png";
listOfRihannaImages[4].id = "20";

listOfRihannaImages[5] = new Image(); 
listOfRihannaImages[5].src = "rihanna_image_21.png";
listOfRihannaImages[5].id = "21";

listOfRihannaImages[6] = new Image(); 
listOfRihannaImages[6].src = "rihanna_image_22.png";
listOfRihannaImages[6].id = "22";

listOfRihannaImages[7] = new Image(); 
listOfRihannaImages[7].src = "rihanna_image_23.png";
listOfRihannaImages[7].id = "23";

listOfRihannaImages[8] = new Image(); 
listOfRihannaImages[8].src = "rihanna_image_24.png";
listOfRihannaImages[8].id = "24";





////////allows for additional images to appear after clicking see more/////
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
    
     
    
////////adding my additional images from pulling from a list and appending to my DOM
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

/* 
The code below occurs on each click of an image on the DOM. When one clicks on an image, the elements on the 
body are detached and only the image clicked remains along with the addition of make up products which are 
pulled from an API. 

*/




/////////////////////////////////////////////////////////////////
/////IMAGE ONE///////////
////////////////////////////////////////////////////////////////////////


const $imageOnePopup = (event) => {
    let $image1 = $(event.target);
    
    ////removing the body//////////////
    $("#fenty-face").detach();
    $(".container").detach();
    $image1.removeClass("opaque rihanna-image");
   
    ///////////creating a carousel//////////
    let $carouselDiv = $("<div>").addClass("carousel-images");
    let $carouselImg = $("<img>").attr("src","rihanna_image_1.1.png");
    $carouselDiv.append($image1);
    $carouselDiv.append($carouselImg);
    let $carouselImg2 = $("<img>").attr("src","rihanna_image_1.2.png");
    $carouselDiv.append($carouselImg2);
    
    $("body").append($carouselDiv);

    //////////adding buttons to carousel ////////////////
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

    /////creating a method to return to the original home screen before changing the DOM ///////////
    let $goBackText = $("<h1>").text("GO BACK").addClass("go-back").css("cursor","pointer");;
    $("body").append($goBackText)
    $(".go-back").on("click", () => {
        $(".carousel-images").detach();
        window.location.href = "index.html";

    });

    //////creating addional HTML elements to add my products to

    let $product1 = $("<h3>").attr("id", "product-1-name");
    let $product1Sign = $("<h5>").attr("id", "product-1-price-sign");
    let $product1Num = $("<h5>").attr("id", "product-1-price-number");
   


    $("body").append($product1);
    $("body").append($product1Sign);
    $("body").append($product1Num);
    



    ///////pulling product names and prices from API ////////

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

      



      ////////styling my products names and prices I added above 
      $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
      const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa76ae88f/hi-res/FB70024_FB4062.jpg?sw=70'>");
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

      
      $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");

      
      const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw05b19928/hi-res/FB30024_FB9056.jpg?sw=70'>");
      $("body").append($productImage2);




    $("#1").off("click", $imageOnePopup)


}


$("#1").on("click", $imageOnePopup)

/* 

The following code is merely a copy of the one above but for each indivudal image I added. I added 24 images. 

*/





////////////////////////////////////////////////////////
//IMAGE TWO///
///////////////////////////////////////////////////////


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

      



      $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
      const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
          
          $("#product-2-name").html(data[21].product_name);
          $("#product-2-price-sign").text("$");
          $("#product-2-price-number").html(data[21].price);
          
        },
        () => {
          console.log("bad request");
        }
      );

      $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
      const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw7f07816c/hi-res/FB40017_FB4057.jpg?sw=70'>");
      $("body").append($productImage2);




    $("#2").off("click", $imageTwoPopup)


}




$("#2").on("click", $imageTwoPopup)





////////////////////////////////////////////
//IMAGE THREE
/////////////////////////////////////////////////////////














const $imageThreePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_3.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_3.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[264].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[264].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfa15124c/hi-res/FB30004_FB3035.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#3").off("click", $imageThreePopup)


}


$("#3").on("click", $imageThreePopup);









//////////////////////////////////////////////////////////////
// IMAGE FOUR
/////////////////////////////////////////////////////////////



const $imageFourPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_4.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_4.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[20].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[20].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw383fee5d/hi-res/FB40005_FB4012.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#4").off("click", $imageFourPopup)


}



$("#4").on("click", $imageFourPopup);






////////////////////////////////////////
//IMAGE FIVE
//////////////////////////////////////




const $imageFivePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_5.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_5.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[264].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[264].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfa15124c/hi-res/FB30004_FB3035.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#5").off("click", $imageFivePopup)


}






$("#5").on("click", $imageFivePopup);







/////////////////////////////////////////////////////////
//IMAGE SIX
///////////////////////////////////////////////////////



const $imageSixPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_6.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_6.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[10].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[10].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwc83e9751/hi-res/FB50002_FB5002.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#6").off("click", $imageSixPopup)


}







$("#6").on("click", $imageSixPopup);




////////////////////////////////////////////////////
//IMAGE SEVEN
//////////////////////////////////////////////////////


const $imageSevenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_7.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_7.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#7").off("click", $imageSevenPopup)


}








$("#7").on("click", $imageSevenPopup);



///////////////////////////////////////////////////////
//IMAGE EIGHT
///////////////////////////////////////////////////////////////




const $imageEightPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_8.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_8.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[264].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[264].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfa15124c/hi-res/FB30004_FB3035.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#8").off("click", $imageEightPopup)


}






$("#8").on("click", $imageEightPopup);




/////////////////////////////////////////////
//IMAGE NINE
//////////////////////////////////////////


const $imageNinePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_9.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_9.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#9").off("click", $imageNinePopup)


}




$("#9").on("click", $imageNinePopup);



////////////////////////////
//IMAGE TEN
/////////////////////////////////////////////////



const $imageTenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_10.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_10.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#10").off("click", $imageTenPopup)


}

$("#10").on("click", $imageTenPopup);





/////////////////////////////////////////////////////
//IMAGE ELEVEN
///////////////////////


const $imageElevenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_11.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_11.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#11").off("click", $imageElevenPopup)


}



$("#11").on("click", $imageElevenPopup);






/////////////////////////////////
//IMAGE TWELVE
/////////////////////////////////




const $imageTwelvePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_12.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_12.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
    $("#product-1-name").addClass("product-1-name");
    
    $("#product-1-price-sign").addClass("image-1-product-1");
    $("#product-1-price-sign").addClass("product-1-price-sign");
    
    $("#product-1-price-number").addClass("image-1-product-1");
    $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#12").off("click", $imageTwelvePopup)


}




$("#12").on("click", $imageTwelvePopup);





/////////////////////////////
////IMAGE THIRTEEN
////////////////////////////////////////////




const $imageThirteenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_13.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_13.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#13").off("click", $imageThirteenPopup)


}


$("#13").on("click", $imageThirteenPopup);

////////////////////////////
///IMAGE FOURTEEN
////////////////////////////////////////////////////



const $imageFourteenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_14.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_14.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#14").off("click", $imageFourteenPopup)


}



$("#14").on("click", $imageFourteenPopup);




/////////////////////////////////////////////////
////IMAGE FIFTEEN
////////////////////////////////////////////////


const $imageFifteenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_15.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_15.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
    $("#product-1-name").addClass("product-1-name");
    
    $("#product-1-price-sign").addClass("image-1-product-1");
    $("#product-1-price-sign").addClass("product-1-price-sign");
    
    $("#product-1-price-number").addClass("image-1-product-1");
    $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
    $("#product-2-name").addClass("product-2-name");
    
    $("#product-2-price-sign").addClass("image-1-product-1");
    $("#product-2-price-sign").addClass("product-2-price-sign");

    $("#product-2-price-number").addClass("image-1-product-1");
    $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $("#15").off("click", $imageFifteenPopup)


}



$("#15").on("click", $imageFifteenPopup);







/////////////////////////////////////
//IMAGE SIXTEEN
/////////////////////////////////////////////////////




const $imageSixteenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_16.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_16.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
    $("#product-1-name").addClass("product-1-name");
    
    $("#product-1-price-sign").addClass("image-1-product-1");
    $("#product-1-price-sign").addClass("product-1-price-sign");
    
    $("#product-1-price-number").addClass("image-1-product-1");
    $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




    $(document).off("click", "#16", $imageSixteenPopup);


}


$(document).on("click", "#16", $imageSixteenPopup);


////////////////////////////////////
//IMAGE SEVENTEEN
///////////////////////////////////////////////




const $imageSeventeenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_17.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_17.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
    $("#product-1-name").addClass("product-1-name");
    
    $("#product-1-price-sign").addClass("image-1-product-1");
    $("#product-1-price-sign").addClass("product-1-price-sign");
    
    $("#product-1-price-number").addClass("image-1-product-1");
    $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdcbd06ef/hi-res/FB70002_FB4037.jpg?sw=70'>");
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
        
        $("#product-2-name").html(data[18].product_name);
        $("#product-2-price-sign").text("$");
        $("#product-2-price-number").html(data[18].price);
        
      },
      () => {
        console.log("bad request");
      }
    );

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2'  src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb801dd40/hi-res/FB50001_FB5014_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




    $(document).off("click", "#17", $imageSeventeenPopup);


}





$(document).on("click", "#17", $imageSeventeenPopup);







///////////////////////////////////////////////
//IMAGE EIGHTEEN
///////////////////////////////////////////////////////

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

      



      $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
      const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

      $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
      const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
      $("body").append($productImage2);




    $(document).off("click", "#18", $imageEighteenPopup);



}

$(document).on("click", "#18", $imageEighteenPopup);


//////////////////////////////////
//IMAGE NINETEEN
//////////////////////////////////////////////////




const $imageNineteenPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_19.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_19.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#19", $imageNineteenPopup);



}

$(document).on("click", "#19", $imageNineteenPopup);


///////////////////////////////////////////
//IMAGE TWENTY
///////////////////////////////////////////////


const $imageTwentyPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_20.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_20.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
    $("#product-1-name").addClass("product-1-name");
    
    $("#product-1-price-sign").addClass("image-1-product-1");
    $("#product-1-price-sign").addClass("product-1-price-sign");
    
    $("#product-1-price-number").addClass("image-1-product-1");
    $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#20", $imageTwentyPopup);



}


$(document).on("click", "#20", $imageTwentyPopup);



////////////////////////////////
//IMAGE TWENTYONE
///////////////////////////////////////


const $imageTwentyOnePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_21.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_21.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#21", $imageTwentyOnePopup);



}



$(document).on("click", "#21", $imageTwentyOnePopup);


///////////////////////////////////////////
//IMAGE TWENTYTWO
/////////////////////////////////////////




const $imageTwentyTwoPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_22.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_22.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#22", $imageTwentyTwoPopup);



}


$(document).on("click", "#22", $imageTwentyTwoPopup);


//////////////////////////////////////////////
//IMAGE TWENTY THREE
////////////////////////////////////////////////////////




const $imageTwentyThreePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_23.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_23.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#23", $imageTwentyThreePopup);



}



$(document).on("click", "#23", $imageTwentyThreePopup);


///////////////////////////////
//IMAGE TWENTY FOUR
/////////////////////////////////////////////////////////




const $imageTwentyFourPopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_24.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_24.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1'  src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#24", $imageTwentFourPopup);



}

$(document).on("click", "#24", $imageTwentyFourPopup);


///////////////////////////////////////
//IMAGE TWENTY FIVE
/////////////////////////////////////////////////////////



const $imageTwentyFivePopup = (event) => {
  let $image1 = $(event.target);
  
  
  $("#fenty-face").detach();
  $(".container").detach();
  $image1.removeClass("opaque rihanna-image");
  // $image1.css("width", "30%");
  // $image1.css("position", "relative");
  // $image1.css("top", "50px");
  // $image1.css("left", "223px");
  
  let $carouselDiv = $("<div>").addClass("carousel-images");
  let $carouselImg = $("<img>").attr("src","rihanna_image_25.1.png");
  $carouselDiv.append($image1);
  $carouselDiv.append($carouselImg);
  let $carouselImg2 = $("<img>").attr("src","rihanna_image_25.2.png");
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

    



    $("#product-1-name").addClass("image-1-product-1");
      $("#product-1-name").addClass("product-1-name");
      
      $("#product-1-price-sign").addClass("image-1-product-1");
      $("#product-1-price-sign").addClass("product-1-price-sign");
      
      $("#product-1-price-number").addClass("image-1-product-1");
      $("#product-1-price-number").addClass("product-1-price-number");
    const $productImage = $("<img class='product-image-1' src='https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwdc232c4c/hi-res/Summer%20II%20Concrete%20-%20Final/27808V1_final.jpg?sw=70'>");
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

    $("#product-2-name").addClass("image-1-product-1");
      $("#product-2-name").addClass("product-2-name");
      
      $("#product-2-price-sign").addClass("image-1-product-1");
      $("#product-2-price-sign").addClass("product-2-price-sign");

      $("#product-2-price-number").addClass("image-1-product-1");
      $("#product-2-price-number").addClass("product-2-price-number");
    const $productImage2 = $("<img class='product-image-2' src='https://www.fentybeauty.com/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3d874e46/hi-res/29406_alt1.jpg?sw=70'>");
    $("body").append($productImage2);




  $(document).off("click", "#25", $imageTwentyFivePopup);



}

$(document).on("click", "#25", $imageTwentyFivePopup);
