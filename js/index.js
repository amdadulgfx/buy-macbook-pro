function updateExtraCosts(extraCosts, price) {
    const extraCostsToAdd = document.getElementById(extraCosts);
    extraCostsToAdd.innerText = price;
    calculateTotalPrice();
};
//extra memory cost event
document.getElementById('8gb-memory').addEventListener('click', function () {
    updateExtraCosts('extra-memory-cost', 0);
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    updateExtraCosts('extra-memory-cost', 180);

});
// extra storage cost event 
document.getElementById('256gb-ssd').addEventListener('click', function () {
    updateExtraCosts('extra-storage-cost', 0);
});
document.getElementById('512gb-ssd').addEventListener('click', function () {
    updateExtraCosts('extra-storage-cost', 100);
});
document.getElementById('1tb-ssd').addEventListener('click', function () {
    updateExtraCosts('extra-storage-cost', 180);
});
//delivery charge event 
document.getElementById('delivery-free').addEventListener('click', function () {
    updateExtraCosts('delivery-cost', 0);

});
document.getElementById('delivery-premium').addEventListener('click', function () {
    updateExtraCosts('delivery-cost', 20);
});
//calculate total price
function calculateTotalPrice() {
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseFloat(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCosts = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCosts;
    document.getElementById('coupon-total').innerText = totalPrice.innerText;
}
// if users applies coupon
document.getElementById('coupon-apply').addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-code');
    const totalPrice = document.getElementById('total-price');
    const totalCouponPrice = document.getElementById('coupon-total');
    const totalPriceValue = parseFloat(totalPrice.innerText);
    const discountPrice = totalPriceValue * 0.2;
    if (couponCode.value == 'stevekaku') {
        totalCouponPrice.innerText = totalPriceValue - discountPrice;
    }
    couponCode.value = '';
});
