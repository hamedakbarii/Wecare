// scroll up button
const mybutton = document.querySelector('.scroll__btn');


window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click' , topFunction)







// Hero bottom removeBtn for comments
const removeBtn = document.querySelectorAll('.removeBtn')
const commentsItem = document.querySelectorAll('.down__comments--item')

removeBtn.forEach(el => {

  el.addEventListener('click', () => {

    commentsItem.forEach(remove => {

      remove.addEventListener('click', () => {
        remove.remove()
      })
      
    })

  })
  
});



// popular section select tabs
const $p = document.querySelectorAll('.pop');

$p.forEach((e) => {
  e.addEventListener('click', () => {
    
         for (i = 0; i < $p.length; i++){
            $p[i].classList.remove('colored')
        }
    e.classList.add('colored');
  })
})