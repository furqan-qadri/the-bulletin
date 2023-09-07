const date= new Date();
const dateOptions = {
    weekday: "long",
    year: "numeric",
    month:"long",
    day:"numeric",
};

const dateFormatted= date.toLocaleDateString("en", dateOptions);
const dateSelector= document.querySelectorAll(".date");

for (let selector of dateSelector){
    selector.innerHTML=dateFormatted;
}

//slick js

$(function (){
    $('.categories-slider').slick({
        ininite:true,
        arrows:false,
        variableWidth:true,
        swipeToSlide: true,
        touchThreshold:1000,
    })
})

//slickjs

$(function (){
    $('.categories.slider').slick({
        ininite:true,
        arrows:false,
        variableWidth:true,
        swipeToSlide: true,
        touchThreshold:1000,
    });
})