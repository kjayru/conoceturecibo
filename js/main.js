var vm = new Vue({
  /*
  data:{
    video:{
      url: null
    },
    modal:{
      show: false
    }
  },
  */


  mounted: function(){
    const self = this;
    /*
    var slick1 = $('.layout__main .page1__main .section4__main .list').slick({
      responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          },
          {

            breakpoint: 769,
            settings: {
              //variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              infinite : false,
              //dots: false,
            }

          }
        ]
    });

    

    var slick2 = $('.layout__main .page1__main .section6__main .list').slick({
      responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          },
          {

            breakpoint: 570,
            settings: {
              //variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              infinite : false,
              //dots: false,
            }

          }
        ]
    });

      

    var slick3 = $('.section2__main .list').slick({
      //arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      //autoplay: true,
      //infinite: false,
      //centerMode: false,
      //centerPadding: '0px',
    });


    var slick4 = $('.section7__main .list').slick({
      //arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      //autoplay: true,
      //infinite: false,
      //centerMode: false,
      //centerPadding: '0px',
    });

  */
    $(window).resize(function() {
      //slick1.slick('resize');
      //slick1.slick('resize');
      //slick2.slick('resize');
      //slick3.slick('resize');
      //slick4.slick('resize');
    });
    

    //$(tab).eq(1).removeClass('active');


    var questions = Array.apply(null, document.querySelectorAll('.questions__list ul li h3'));

    questions.filter(function (element, index) {

      /*element.firstChild.addEventListener("click", function(event){ 
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        }
      });*/

      element.addEventListener("click", function(event){ 

        var buttonClass = this.parentNode.classList;

        if(buttonClass.contains("active")){
          buttonClass.remove("active");
        }else{
          buttonClass.add("active");
        }

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 

      });

    });

    /*
    var considerations = document.querySelector('.considerations__subtitle');

    considerations.addEventListener("click", function(){ 

      var buttonClass = event.target.parentNode.parentNode.children[0].classList;

      if(buttonClass.contains("active")){
        buttonClass.remove("active");
      }else{
        buttonClass.add("active");
      }

      var panel = this.nextElementSibling;

      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 

    });
    */
  
  },
  methods: {
    openVideo: function(url){
      this.video.url = url;

      //this.video.url = '<iframe id="video" width="560" height="315" :src="'+ url +'" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>';
      //this.video.url = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mvV5AloFRsY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      this.showModal();
    },
    showModal: function(){
      this.modal.show = true;
      document.querySelector("body").style.overflow = 'hidden';
    },
    closeModal: function(){
      this.modal.show = false;
      document.querySelector("body").style.overflow = 'auto';
    }
  }
}).$mount('#app');

function openVideo(url){
  vm.openVideo(url);
}

/*
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
*/

  var menuBoton = true;
  $("#nav , #navM").on("click", function() {
    //$(this).toggleClass('actitve')
    menuBoton
      ? ($("#menuContenedor").fadeIn(350),
        (menuBoton = false),
        $(this).addClass("act"))
      : ($("#menuContenedor").fadeOut(200),
        (menuBoton = true),
        $(this).removeClass("act"));
  });