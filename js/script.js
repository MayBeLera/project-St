// ----
document.addEventListener('click', burgerInit);

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.header__nav-link');
    const headerButtons = document.querySelector('.header__btns')

    if(!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return


    if(!document.body.classList.contains('body--opened-menu')){
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}

// ----
// const filterControls = document.querySelector('.filters')
// filterControls.addEventListener('click', toggleTab)
// function toggleTab(e){
//     e.preventDefault();
// }

function toggleDropdownRegion() {
            const dropdown = document.getElementById("region-list");
            dropdown.classList.toggle("filter__region-open");

             document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('region-list');
            const button = document.querySelector('.filter__region-btn');
            
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                dropdown.classList.remove('filter__region-open');
            }
        });
            
        }
    function toggleDropdownEfnc() {
            const dropdown = document.getElementById("efnc-list");
            dropdown.classList.toggle("filter__efnc-open");



            document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('efnc-list');
            const button = document.querySelector('.filter__efnc-btn');
            
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                dropdown.classList.remove('filter__efnc-open');
            }
        });
        }

        
// ---


function cardMoreInfo(e) {
    const moreIcon = e.target.closest('.card-more-mobile');
    const moreInfo = e.target.closest('.header__nav-link');

    if(!moreIcon && !moreInfo) return
    if(document.documentElement.clientWidth > 900) return

    e.preventDefault();

    if(!document.body.classList.contains('card-more-info')){
        document.body.classList.add('card-more-info')

    } else {
        document.body.classList.remove('card-more-info')
    }

}

         


// ----
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
     document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});

// ----
const swiper = new Swiper('.document-swiper', {
    spaceBetween: 0,
    slidesPerView: 2, 
    centeredSlides: true, 
    slidesOffsetBefore: 1,
     initialSlide: 0,
    loop: true,



  navigation: {
    nextEl: '.document__next',
    prevEl: '.document__prev',
  },
  breakpoints: {

            601: {
                
                
              centeredSlides: false, 
              
            }
          }

});



// const swiper = new Swiper('.document-swiper', {
//     spaceBetween: 0,
//     slidesPerView: 1, 
//     centeredSlides: false, 
//     slidesOffsetBefore: 1,
//     initialSlide: 0, 
//     loop: true,
     


//   navigation: {
//     nextEl: '.document__next',
//     prevEl: '.document__prev',
//   },
//   breakpoints: {

//             631: {
//               slidesPerView: 1.8,
              
//             }
//           }

// });

// ----
const inputsTel = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputsTel)