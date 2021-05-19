VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 25,
    speed: 200
});

var headline = ""
var taste = ""
var description = ""


var h2_html = document.getElementById("h2_1")
var p1_html = document.getElementById("p_1")
var p2_html = document.getElementById("p_2")



function change_circle_color(color,img){
    document.querySelector('.voda_img').src = img;

    const circle = document.querySelector(".circle");
    const button = document.querySelector(".button");

    circle.style.animation ="Gradient 10s ease infinite"
    
    if (color == "green"){
        circle.style.background = `linear-gradient(-45deg, #68A143, #5B9055, #2C5234, #69A798)`;
        button.style.background =  "#017143";
        h2_html.style.color = "#017143";
        
        headline = "FOREST LEAVE"
        taste = "Свежесть утренней лесной прогулки, несущей заряд энергии и бодрости на целый день."
        description = "Слабогазированный безалкогольный напиток, содержащий Кальций, Магний и Витамины. Замечательный напиток для прогулки на улице и приятного время провождения,наша вода заряжает энергией и пополняет водный баланс вашего тела."
        
        
    }
    if (color == "pink"){
            circle.style.background = `linear-gradient(-45deg, #F26B9C, #FDD9D5, #D98B84, #F1A8C0)`;
            button.style.background =  "#F26B9C"; 
            h2_html.style.color = "#F26B9C"; 

            headline = "FROSTY FRUIT"
            taste = "Морозящая кисло-сладкая прохлада вишни и киви"
            description = "Слабогазированный безалкогольный напиток, содержащий Кальций, Магний и Витамины. Замечательный напиток для прогулки на улице и приятного время провождения,наша вода заряжает энергией и пополняет водный баланс вашего тела."
    }
    if (color == "purple"){
            circle.style.background = `linear-gradient(-45deg, #731D5C, #BF349A, #F291D8, #AFA7CE)`;
            button.style.background =  "#731D5C";
            h2_html.style.color = "#731D5C";

            headline = "FICSPEARE"
            taste = "Медовый мусс с ароматной грушей и сладким инжиро"
            description = "Слабогазированный безалкогольный напиток, содержащий Кальций, Магний и Витамины. Замечательный напиток для прогулки на улице и приятного время провождения,наша вода заряжает энергией и пополняет водный баланс вашего тела."


    }

    h2_html.innerHTML = headline;
    p1_html.innerHTML = taste;
    p2_html.innerHTML = description;

    circle.style.backgroundSize ="400% 400%"
}