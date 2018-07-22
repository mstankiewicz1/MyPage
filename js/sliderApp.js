var myIndex = 0;
showSlide();

function showSlide() {
    var i;
    var photo = document.getElementsByClassName("mySlides");

    for (i = 0 ; i < photo.length ; i++){
        photo[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > photo.length){
        myIndex = 1;
    }
    photo[myIndex-1].style.display = "block";
    setTimeout(showSlide,5000); //zmien zdjecie co 5 sekund
}