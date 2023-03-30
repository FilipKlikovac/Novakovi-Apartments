let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0) 
    // Event listener funkcija, koja nam čini da se navbar background ne vidi kada je scroll pozicija na 0, a čim skrolamo dolje, navbar bg se pojavljuje
});


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}