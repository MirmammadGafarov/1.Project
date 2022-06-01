
// To make a sticky navigation bar(#sticky_navbar)
window.onscroll = function() {toStickNavbar()};

let sticky_navbar = document.getElementById("sticky_navbar");
let sticky = sticky_navbar.offsetTop;

function toStickNavbar(){
  if (window.pageYOffset >= sticky) {
    sticky_navbar.classList.add("make_sticky")
  }else{
    sticky_navbar.classList.remove("make_sticky")
  }
};


// Resize the navigation bar width value according to the breakpoint (992px)
jQuery(document).ready(function($) {
    let whenChange = function() {
      let width = document.body.clientWidth;
      if (width <= 992) {
        $('.navigate').addClass('col-md-12');
        $('.navigate').removeClass('col-md-5');
      } else if(width > 992){
        $('.navigate').removeClass('col-md-12');
        $('.navigate').addClass('col-md-5');
      };
    };
    $(window).resize(function(){
        whenChange();
    });
    whenChange();
  });

//Add products to the Section N-3 from .JSON file
$(document).ready(function getProducts(){
  fetch('/Sources/new_products.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.new_products.forEach(function (product) {
      document.getElementById("addCard").innerHTML += 

      `<div  class="col-lg-3 col-md-4 col-sm-6 col-12">
         <div class="new_brand" >
           <div id="${product.id}" class="new_img" style="background: url('${product.firstImg}')" ></div>
         </div>
         <div class="bottom_text">
           <a href="#">${product.name}</a><br>
           <span>$${product.price}</span>
         </div>
       </div>`; 
//Change products' Images by means of Mouse Events
setTimeout(() => {
  if(product.id){
    $('#' + product.id ).on({
      mouseenter:function(){
        this.style.backgroundImage = `url(${product.secondImg})`
      },
      mouseout:function(){
        this.style.backgroundImage = `url(${product.firstImg})`
      }
    })
  }
}, 500);
});
})
  .catch(error => console.log("An error has been occured"+error))
}
)

  //Create a BackToTop Button
let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
