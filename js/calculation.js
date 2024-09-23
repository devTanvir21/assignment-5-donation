// redirecting to the blog page
const btnBlog = document.getElementById('btn-blog');
btnBlog.addEventListener('click', function () {
    window.location.href = './blog.html';
})


const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');

const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');


// for btn active/inactive && class hidden
btnDonation.addEventListener('click', function () {
    if (btnDonation.classList.contains('bg-white')) {
        btnDonation.classList.replace('bg-white', 'bg-[#B4F461]');
        btnHistory.classList.replace('bg-[#B4F461]', 'bg-white');
    } else {
        btnDonation.classList.replace('bg-[#B4F461]', 'bg-white');
        btnHistory.classList.replace('bg-white', 'bg-[#B4F461]');
    }

    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');

});

btnHistory.addEventListener('click', function () {
    if (btnHistory.classList.contains('bg-white')) {
        btnHistory.classList.replace('bg-white', 'bg-[#B4F461]');
        btnDonation.classList.replace('bg-[#B4F461]', 'bg-white');
    } else {
        btnHistory.classList.replace('bg-[#B4F461]', 'bg-white');
        btnDonation.classList.replace('bg-white', 'bg-[#B4F461]');
    }

    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
});


// For calculating donation amount
const amountInHand = document.getElementById('amount-in-hand');
const amountInHandNumber = parseFloat(amountInHand.innerText);

function handleDonation(amountId, inputId) {
    const amount = document.getElementById(amountId);
    const amountInNumber = parseFloat(amount.innerText);

    const input = document.getElementById(inputId);
    const inputInNumber = parseFloat(input.value);

    if(inputInNumber <= 0){
        return alert('Invalid Input! Please try a valid amount!!');
    }

    const updatedAmount = amountInNumber + inputInNumber;
    amount.innerText = updatedAmount;

    const newAmountInHand = parseFloat(amountInHand.innerText) - inputInNumber;
    amountInHand.innerText = newAmountInHand;

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