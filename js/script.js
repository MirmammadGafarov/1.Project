
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
