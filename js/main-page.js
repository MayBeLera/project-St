const cards = document.querySelectorAll('.card__item');
const loadMoreBtn = document.querySelector('.card__show-more');

loadMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    cards.forEach(card => card.classList.remove('card-hidden'));

    loadMoreBtn.classList.add('card-hidden');
});

if (cards.length > 0) {
    loadMoreBtn.classList.remove('card-hidden');
}


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
