$(document).ready(function(){

	$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.accordion-open').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});



$('.rabotisec-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
          {
          breakpoint: 641,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
         {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });



});


let triggersModal = document.querySelectorAll(".js-show-modal");
      let modals = document.querySelectorAll(".js-modal");

      function closeModal() {
        modals.forEach(modal => {
          if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
          }
        });
      }


      modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
          const isOutside = !event.target.closest(".modal__inner");
          const isCloseButton = event.target.matches(".js-close-modal");
          if (isCloseButton || isOutside) {
            closeModal();
          }
        });
      });

      triggersModal.forEach((button) =>
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;
        console.log(modalID);
        modals.forEach(function (modal) {
          if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
          }
        });
      }));



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});



let aboutBlocks = document.querySelectorAll(".about-block__item");
        if (aboutBlocks) {
            let proggress = document.querySelector(".about-block__scroll-bar-progress");
            aboutBlocks.forEach(((item, i) => {
                item.addEventListener("mouseover", (() => {
                    let progressPercent = 100 / aboutBlocks.length * i;
                    aboutBlocks.forEach((element => element.classList.remove("_active")));
                    item.classList.add("_active");
                    proggress.style.top = `${progressPercent}%`;
                }));
            }));
        }