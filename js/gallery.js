const pics = [...document.querySelectorAll('[class^="smallPic"]')];
var displayedPic = document.querySelector('#displayedPic');

pics[0].addEventListener('click', function (e) {
    displayedPic.setAttribute("src", "images/flowers-pink-large.jpg");
    document.getElementById('figcaption').innerHTML = "Pink flowers";
})
pics[1].addEventListener('click', function (e) {
    displayedPic.setAttribute("src", "images/flowers-purple-large.jpg");
    document.getElementById('figcaption').innerHTML = "Purple flowers";
})
pics[2].addEventListener('click', function (e) {
    displayedPic.setAttribute("src", "images/flowers-red-large.jpg");
    document.getElementById('figcaption').innerHTML = "Red flowers";
})
pics[3].addEventListener('click', function (e) {
    displayedPic.setAttribute("src", "images/flowers-white-large.jpg");
    document.getElementById('figcaption').innerHTML = "White flowers";
})
pics[4].addEventListener('click', function (e) {
    displayedPic.setAttribute("src", "images/flowers-yellow-large.jpg");
    document.getElementById('figcaption').innerHTML = "Yellow flowers";
})



