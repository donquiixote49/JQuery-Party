


// ! Scroll Start 

$('.sideBar a').on('click' , function(e){
    
    let href = e.target.getAttribute('href');
    let section =$(href).offset().top;
    // console.log(section);
    $('html').animate({scrollTop:section},2000);

})


// ! Scroll end 







// ! side nave start 


$('.sideBtn').on('click', function(){
$('.sideBar').animate({width:'toggle'}, 1000)
$('.sideBar').removeClass('d-none')

})


$('.close').on('click', function(){
    $('.sideBar').animate({width:'toggle'}, 1000)
})


// ! side nave end 





// ! Accordion start 



$('.item h4').on('click',function(e){

    $(e.target).next().slideToggle('slow')
    $('.item p ').not($(e.target).next()).slideUp('slow')

})


// ! Accordion end 



// ! Duration start 

let countDownDate = new Date ("Jan 5, 2025 15:37:25").getTime();

let counter = setInterval(function(){

    let nowDate = new Date().getTime();

    let diff = countDownDate - nowDate;


    let days = Math.floor (diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor ((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    let minuts = Math.floor ((diff % (1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds =  Math.floor ((diff % (1000 * 60 )) / (1000 ));

    $('.days').html(`${days} D`)
    $('.hours').html(`${hours} H`)
    $('.minuts').html(`${minuts} M`)
    $('.seconds').html(`${seconds} S`)




})


// ! Duration end 


// ! contact Start 



$('#messageInput').on('input', function(){

    let maxLength = 100;
    let userInput = $('#messageInput').val();
    let remainingChar = maxLength - userInput.length;

    if(remainingChar > 0 ){
        $('.chars').html(`${remainingChar}`) 
    }else {
        $('.chars').html('your available character finished')
    }
})


// ! contact End 