
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


// Resize the navigation bar width value according to breakpoint (992px)
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






  var istek = new XMLHttpRequest();
  istek.onload = function(){
    if(this.readyState == 4 & this.status == 200){
      var data = JSON.parse(this.response);
      for(i = 0; i < data.new_products.length; i++){
        document.getElementById("addCard").innerHTML += 

        '<div  class="col-lg-3 col-md-4 col-sm-6 col-12"><div class="new_brand" ><div id="'+data.new_products[i].id +'" class="new_img" style="background: url('+data.new_products[i].first_image+')" ></div></div><div class="bottom_text"><a href="#">'+data.new_products[i].name+'</a><br><span>$'+data.new_products[i].price+'</span></div></div>'      
;
      }
    }else{
      console.log("An error has been occured")
    }
  }
  istek.open("GET", "/Sources/new_products.json", true);
  istek.send();





// Change backgroundImage of divs(.new_img) via their own IDs
$(document).ready(function change_image($) {
  let new_img = document.getElementsByClassName('new_img');
  for(let i = 0; i < new_img.length; i++){

    if(new_img[i].id =='light_grey_sofa'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/1.2.jpg)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/1.1.jpg)'
        }
        })
    }
    else if(new_img[i].id =='celling_lights'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/2.2.jpg)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/2.1.jpg)'
        }
        })
    }
    else if(new_img[i].id =='high_stand_chair'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/3.2.jpg)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/3.1.jpg)'
        }
        })
    }
    else if(new_img[i].id =='dining_sofa'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/4.2.jpg)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/4.1.jpg)'
        }
        })
    }
    else if(new_img[i].id =='bathroom'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/5.2.png)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/5.1.jpg)'
        }
        })
    }   
    else if(new_img[i].id =='golden_lamp'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/6.2.jpg)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/6.1.jpg)'
        }
        })
    } 
    else if(new_img[i].id =='white_cuddle'){
      $('#' + new_img[i].id ).on({
        mouseenter:function(){
          this.style.backgroundImage = 'url(./images/7.2.jpg)'
        },
        mouseout:function(){
          this.style.backgroundImage = 'url(./images/7.1.jpg)'
        }
        })
    }else{
      console.log("There wass't any ID to change backgroundImage. Make sure the ID you write in if-statement is same with the object's ID that you want to change its backgroundImage.")
    }
  }   
});










  //Create a BackToTop Button
let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


