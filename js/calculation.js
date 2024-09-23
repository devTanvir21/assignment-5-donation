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
// btnHistory.addEventListener('click', function () {
//     window.location.href = './history.html';
// })


// for btn active/inactive
btnDonation.addEventListener('click', function () {
    btnDonation.classList.replace('bg-[#B4F461]', 'bg-white');
    btnHistory.classList.replace('bg-white', 'bg-[#B4F461]');
});

btnHistory.addEventListener('click', function () {
    btnHistory.classList.replace('bg-white', 'bg-[#B4F461]');
    btnDonation.classList.replace('bg-[#B4F461]', 'bg-white');
});


// For calculating donation amount
const amountInHand = document.getElementById('amount-in-hand').innrText;
const amountInHandNumber = parseFloat(amountInHand);

function handleDonation(amountId, inputId) {
    const amount = document.getElementById(amountId).innerText;
    const amountInNumber = parseFloat(amount);

    const input = document.getElementById(inputId);
    const inputInNumber = parseFloat(input.value);
    if(inputInNumber !== 'number' || inputInNumber <= 0){
        return alert('Invalid Input! Please try a valid amount!!');
    }

    const updatedAmount = amountInNumber + inputInNumber;
    amount= updatedAmount;

    const newAmountInHand = parseFloat(amountInHand.innerText) - inputInNumber;
    amountInHand = newAmountInHand;

    input.value = '';

}

const btnNoakhali = document.getElementById('btn-noakhali');
btnNoakhali.addEventListener('click', function () {
    handleDonation('amount-noakhali', 'input-noakhali');
});

const btnFeni = document.getElementById('btn-feni');
btnFeni.addEventListener('click', function () {
    handleDonation('amount-feni', 'input-feni');
});

const btnQuota = document.getElementById('btn-quota');
btnQuota.addEventListener('click', function () {
    handleDonation('amount-quota', 'input-quota');
});