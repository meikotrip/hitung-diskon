document.getElementById('submit').addEventListener('click', function () {
    const errorMessage = document.getElementById('error-message');
    const discountValue = document.getElementById('discount-value').value;
    const billAmount = document.getElementById('bill-amount').value;
    const discountAmount = document.getElementById('discount-amount');
    const priceAfterDiscount = document.getElementById('price-after-discount')

    if (discountValue === '' || billAmount === '') {
        errorMessage.classList.remove('d-none');
        errorMessage.classList.add('d-inline');
    } else {   
        const discount = billAmount * (discountValue / 100);
        const priceAfter = billAmount - discount;
        discountAmount.value = discount;
        priceAfterDiscount.value = priceAfter;

        // Close error message
        errorMessage.classList.remove('d-inline');
        errorMessage.classList.add('d-none');
    }
});

document.getElementById('reset').addEventListener('click', function () {
    const errorMessage = document.getElementById('error-message');
    const billAmount = document.getElementById('bill-amount');
    const discountValue = document.getElementById('discount-value');
    const discountAmount = document.getElementById('discount-amount');
    const priceAfterDiscount = document.getElementById('price-after-discount');
    
    // Close error message
    errorMessage.classList.remove('d-inline');
    errorMessage.classList.add('d-none');

    billAmount.value = "";
    discountValue.value = "";
    discountAmount.value = "";
    priceAfterDiscount.value = "";
});