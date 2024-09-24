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