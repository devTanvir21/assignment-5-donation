// For calculating donation amount
const amountInHand = document.getElementById('amount-in-hand');
const amountInHandNumber = parseFloat(amountInHand.innerText);


function handleDonation(incident, amountId, inputId) {
    const amount = document.getElementById(amountId);
    const amountInNumber = parseFloat(amount.innerText);

    const input = document.getElementById(inputId);
    const inputInNumber = parseFloat(input.value);
    

    if (inputInNumber <= 0) {
        input.value = '';
        const failedModal = document.getElementById('my_modal_2');
        return failedModal.showModal();
    }

    const updatedAmount = amountInNumber + inputInNumber;
    amount.innerText = updatedAmount;

    const newAmountInHand = parseFloat(amountInHand.innerText) - inputInNumber;
    if (newAmountInHand < 0) {
        return alert('Not enough balance');
    }
    amountInHand.innerText = newAmountInHand;

    input.value = '';

    // for modal
    const modal = document.getElementById('my_modal_1').showModal();

    // for history
    const headingNoakhali = document.getElementById('heading-noakhali').innerText;
    const headingFeni = document.getElementById('heading-feni').innerText;
    const headingQuota = document.getElementById('heading-quota').innerText;
    let heading = '';
    if (incident === 'btn-noakhali') {
        heading = headingNoakhali
    }
    else if (incident === 'btn-feni') {
        heading = headingFeni;
    }
    else {
        heading = headingQuota;
    }

    const historyContainer = document.getElementById('history-container');
    const currentTime = new Date().toString();

    const newHistory = document.createElement('div');
    newHistory.innerHTML = `<div class="p-8 rounded-2xl border shadow-xl">
            <p>
                <span class="text-xl font-bold">${inputInNumber} Taka is Donated for ${heading}</span> 
                <br>
                Date: ${currentTime}
            </p>
    </div>`;
    historyContainer.appendChild(newHistory);

}

const btnNoakhali = document.getElementById('btn-noakhali');
btnNoakhali.addEventListener('click', function () {
    handleDonation('btn-noakhali', 'amount-noakhali', 'input-noakhali');
});

const btnFeni = document.getElementById('btn-feni');
btnFeni.addEventListener('click', function () {
    handleDonation('btn-feni', 'amount-feni', 'input-feni');
});

const btnQuota = document.getElementById('btn-quota');
btnQuota.addEventListener('click', function () {
    handleDonation('btn-quota', 'amount-quota', 'input-quota');
});