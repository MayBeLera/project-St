// ----
document.addEventListener('click', burgerInit);

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.header__nav-link');
    // const headerButton = document.querySelector('.header__button')

    if(!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return


    if(!document.body.classList.contains('body--opened-menu')){
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}

// ----
const tabControls = document.querySelector('.filters')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e){
    const regionTab = e.target.closest('.filter__region-link');
    const efncTab = e.target.closest('.filter__efnc-link');
    
    let clickedTab = regionTab || efncTab;
    if (!clickedTab) return;
    
    e.preventDefault();

    const tabType = regionTab ? 'region' : 'efnc';
    const activeClass = tabType === 'region' ? 'active__filter-region' : 'active__filter-efnc';
    
    if (clickedTab.classList.contains(activeClass)) return;
    
    const tabContentID = clickedTab.getAttribute('href');
    const tabContent = document.querySelector(tabContentID);
    
    const allTabsOfType = document.querySelectorAll(`.${activeClass}`);
    allTabsOfType.forEach(t => t.classList.remove(activeClass));
    
    const activeContent = document.querySelector('.cards__list--show');
    if (activeContent) {
        activeContent.classList.remove('cards__list--show');
    }
    
    clickedTab.classList.add(activeClass);
    if (tabContent) {
        tabContent.classList.add('cards__list--show');
    }
    syncLinkedTab(clickedTab, tabType);
}

function syncLinkedTab(clickedTab, clickedTabType) {
    const href = clickedTab.getAttribute('href');
    
    if (clickedTabType === 'region') {
        const linkedEfncTab = document.querySelector(`.filter__efnc-link[href="${href}"]`);
        if (linkedEfncTab && !linkedEfncTab.classList.contains('active__filter-efnc')) {
            const activeEfncTabs = document.querySelectorAll('.active__filter-efnc');
            activeEfncTabs.forEach(tab => tab.classList.remove('active__filter-efnc'));
            
            linkedEfncTab.classList.add('active__filter-efnc');
        }
    } else {
        const linkedRegionTab = document.querySelector(`.filter__region-link[href="${href}"]`);
        if (linkedRegionTab && !linkedRegionTab.classList.contains('active__filter-region')) {
            const activeRegionTabs = document.querySelectorAll('.active__filter-region');
            activeRegionTabs.forEach(tab => tab.classList.remove('active__filter-region'));
            
            linkedRegionTab.classList.add('active__filter-region');
        }
    }
}
// ----

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
    centeredSlides: false, 
    initialSlide: 0, 
    loop: true,
     slidesOffsetBefore: 1,


  navigation: {
    nextEl: '.document__next',
    prevEl: '.document__prev',
  },

});

// ----
const inputsTel = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputsTel)