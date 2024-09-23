// redirecting to the blog page
const btnBlog = document.getElementById('btn-blog');
btnBlog.addEventListener('click', function () {
    window.location.href = './blog.html';
})
// redirecting to the index/main page
const btnDonation = document.getElementById('btn-donation');
btnDonation.addEventListener('click', function () {
    window.location.href = './index.html';
})
// redirecting to the history page
const btnHistory = document.getElementById('btn-history');
btnHistory.addEventListener('click', function () {
    window.location.href = './history.html';
})

// // for calculating donation amount
const amountInHand = document.getElementById('amount-in-hand');
const amountInHandNumber = parseFloat(amountInHand.innerText);




const btnNoakhali = document.getElementById('btn-noakhali');

btnNoakhali.addEventListener('click', function () {
    const amountNoakhali = document.getElementById('amount-noakhali');
    const amountNoakhaliNumber = parseFloat(amountNoakhali.innerText);

    const inputNoakhali = document.getElementById('input-noakhali');
    const inputNoakhaliNumber = parseFloat(inputNoakhali.value);

    const updatedAmountNoakhali = amountNoakhaliNumber + inputNoakhaliNumber;
    amountNoakhali.innerText = updatedAmountNoakhali;

    const newAmountInHand = parseFloat(amountInHand.innerText) - inputNoakhaliNumber;
    amountInHand.innerText = newAmountInHand;

    inputNoakhali.value = '';
});


const btnFeni = document.getElementById('btn-feni');

btnFeni.addEventListener('click', function () {
    const amountFeni = document.getElementById('amount-feni');
    const amountFeniNumber = parseFloat(amountFeni.innerText);

    const inputFeni = document.getElementById('input-feni');
    const inputFeniNumber = parseFloat(inputFeni.value);

    const updatedAmountFeni = amountFeniNumber + inputFeniNumber;
    amountFeni.innerText = updatedAmountFeni;

    const newAmountInHand = parseFloat(amountInHand.innerText) - inputFeniNumber;
    amountInHand.innerText = newAmountInHand;

    inputFeni.value = '';

});




const btnQuota = document.getElementById('btn-quota');

btnQuota.addEventListener('click', function () {
    const amountQuota = document.getElementById('amount-quota');
    const amountQuotaNumber = parseFloat(amountQuota.innerText);

    const inputQuota = document.getElementById('input-quota');
    const inputQuotaNumber = parseFloat(inputQuota.value);

    const updatedAmountQuota = amountQuotaNumber + inputQuotaNumber;
    amountQuota.innerText = updatedAmountQuota;

    const newAmountInHand = parseFloat(amountInHand.innerText) - inputQuotaNumber;
    amountInHand.innerText = newAmountInHand;

    inputQuota.value = '';

});