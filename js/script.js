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
    const modalButton = document.querySelector('.card__link');
    
    modalButton.addEventListener('click', openModal)
    
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
// ----------
 const cards = document.querySelectorAll('.card__item');
            const loadMoreBtn = document.querySelector('.card__show-more');
            const CARDS_PER_LOAD = 4;
            let visibleCount = 8;

            // Показываем кнопку если есть скрытые карточки
            if (cards.length > 8) {
                loadMoreBtn.classList.remove('card-hidden');
            }

            // Обработчик кнопки
            loadMoreBtn.addEventListener('click', function(e) {
                e.preventDefault()
                // Показываем следующие 4 карточки
                for (let i = visibleCount; i < visibleCount + CARDS_PER_LOAD && i < cards.length; i++) {
                    cards[i].classList.remove('card-hidden');
                }
                
                visibleCount += CARDS_PER_LOAD;
                
                // Скрываем кнопку если больше нет карточек
                if (visibleCount >= cards.length) {
                    loadMoreBtn.classList.add('card-hidden');
                }
            });






// ----
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
    const moreInfo = e.target.closest('.card__characters-item');

    if(!moreIcon && !moreInfo) return;
    

    e.preventDefault();

    // Находим родительский контейнер конкретного элемента
    const cardItem = moreIcon ? moreIcon.closest('.card__characters-list') : moreInfo.closest('.card__characters-list');
    
    if(!cardItem) return;

    // Работаем только с конкретным элементом
    if(!cardItem.classList.contains('card-more-info')){
        cardItem.classList.add('card-more-info');
    } else {
        cardItem.classList.remove('card-more-info');
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