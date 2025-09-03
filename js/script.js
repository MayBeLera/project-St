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
// ---
    const modal = document.querySelector('.modal');
    const modalButtons = document.querySelectorAll('.open-modal');


    modalButtons.forEach(button => {
     button.addEventListener('click', openModal);
});

    function openModal (e){
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    modal.addEventListener('click', closeModal);

    function closeModal(e){
        e.preventDefault()
        const target = e.target 

        if (target.closest('.modal__cancel') || target.classList.contains('modal')){
            document.body.classList.remove('body--opened-modal')
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
    slidesPerView: 1, 
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
              slidesPerView: 2,  
            }
          }

});

// ----
const inputsTel = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputsTel)



// ----
let thumbsSwiper = new Swiper(".product__slider-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
});


let mainSwiper = new Swiper(".product__slider-main", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".product-next",
    prevEl: ".product-prev",
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
});

    const modalClick = document.querySelector('.modal-click');
    const modalButton = document.querySelector('.open-modal-click');

   modalButton.addEventListener('click', openModalClick);

    function openModalClick (e){
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal-click')
    }

    modalClick.addEventListener('click', closeModalClick);

    function closeModalClick(e){
        e.preventDefault()
        const target = e.target 

        if (target.closest('.modal__cancel') || target.classList.contains('modal-click')){
            document.body.classList.remove('body--opened-modal-click')
        }
    }