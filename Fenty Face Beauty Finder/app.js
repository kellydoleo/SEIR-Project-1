

const $hoverEffect = (event) => {
    
    $(event.target).addClass("opaque")
//    if ($(event.target).class() != "opaque") {
//     $(event.target).toggleClass("opaque");
//    } else {
//     $(event.target).removeClass("opaque");
//    }
  
     


    
}

$(".rihanna-image").on("mouseover", $hoverEffect);


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
        
        $("img").addClass("opaque");
    



};

$(".button").on("click", $slideEffect);

