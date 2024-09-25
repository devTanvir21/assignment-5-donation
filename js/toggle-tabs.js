// redirecting to the blog page
const btnBlog = document.getElementById('btn-blog');
btnBlog.addEventListener('click', function () {
    window.location.href = './blog.html';
})

const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history');

const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');


function changeSection(currentButton, previousButton, currentSection, previousSection) {
    if (currentButton.classList.contains('bg-white')) {
        currentButton.classList.replace('bg-white', 'bg-[#B4F461]');
        previousButton.classList.replace('bg-[#B4F461]', 'bg-white');
    } 
    else {
        currentButton.classList.replace('bg-[#B4F461]', 'bg-white');
        previousButton.classList.replace('bg-white', 'bg-[#B4F461]');
    }
    currentSection.classList.remove('hidden');
    previousSection.classList.add('hidden');
}

btnDonation.addEventListener('click', function () {
    changeSection(btnDonation, btnHistory, donationSection, historySection);
});

btnHistory.addEventListener('click', function () {
    changeSection(btnHistory, btnDonation, historySection, donationSection);
});