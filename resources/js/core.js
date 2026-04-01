import $ from 'jquery';
/*--------------------------------- banner Slider -------------------------*/
$(document).ready(function(){
 $('.bannerSliderHome').slick({
   slidesToShow: 1,
   infinite: true,
   arrows: true,
   speed: 300,
   autoplay: true,
   nextArrow: '<button type="button" class="slick-prev custom-arrow"></button>',
   prevArrow: '<button type="button" class="slick-next custom-arrow"></button>',
   autoplaySpeed: 4000
 });
 $(".prev-btn").click(function () {
   $(".bannerSliderHome").slick("slickPrev");
 });

 $(".next-btn").click(function () {
   $(".bannerSliderHome").slick("slickNext");
 });
 $(".prev-btn").addClass("slick-disabled");
});
   

/*--------------------------------- Blog Resources -------------------------*/

document.querySelectorAll(".arrow-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const card = this.closest(".blogResources");
        card.classList.toggle("active");
    });
});

/*--------------------------------- Partner Slider -------------------------*/

$(document).ready(function(){
$('.ourPartnerBlockSlider').slick({
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 800, 
  infinite: true,
  cssEase: 'linear',
  arrows: false,
  variableWidth: true
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  
});
  
});

/*--------------------------------- Tab/Accordion -------------------------*/

$(document).ready(function () {

  function toggleTabsAccordion() {
    if ($(window).width() <= 767) {
      
      // Convert Tabs → Accordion
      $(".nav-tabs").addClass("d-none");

      $(".tab-pane").each(function () {
        if (!$(this).prev().hasClass(".tab-content accordion-header")) {

          const id = $(this).attr("id");
          const title = $('a[href="#' + id + '"]').text();

          $(this).before(`
            <div class="accordion-header mb-2">
              <button class="btn btn-outline-primary w-100 text-start" data-target="#${id}">
                ${title}
              </button>
            </div>
          `);
        }
      });

      // Accordion click
      $(".tab-content .accordion-header button").off("click").on("click", function () {
        let target = $(this).data("target");

        $(".tab-pane").removeClass("show active");
        $(target).addClass("show active");
      });

    } else {
      
      // Back to Tabs
      $(".nav-tabs").removeClass("d-none");
      $(".tab-content .accordion-header").remove();

    }
  }

  toggleTabsAccordion();
  $(window).resize(toggleTabsAccordion);

});
