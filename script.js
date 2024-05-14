function left() {
    const hotSellersItems = document.querySelector('.hot_sellers_items');
    const scrollAmount = 200;
    hotSellersItems.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

function right() {
    const hotSellersItems = document.querySelector('.hot_sellers_items');
    const scrollAmount = 200;
    hotSellersItems.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}